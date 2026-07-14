import {execFileSync} from 'node:child_process';

const port = Number.parseInt(process.argv[2] ?? '3000', 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`Puerto no válido: ${process.argv[2] ?? ''}`);
  process.exit(1);
}

function listeningPids() {
  try {
    const output = execFileSync(
      'lsof',
      [`-tiTCP:${port}`, '-sTCP:LISTEN'],
      {encoding: 'utf8'},
    );

    return [...new Set(output.trim().split(/\s+/).filter(Boolean).map(Number))];
  } catch (error) {
    if (error?.status === 1) {
      return [];
    }

    throw error;
  }
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

let pids = listeningPids();

if (pids.length === 0) {
  console.log(`Puerto ${port} disponible.`);
  process.exit(0);
}

console.log(`Liberando puerto ${port} (PID: ${pids.join(', ')})...`);

for (const pid of pids) {
  try {
    process.kill(pid, 'SIGTERM');
  } catch (error) {
    if (error?.code !== 'ESRCH') {
      throw error;
    }
  }
}

for (let attempt = 0; attempt < 10; attempt += 1) {
  await wait(100);
  pids = listeningPids();
  if (pids.length === 0) {
    console.log(`Puerto ${port} liberado.`);
    process.exit(0);
  }
}

for (const pid of pids) {
  try {
    process.kill(pid, 'SIGKILL');
  } catch (error) {
    if (error?.code !== 'ESRCH') {
      throw error;
    }
  }
}

await wait(100);

if (listeningPids().length > 0) {
  console.error(`No se pudo liberar el puerto ${port}.`);
  process.exit(1);
}

console.log(`Puerto ${port} liberado.`);
