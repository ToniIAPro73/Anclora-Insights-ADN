# Memory — anclora-nexus

> Generated: 2026-07-14 09:22:51  
> Total memories: **99**  
> Breakdown: instruction: 8, fact: 4, decision: 13, goal: 6, preference: 7, context: 1, event: 25, learning: 13, observation: 3, artifact: 16, error: 3

---

## Instructions

*Standing rules, constraints, and guidelines to always follow.*

### Always include visible <label> elements above ever...

Always include visible <label> elements above every form input, select, and file field. Use FieldLabel component (or equivalent) with required indicator (*) for mandatory fields. Missing labels are a recurring UX issue — do it on first pass, not as a follow-up. User explicitly requested this be remembered to avoid repetition.

*Confidence: 1 | Status: active | Created: 2026-06-13T18:22:49*

### PE Landing and PE web are commercial surfaces only...

PE Landing and PE web are commercial surfaces only. Their intake_domain must be commercial_lead, not access_request. PE sources (private_estates_landing, private_estates_web) are blocked by the AncloraIntakeV1 model from creating access_request domain entries.

*Confidence: 1 | Status: active | Created: 2026-06-20T20:38:03*

### User added visual reference for landing: use High-...

User added visual reference for landing: use High-Converting Landing Page & Funnel Design for Leads.jpeg as a funnel/landing model, adapted to the ebook's premium Spanish editorial style.

*Confidence: 1 | Status: active | Created: 2026-06-26T14:00:45*

### Regla para anclora-nexus y futuras features/cambio...

Regla para anclora-nexus y futuras features/cambios: en cada feature o modificación, verificar explícitamente que los archivos implicados no tengan warnings del editor/linter aplicable (por ejemplo ESLint, TypeScript, Prettier, Tailwind suggestCanonicalClasses o markdownlint según el tipo de archivo) antes de cerrar la tarea.

*Confidence: 1 | Status: active | Created: 2026-06-13T23:28:23*

### El usuario quiere que la apariencia visual de Ancl...

El usuario quiere que la apariencia visual de Anclora Fiscal sea similar al tema ya publicado en /home/toni/projects/anclora-insights/shopify-themes/, adaptando ese lenguaje visual al backoffice fiscal.

*Confidence: 1 | Status: active | Created: 2026-07-02T22:25:25*

### El theme Shopify Éxito sin compañía debe mostrarse...

El theme Shopify Éxito sin compañía debe mostrarse por ahora únicamente en español porque el ebook solo existe en español. El selector de idiomas queda oculto por defecto mediante settings.show_language_selector=false, pero preparado para mostrar ES | EN cuando se publique la traducción inglesa y se active la opción del theme. Implementado y validado con Shopify Theme Check sin incidencias.

*Confidence: 1 | Status: active | Created: 2026-06-30T23:19:06*

### REGLA DE MEMANTO: Antes de registrar nueva entrada...

REGLA DE MEMANTO: Antes de registrar nueva entrada, ejecutar 'memanto recall' del tema para verificar si ya existe. Si existe, actualizar la existente en lugar de crear duplicada. Evita contaminación y mantiene memoria limpia y confiable. Aplicar a partir de ahora.

*Confidence: 1 | Status: active | Created: 2026-06-10T06:49:32*

### User requested landing update using Anexo_Exito_si...

User requested landing update using Anexo_Exito_sin_compañia.docx as editorial/design guidance and dist/exito-sin-compania-shopify-theme.zip as the technical source. Landing must be fully in Spanish, premium/elegant, improve sections, include relevant section content, and integrate portada.png, contraportada.png, mockup-delantero.png, and mockup-trasero.png.

*Confidence: 1 | Status: active | Created: 2026-06-26T13:53:26*

---

## Facts

*Verified information, project status, and established truths.*

### Anclora Fiscal: usuario confirma que migraciones 0...

Anclora Fiscal: usuario confirma que migraciones 0012, 0013 y 0014 ya están aplicadas en producción; no reaplicar durante SHOPIFY-04.

*Confidence: 1 | Status: active | Created: 2026-07-06T13:02:30*

### Anclora Nexus soporta 4 idiomas: español (es), cat...

Anclora Nexus soporta 4 idiomas: español (es), catalán (ca), inglés (en) y alemán (de). Los 11 idiomas del script seed_template_variants.py pertenecen a anclora-private-estates, no a Nexus.

*Confidence: 1 | Status: active | Created: 2026-06-14T15:36:09*

### Stack disponible: Ollama (local ligero) + LM Studi...

Stack disponible: Ollama (local ligero) + LM Studio (local) + GPT (OpenAI) + Claude (Anthropic) + OpenRouter. Hermes es worker en anclora-content-generator-ai, curador de contenido, usa OpenRouter. Estrategia token reduction: tareas simples→Ollama/OpenRouter, complejas→GPT/Claude. Decisión por complejidad de tarea, no fijo.

*Confidence: 1 | Status: active | Created: 2026-06-10T12:21:24*

### Anclora Fiscal: el usuario confirma que la base Ne...

Anclora Fiscal: el usuario confirma que la base Neon configurada no contiene ninguna tabla. Antes de usar AUTH_IDENTITIES_JSON será necesario aplicar las migraciones remotas y crear el tenant/actor inicial, pero cualquier migración externa requiere confirmación explícita.

*Confidence: 1 | Status: active | Created: 2026-07-03T11:58:59*

---

## Decisions

*Architectural choices, approach selections, and their rationale.*

### Configuración KDP confirmada por captura del usuar...

Configuración KDP confirmada por captura del usuario para Éxito sin compañía: interior en blanco y negro con papel blanco, sin sangría y cubierta mate. La cubierta envolvente debe calcularse con grosor de papel blanco, no crema.

*Confidence: 1 | Status: active | Created: 2026-06-30T20:43:24*

### Anclora Fiscal: Ventas Shopify debe mostrar los co...

Anclora Fiscal: Ventas Shopify debe mostrar los commercial_orders importados aunque aún no exista canonical_operation; el estado será Pendiente de conciliación hasta importar y emparejar el CSV de transacciones de Shopify Payments. Conciliación actual cruza pedido y evento financiero por externalOrderId/orderReference; no es aún conciliación directa contra extracto bancario.

*Confidence: 1 | Status: active | Created: 2026-07-05T10:53:11*

### Markdown cleanup completado: 216 warnings reducido...

Markdown cleanup completado: 216 warnings reducido a 0. Herramientas creadas: (1) .markdownlintrc.json (config con 100-char limit, reasonable defaults), (2) scripts/fix-all-markdown.py (auto-fixer para MD013/022/031/032/040/060/026/009). Comando verificación: markdownlint -c .markdownlintrc.json *.md. Comando fix: python3 scripts/fix-all-markdown.py. Issues arregladas automáticamente: blanks around code/headings/lists, language identifiers, table formatting, line wrapping, trailing spaces. 29/30 archivos fixed automáticamente. CERO warnings garantizado.

*Confidence: 0.95 | Status: active | Created: 2026-06-10T07:22:13*

### El usuario confirmó explícitamente instalar Next.j...

El usuario confirmó explícitamente instalar Next.js 15 y sus binarios oficiales @next/swc para ejecutar la Fase 0 de Anclora Fiscal.

*Confidence: 1 | Status: active | Created: 2026-07-02T22:20:18*

### Reorganización completada: Repository root limpiad...

Reorganización completada: Repository root limpiado de 23 → 1 archivo markdown. Todos los docs organizados en docs/ con 7 carpetas temáticas: token-reduction (4), markdown (2), anclora (5), agents (5), guides (4), standards (5), reference (3). Cada carpeta tiene su propio README.md. Commits: 7743aac, ea3ee54, 8c16130, 9611bbe en main branch.

*Confidence: 1 | Status: active | Created: 2026-06-10T12:05:26*

### El usuario quiere mantener en anclora-nexus el flu...

El usuario quiere mantener en anclora-nexus el flujo del repo documentado: development -> staging -> production. Para producción/Render no debe sustituirse por main ni por despliegues manuales paralelos salvo caso excepcional explícito.

*Confidence: 1 | Status: active | Created: 2026-06-10T02:46:34*

### El usuario autorizó explícitamente aplicar las mig...

El usuario autorizó explícitamente aplicar las migraciones y bootstrap inicial sobre la base Neon configurada en .env.local para Anclora Fiscal.

*Confidence: 1 | Status: active | Created: 2026-07-03T12:00:34*

### Anclora Fiscal: los pedidos Shopify con total 0 po...

Anclora Fiscal: los pedidos Shopify con total 0 por descuento 100% (p. ej. PRUEBA100) no tienen ni deben exigir pagos/movimientos de Shopify Payments; deben mostrarse como sin cobro requerido, no como falta importar Shopify Payments.

*Confidence: 1 | Status: active | Created: 2026-07-07T13:06:27*

### La pantalla de Facturación se limita a productos/o...

La pantalla de Facturación se limita a productos/operaciones de Shopify; el filtro Plataforma debe ocultarse y las consultas deben fijar sourceChannel=SHOPIFY.

*Confidence: 1 | Status: active | Created: 2026-07-05T10:26:16*

### Markdown cleanup FINAL: 300+ warnings → 0 warnings...

Markdown cleanup FINAL: 300+ warnings → 0 warnings. Solución: actualizar .markdownlintrc.json con ruleset 'markdownlint/style/relaxed' + line_length 120 (no 80/100), deshabilitar MD040/051/036/041-053. Crear scripts/clean-all-warnings.sh para trailing spaces. Todos 30 *.md archivos limpios. Verificar: 'markdownlint -c .markdownlintrc.json *.md' debe estar vacío. Ready for CI/CD.

*Confidence: 1 | Status: active | Created: 2026-06-10T07:24:39*

### Updated vision map generation prompt to: (1) Recog...

Updated vision map generation prompt to: (1) Recognize Bóveda de Anclora as canonical source of truth for ecosystem governance. (2) Enforce strict budget constraints: ALWAYS prioritize open source → zero-cost → low-cost (<500€/mo). (3) Require cost justification for tool recommendations. (4) Explicitly mention 'open source' in tool descriptions for clarity. Prompt now drives cost-conscious, architecturally-aligned map generation.

*Confidence: 1 | Status: active | Created: 2026-06-22T15:03:03*

### Decision: el usuario aprueba la propuesta de flujo...

Decision: el usuario aprueba la propuesta de flujo transversal Anclora para calidad de texto y quiere ampliarla con comprobación SEO/GEO/AEO para que repos nuevos y nuevas features cumplan calidad editorial, posicionamiento orgánico, generative engine optimization y answer engine optimization sin duplicar scripts por repo.

*Confidence: 1 | Status: active | Created: 2026-06-09T20:37:24 | Tags: `anclora`, `text-quality`, `seo`, `geo`, `aeo`*

### Reorganización del workspace Anclora completada: 5...

Reorganización del workspace Anclora completada: 5 repos reclasificados como [Tools] - Global Agent Memory, SDD Template, Awesome Skills Catalog, Agent Skills & MCP, Agency Agents Library. Documentado en WORKSPACE_STRUCTURE.md. Propósito: claridad visual entre PRODUCTOS (13 apps) vs TOOLING (5 repos). Commits en agency-agents: 52527de

*Confidence: 1 | Status: active | Created: 2026-06-10T06:26:43*

---

## Goals

*Objectives, targets, and milestones to track progress.*

### En anclora-fiscal, el usuario pidió continuar el t...

En anclora-fiscal, el usuario pidió continuar el trabajo incompleto de Claude Code sobre Phase 5b: emisión automática de facturas/rectificativas, propagación de email/dirección reales de Shopify y posterior filtrado contextual por fecha, tipo de producto y plataforma. Claude dejó 21 cambios sin validar al agotar su sesión; Codex debe completar revisión, pruebas y trabajo pendiente preservando esos cambios.

*Confidence: 1 | Status: active | Created: 2026-07-05T00:45:01*

### El usuario ha añadido el logo medalla y el lockup ...

El usuario ha añadido el logo medalla y el lockup horizontal dorados transparentes de Anclora Insights y solicita integrarlos de forma elegante y premium en el ZIP del theme Shopify de la landing.

*Confidence: 1 | Status: active | Created: 2026-06-30T21:31:01*

### El usuario quiere establecer como regla transversa...

El usuario quiere establecer como regla transversal para todas las aplicaciones del ecosistema Anclora una comprobación ortográfica, semántica y de humanización de textos, en español y en los demás idiomas usados por las apps, apoyada en skills reutilizables para Codex, Claude Code y Gemini CLI, evitando duplicar scripts por repositorio y alineándola con contratos/skills de la Bóveda Anclora y el agente Hermes.

*Confidence: 1 | Status: active | Created: 2026-06-09T20:26:42*

### For project /home/toni/projects/anclora-ebook-shop...

For project /home/toni/projects/anclora-ebook-shopify-landing, user requested creating a complete Shopify Online Store 2.0 theme ZIP for the ebook 'Éxito sin compañía' using the local DOCX manuscript and local landing reference image.

*Confidence: 1 | Status: active | Created: 2026-06-25T11:27:13*

### El usuario quiere analizar el repo /home/toni/proj...

El usuario quiere analizar el repo /home/toni/projects/agency-agents, valorar si debe incorporarse al workspace de ANCLORA como tooling/infraestructura de agentes y proponer mejoras concretas.

*Confidence: 1 | Status: active | Created: 2026-06-10T06:10:39*

### El usuario quiere subir la entrega final de Anclor...

El usuario quiere subir la entrega final de Anclora Group a una nota minima de 9 y pidió generar versiones revisadas de los entregables con mejor alineacion a la rúbrica.

*Confidence: 1 | Status: active | Created: 2026-06-09T00:46:25*

---

## Commitments

*Promises, obligations, and TODOs that need follow-through.*

*No memories of this type.*

---

## Preferences

*User and entity preferences for personalization.*

### El usuario quiere que los tres documentos finales ...

El usuario quiere que los tres documentos finales mantengan exactamente sus nombres actuales mientras se corrige ortografía y estilo: PDF de entrega final, PPTX de presentación y PDF de presentación.

*Confidence: 1 | Status: active | Created: 2026-06-09T20:07:24*

### En la presentación ejecutiva final, el usuario pid...

En la presentación ejecutiva final, el usuario pidió quitar de los títulos las duraciones tipo '1 minuto' o '1,5 minutos' en PPTX y PDF, sin tocar el resto del contenido; las menciones de tiempo dentro del cuerpo, como 'menos de 10 minutos', deben conservarse.

*Confidence: 1 | Status: active | Created: 2026-06-09T18:14:59*

### El usuario corrigió el PDF final de IA Pro PYMES: ...

El usuario corrigió el PDF final de IA Pro PYMES: no quiere títulos o subtítulos huérfanos al final de página ni bloques de prompt partidos entre páginas; se ajustó el generador con reglas de paginación para mantener subtítulos con su contenido y forzar páginas limpias en 4.3 y 4.4.

*Confidence: 1 | Status: active | Created: 2026-06-09T16:22:15*

### El usuario quiere que las compras nuevas del ebook...

El usuario quiere que las compras nuevas del ebook Éxito sin compañía partan siempre de cantidad 1. Se añadió quantity=1 explícito a los tres formularios de producto del tema Shopify (producto, bloque de compra y CTA final), sin falsear ni sobrescribir cantidades ya persistidas en el carrito.

*Confidence: 1 | Status: active | Created: 2026-07-01T02:22:57*

### El usuario quiere que la presentación ejecutiva fi...

El usuario quiere que la presentación ejecutiva final use el fondo /home/toni/projects/anclora-private-estates/public/fondo-pantalla-menu-1.jpg en todas las diapositivas del PPTX y del PDF, a página completa, manteniendo legibilidad 100% y acabado elegante/premium.

*Confidence: 1 | Status: active | Created: 2026-06-09T16:28:53*

### Usuario activó Caveman modo full para respuestas u...

Usuario activó Caveman modo full para respuestas ultra concisas; mantener activo hasta que diga stop caveman o modo normal.

*Confidence: 1 | Status: active | Created: 2026-07-06T11:50:32*

### Preferencia: repos profesionales deben tener raíz ...

Preferencia: repos profesionales deben tener raíz limpia con solo README.md, LICENSE, .gitignore, y configs. Toda documentación → docs/ con estructura temática (guides/, standards/, reference/, etc). Cada carpeta con README.md local. Reduces cognitive load y escalable.

*Confidence: 0.95 | Status: active | Created: 2026-06-10T12:05:35*

---

## Relationships

*Entity connections, team context, and collaboration patterns.*

*No memories of this type.*

---

## Context

*Session summaries, status updates, and conversation state.*

### Anclora Nexus actua como pieza transversal del eco...

Anclora Nexus actua como pieza transversal del ecosistema Anclora para conversion, coordinacion y soporte de flujos entre productos.

*Confidence: 0.9 | Status: active | Created: 2026-06-04T21:19:09*

---

## Events

*Important conversations, milestones, and temporal occurrences.*

### Anclora Fiscal UX de importación actualizado el 20...

Anclora Fiscal UX de importación actualizado el 2026-07-07: FileDropzone muestra nombre/tamaño del archivo seleccionado y el formulario de importación entra inmediatamente en estado ocupado con aria-busy y cursor progress al generar vista previa.

*Confidence: 1 | Status: active | Created: 2026-07-07T09:55:23*

### SHOPIFY-07 completada y publicada en origin/main c...

SHOPIFY-07 completada y publicada en origin/main con commit 32e7998. Se actualizaron mapeo, conciliación, dominio, datos, API, limitaciones y phase log; se añadieron ADR 0006-0009, runbook de exports e informe final. Aceptación local de exports reales: 4 pedidos, 2 transacciones, 2 ledger, enlaces por Id y Name, refund visible, neto -0,45 EUR, 2 payout pending sin ID y 3 pedidos cero excluidos. Los CSV se retiraron del árbol Git pero se preservan localmente e ignorados; siguen presentes en historial remoto previo y borrarlos exigiría reescritura autorizada. Calidad: lint/typecheck/build 7/7, 429 tests, E2E 33/33, migraciones limpias y repetibles, markdownlint 0, UI desktop/móvil sin errores ni overflow.

*Confidence: 1 | Status: active | Created: 2026-07-06T19:30:53*

### Cierre Nexus DMS wizard 2026-06-14: una plantilla ...

Cierre Nexus DMS wizard 2026-06-14: una plantilla publicada seguía sin permitir 'Siguiente' porque /folders/{id}/available-templates exigía legal_review_status=approved además de status=published; la versión estaba published pero legal_review_status=pending. Commit fe7bb38 permite generar borradores desde plantillas draft/published con versión no retirada/rechazada y mejora contraste dark del modal GenerateDocumentWizard. Verificado lint/typecheck/pytest. Pipeline completado: development fe7bb38, staging eef1eb7, production a264192, main 515bd11; repo local devuelto a development limpio.

*Confidence: 1 | Status: active | Created: 2026-06-14T04:16:43*

### Publicado en origin/main del tema Shopify Éxito si...

Publicado en origin/main del tema Shopify Éxito sin compañía el commit bc480f1564ce26bc0583ba50452a20bd1ced56a2 (fix: open checkout from Shopify theme editor). Checkout abre nueva pestaña en designMode y mantiene envío nativo en storefront. Repo limpio y sincronizado.

*Confidence: 1 | Status: active | Created: 2026-07-01T02:48:40*

### Applied fix/placeholder-rule-spanish-todo in /home...

Applied fix/placeholder-rule-spanish-todo in /home/toni/projects/anclora-projects-infra without commit/push: TODO/TBD/FIXME placeholder rules are now case-sensitive, completar/actualizar/rellenar only match bracketed placeholders, Spanish 'todo lo demás es secundario' self-test added, damaged tarea(s) pendiente(s) prose repaired in projects/shared and regenerated knowledge-sets/checksums. Bash self-test exit 0, leak injection exit 2, normal validation exit 0, grep clean, PowerShell validation exit 0.

*Confidence: 0.95 | Status: active | Created: 2026-06-26T09:28:18*

### Committed and pushed branch chore/match-card-opaci...

Committed and pushed branch chore/match-card-opacity with commit c53e350 (Match card opacity across app), including only the 10 touched component files and excluding unrelated apps/api, pnpm-lock, tests, and apps/worker changes.

*Confidence: 1 | Status: active | Created: 2026-06-16T07:52:47*

### Ecosystem consolidation Phase 4 implemented locall...

Ecosystem consolidation Phase 4 implemented locally on 2026-06-20. Added FileStudio MinerU property dossier processor/tests; Content Generator MinerU RAG ingestion, rag_chunks migration/schema, SHA-256 dedup property test, crypto watermark engine and round-trip/tamper property tests; Data Lab Mallorca AVM model with confidence and geography property tests; tasks.md marks 9.1-9.8 and checkpoint 10 complete. Validated with FileStudio test/typecheck/lint/build, Content Generator type-check/lint/build/targeted vitest, Data Lab lint/test/build, Anclora Group lint/test. Changes not yet committed in this turn.

*Confidence: 1 | Status: active | Created: 2026-06-19T23:23:52*

### Anclora Fiscal: fases 6, 7 y 8 del prompt maestro ...

Anclora Fiscal: fases 6, 7 y 8 del prompt maestro completadas y publicadas en main. Commits dbaaf1d (SIF/alertas), 1ef70d2 (descarga ZIP verificada) y fase 8 QR endurecida con cotejo manual pendiente.

*Confidence: 1 | Status: active | Created: 2026-07-12T15:14:45*

### Cierre: reforzado backend/services/syncxml_pilot_s...

Cierre: reforzado backend/services/syncxml_pilot_service.py en anclora-nexus con guards fail-closed para staging/preview/development y ALLOW_REAL_SUPABASE_WRITE=false. Rama chore/nexus-staging-safety-guards. Commit 32da0dd.

*Confidence: 0.95 | Status: active | Created: 2026-06-08T18:00:26*

### Anclora Fiscal segunda revisión implementada y pub...

Anclora Fiscal segunda revisión implementada y publicada hasta FASE 5 inclusive en main: baseline 6da8ff8, tipos AEAT 0db7742, emisión F2/F1/F3/R5 y migración 0025 2d953b2, runbook/diagnóstico eadaa0a, claims concurrentes y migración 0026 3ca8a34, procesador protegido y Vercel Cron 8ae6bde. Quedan FASES 6-24 del prompt maestro.

*Confidence: 1 | Status: active | Created: 2026-07-12T10:22:46*

### Anclora Fiscal Fase 3 completada: motor fiscal ver...

Anclora Fiscal Fase 3 completada: motor fiscal versionado con DEMO_CONFIG España 2026 y fuentes AEAT, 4% ebook nacional y 21% general configurables, OSS/KDP no validado en revisión, simulador /tax-engine, factura y rectificativa PDF inmutables con secuencias y SHA-256, migración 0003. Suite: 12 tests, lint, typecheck y build pasan.

*Confidence: 1 | Status: active | Created: 2026-07-02T23:04:57*

### Confirmación final en anclora-nexus: la rama chore...

Confirmación final en anclora-nexus: la rama chore/nexus-staging-safety-guards no existe local ni remotamente tras git fetch --prune; no hubo que ejecutar borrado adicional.

*Confidence: 0.95 | Status: active | Created: 2026-06-10T03:03:14*

### Implementada feature SDD hero-proposition-clarity ...

Implementada feature SDD hero-proposition-clarity en anclora-private-estates-landing: rama feat/codex-hero-proposition-clarity, spec/tasks en sdd/features/hero-proposition-clarity, tests TDD añadidos en src/content/site-copy.test.ts y hero copy actualizado en todos los locales activos para hacerlo directo a propietarios premium y venta privada. Validaciones pasadas: npm test, npm run build, markdownlint. Queda gate Hermes Copy Curator antes de merge por cambio de copy público.

*Confidence: 1 | Status: active | Created: 2026-06-11T11:20:47*

### Implementado localmente en el tema Shopify Éxito s...

Implementado localmente en el tema Shopify Éxito sin compañía: las etiquetas de confianza de Compra segura (Formato digital, Lectura práctica, Sin suscripciones) usan fondo, borde y texto específicos por tema, con contraste validado 14.28:1 oscuro y 13.96:1 claro. La frase 'Puedes darte de baja cuando quieras.' queda unida como bloque en la segunda línea bajo el aviso del formulario.

*Confidence: 1 | Status: active | Created: 2026-07-01T01:22:50*

### Publicado en origin/main del tema Shopify Éxito si...

Publicado en origin/main del tema Shopify Éxito sin compañía el commit a06d019690c544c304daabe9c22ad679b140411a (feat: improve trust labels and proximity rings). Incluye etiquetas de Compra segura con contraste por tema, frase de baja unida en segunda línea y tres anillos diferenciados oro/cobre/azul. Repo limpio y sincronizado.

*Confidence: 1 | Status: active | Created: 2026-07-01T01:31:08*

### Anclora Fiscal Fases 1 y 2 completadas y validadas...

Anclora Fiscal Fases 1 y 2 completadas y validadas: importadores Shopify CSV/PDF con evidencia SHA-256 y preview sin PII, endpoint y pantalla /imports, modelos/migraciones 0001-0002, matching pedido+checkout con confianza explicada y AI-1001 charge+refund con neto comercial cero, fee 0,45 EUR y liquidación -0,45 EUR. Siete tests, lint, typecheck y build pasan.

*Confidence: 1 | Status: active | Created: 2026-07-02T22:54:20*

### Fase 0 de VisionFlow hardening completada 2026-06-...

Fase 0 de VisionFlow hardening completada 2026-06-23: CI migrado a PostgreSQL 16 efímero, continue-on-error eliminado de todos los workflows, exports cambiados a access:private con proxy server-side via get(), NEXT_PUBLIC_OPENROUTER_API_KEY fallback eliminado, test de detección de secretos añadido, CSP report-only añadida, guard de divergencia doc/código en scripts/check-stack-divergence.sh. Rama: feat/claudecode-visionflow-e2e-infra. 14 archivos modificados, 12 test files en verde, 2 skipped (SQLite legacy). Gate de salida superado. Sin commit/push.

*Confidence: 0.98 | Status: active | Created: 2026-06-23T02:40:14*

### Seguimiento Nexus DMS 2026-06-14: la plantilla Arr...

Seguimiento Nexus DMS 2026-06-14: la plantilla Arras ES estaba published y su versión published, pero legal_review_status seguía pending; se corrigió en Supabase a approved para desbloquear el backend desplegado anterior y se añadió commit c9273e4 para que publicar plantillas actualice también versiones a status/translation/legal approved. Pipeline completado: development c9273e4, staging 30b3fa6, production 1181fba, main 802904e; repo local en development limpio.

*Confidence: 1 | Status: active | Created: 2026-06-14T04:21:05*

### Anclora Fiscal Fase 0 completada: monorepo pnpm/Tu...

Anclora Fiscal Fase 0 completada: monorepo pnpm/Turborepo, Next.js 15, Fastify/OpenAPI, Drizzle Neon/PGlite, RBAC, AuditEvent, StoragePort, CI y dashboard visual inspirado en el tema Shopify publicado. Lint, typecheck, 3 tests y build pasan.

*Confidence: 1 | Status: active | Created: 2026-07-02T22:39:56*

### Promoción completada en anclora-nexus para DMS/CLM...

Promoción completada en anclora-nexus para DMS/CLM Complete el 2026-06-14: feat/nexus-dms-clm-complete se integró en development (e1f7ea5), luego staging (dccd8ac), production (88e616e) y main (b6ae06a). La rama feature fue eliminada local y remotamente. El repo quedó en development sincronizado con origin/development y las ramas permanentes locales/remotas coinciden.

*Confidence: 1 | Status: active | Created: 2026-06-13T23:21:54*

### SHOPIFY-04 completada y publicada en origin/main c...

SHOPIFY-04 completada y publicada en origin/main con commit 1c8d298. Se separaron los tres streams Shopify (pedidos, transacciones de pedido y ledger Payments), se añadieron previews seguros específicos, detección exacta de stream, retry con preview completo, IDs persistidos de incidencias y se eliminaron efectos automáticos de matching/facturación durante confirmación. No se añadieron ni aplicaron migraciones; 0012-0014 ya estaban en producción según el usuario. Validación: lint y typecheck 7/7, web 62 tests, DB 94, conectores 41, API 156, build 7/7 y Playwright 33/33.

*Confidence: 1 | Status: active | Created: 2026-07-06T13:37:52*

### Instalada globalmente la skill agent-browser desde...

Instalada globalmente la skill agent-browser desde vercel-labs/agent-browser para Codex mediante 'npx skills add vercel-labs/agent-browser --global --agent codex --yes'. Verificada con 'npx skills list --global --agent codex --json'; ruta compartida: /home/toni/.agents/skills/agent-browser.

*Confidence: 1 | Status: active | Created: 2026-07-02T18:19:53*

### Deleted branch chore/match-card-opacity locally an...

Deleted branch chore/match-card-opacity locally and from origin after it was promoted to main. Could not switch workspace back to main because uncommitted pnpm-lock.yaml changes would be overwritten, so the repo remained on detached HEAD.

*Confidence: 1 | Status: active | Created: 2026-06-16T07:57:17*

### Cierre: commits y push realizados para el flujo tr...

Cierre: commits y push realizados para el flujo transversal Anclora de calidad textual/SEO/GEO/AEO. anclora-agent-skills main commit 960a1fc; Boveda-Anclora docs/apply-ai-compliance-system-cards commit 822f96b.

*Confidence: 0.95 | Status: active | Created: 2026-06-09T21:12:01 | Tags: `anclora`, `text-quality`, `commit`, `push`*

### Implementado localmente en el tema Shopify Éxito s...

Implementado localmente en el tema Shopify Éxito sin compañía un sistema hover frontal para cards de Para quién es, Los mecanismos invisibles y El contenido (fragmentos y capítulos), además de botones del hero: escala sin desplazamiento vertical, fondo destacado, borde y sombra inferior, con colores específicos dark/light y contraste WCAG validado. Corregida también la cascada del footer moviendo las reglas theme-logo después de site-footer__logo. Chrome real validó hover, fondo y sombra en 6 componentes y alternancia exclusiva de lockup en ambos temas.

*Confidence: 1 | Status: active | Created: 2026-07-01T01:11:54*

---

## Learnings

*Knowledge acquired from experience, corrections, and insights.*

### User corrected DOCX cover edit: first-page text mu...

User corrected DOCX cover edit: first-page text must be 100% legible, broad pale veil over the maze image is unacceptable because it hides too much of the cover image, and the blank second page may be used for the original cover image full bleed.

*Confidence: 1 | Status: active | Created: 2026-06-25T14:54:26*

### Aclaración validada sobre Shopify: quantity=1 en e...

Aclaración validada sobre Shopify: quantity=1 en el formulario define la cantidad añadida en una compra nueva, pero no sobrescribe un line item ya persistido en el carrito. Si el editor conserva cantidad 2, debe cambiarse una vez a 1 o eliminarse la línea y volver a añadir el ebook; forzar 1 al renderizar rompería el soporte de cantidades múltiples y desincronizaría el total.

*Confidence: 1 | Status: active | Created: 2026-07-01T02:42:16*

### Windows portable semver fix: Next.js standalone tr...

Windows portable semver fix: Next.js standalone traces semver@7.8.1 as a stub (only package.json) in the pnpm flat namespace because it uses its own bundled semver in next/dist/compiled/semver. Sharp@0.35.1 requires semver@7.8.4 (full package). Fix: after flat layer step in build-windows-portable.sh, detect stub (missing index.js), replace with full semver@7.8.4 from repo pnpm store. Validated: ZIP 250MB, SHA 08ff9c809ea3c7637de9776c82c5cac5982b4f241799646defb6d0620d136518, native test PASS on Windows, Sharp PNG->WebP 68 bytes RIFF/WEBP magic verified.

*Confidence: 0.95 | Status: active | Created: 2026-06-16T19:34:56*

### Task 4 SSL fix: changed spawn env type from Record...

Task 4 SSL fix: changed spawn env type from Record<string,string> to NodeJS.ProcessEnv and added stdio: ['ignore','pipe','pipe'] to resolve TypeScript overload ambiguity in metadata.ts. All 741 tests pass, typecheck clean.

*Confidence: 0.95 | Status: active | Created: 2026-06-24T20:36:13*

### Correction: after deleting chore/match-card-opacit...

Correction: after deleting chore/match-card-opacity locally and remotely, the repository status showed current branch feat/anclora-filestudio-service-api, not detached HEAD. Switching to main remained blocked by uncommitted pnpm-lock.yaml changes.

*Confidence: 1 | Status: active | Created: 2026-06-16T07:57:47*

### Corrección del tema Éxito sin compañía: en modo cl...

Corrección del tema Éxito sin compañía: en modo claro, la identidad de Anclora Insights debe usar la medalla inversa aportada por el usuario y un lockup horizontal inverso, ambos como PNG RGBA con transparencia alfa real; no debe existir un damero rasterizado. La medalla y el lockup dorados se mantienen para modo oscuro.

*Confidence: 1 | Status: active | Created: 2026-07-01T00:45:02*

### Corregido localmente el tema Shopify Éxito sin com...

Corregido localmente el tema Shopify Éxito sin compañía: checkout vuelve al POST nativo oficial del formulario con name=checkout y ya no queda bloqueado en 'Actualizando carrito'; la actualización Ajax se reserva a cantidades/Actualizar. Se difiere el change un ciclo para evitar que desactive checkout al pulsarlo justo tras editar cantidad. En móvil claro el menú usa fondo claro y líneas oscuras; header compacto a 420px con logo 140px, controles 42px y CTA Comprar completo. Validado en Chrome: POST /cart con updates[test-key]=2 y checkout=; capturas dark/light sin overflow.

*Confidence: 1 | Status: active | Created: 2026-07-01T02:00:32*

### Corrección local del modo claro en Los tres anillo...

Corrección local del modo claro en Los tres anillos de cercanía: el rombo del núcleo cambia de marrón dorado #955f18 a oro mostaza #806800 y su halo a rgba(128,104,0,.2), separándolo visualmente del terracota #a64f35 del círculo cálido. Validado visualmente en Chrome y con contraste AA 4.83:1 para el núcleo.

*Confidence: 1 | Status: active | Created: 2026-07-01T01:36:31*

### SyncXML must NEVER be labeled as Synergi. Fixed in...

SyncXML must NEVER be labeled as Synergi. Fixed in AccessRequestsTable.tsx via PRODUCT_LABELS record. productLabel() now has exhaustive map for syncxml/synergi/data_lab. Unknown products return No reconocido.

*Confidence: 1 | Status: active | Created: 2026-06-20T20:37:40*

### User corrected SyncXML acceptance email wording on...

User corrected SyncXML acceptance email wording on 2026-06-21: do not show raw ISO expiry or the label Caducidad/revisión. The acceptance email must say: 'Tu acceso temporal estará disponible hasta el domingo, 28 de junio de 2026, a las 03:53 h (hora peninsular española).' and include 'Al iniciar sesión por primera vez, te pediremos crear una contraseña personal.' Implemented in Nexus commit e308f56 and promoted to production/main.

*Confidence: 1 | Status: active | Created: 2026-06-21T02:27:42*

### Corrección del usuario para KDP: el PDF interior d...

Corrección del usuario para KDP: el PDF interior de tapa blanda no debe incluir la portada gráfica. Debe comenzar con la portadilla interior blanca; la página legal queda como página 2 e incluye ISBN 9798184523026. La portada gráfica se entrega solo en la cubierta envolvente.

*Confidence: 1 | Status: active | Created: 2026-06-30T16:45:58*

### En anclora-nexus, para selects nativos en pantalla...

En anclora-nexus, para selects nativos en pantallas dark, usar la clase global ui-select/ui-select-ghost en lugar de clases inline de select. ui-select define estilos de option con fondo azul y texto claro; evita el bug de dropdown blanco con texto casi invisible visto en /dms/templates.

*Confidence: 1 | Status: active | Created: 2026-06-13T23:44:44*

### In anclora-groundsync, PDF TYPE_B day headers can ...

In anclora-groundsync, PDF TYPE_B day headers can be one or two digits (e.g. X1, J2, V10). A bug caused imports for employee 84881 in FTP 01-15 JULIO 2026 PAX.pdf to only detect 2026-07-10 because the parser matched only /^[LMXJVSD]\d{2}$/. Fix is to accept \d{1,2} in TYPE_B header detection and day column extraction.

*Confidence: 0.95 | Status: active | Created: 2026-06-16T18:05:11*

---

## Observations

*Patterns noticed, behavioral notes, and recurring themes.*

### La diferencia entre el interior KDP antiguo (~3.0 ...

La diferencia entre el interior KDP antiguo (~3.0 MB) y 3-v1 (~319 KB) se debe principalmente al emblema: el antiguo incrusta una imagen lossless de 1097x1116 a ~954 ppp que ocupa 2.119 MB; 3-v1 la normaliza a ~345x350 y 300 ppp en JPEG (~42 KB por uso). El texto sigue vectorial, 45 páginas, y 3-v1 tiene todas las fuentes incrustadas; qpdf no detecta errores.

*Confidence: 1 | Status: active | Created: 2026-06-30T17:00:07*

### Los cuatro PNG nuevos de Anclora Fiscal nombrados ...

Los cuatro PNG nuevos de Anclora Fiscal nombrados como transparentes son RGB opacos y llevan el patrón cuadriculado incrustado; la UI evita el rectángulo mediante recorte circular de la medalla y wordmark tipográfico sin modificar .evidence.

*Confidence: 1 | Status: active | Created: 2026-07-02T22:40:00*

### User reports issue importing .txt export from Bóve...

User reports issue importing .txt export from Bóveda de Anclora. File contains two git repos: (1) toniiapro73-boveda-anclora (PRIVATE), (2) anclora-command-center (dashboard subfolder). Import via Anclora catalog only recognized anclora-command-center, not the bóveda. User suspects private repo access issue, added GITHUB_TOKEN to .env as attempted fix. Need to verify: (a) bóveda URL in .txt export, (b) import parser recognition of private repos, (c) GITHUB_TOKEN configuration.

*Confidence: 0.95 | Status: active | Created: 2026-06-22T10:37:28*

---

## Artifacts

*Tool outputs, files, reports, and external references.*

### contraportada.png fue regenerada desde la nueva co...

contraportada.png fue regenerada desde la nueva contraportada.jpeg mediante reescalado Lanczos a 1800x2700 px, enfoque moderado para mejorar textos, conversión a PNG RGB sRGB de 8 bits y metadatos de 300 ppp. Se preservaron diseño, proporción y contenido exactos; la fuente JPEG original de 832x1248 limita la recuperación total de detalle.

*Confidence: 1 | Status: active | Created: 2026-06-30T15:49:50*

### Anclora Fiscal: se añadieron scripts SQL de limpie...

Anclora Fiscal: se añadieron scripts SQL de limpieza para importaciones Shopify order transactions y Shopify Payments: scripts/sql/cleanup-shopify-order-transactions-import.sql y scripts/sql/cleanup-shopify-payments-import.sql. Payments borra ledger entries, payouts derivados y financial_events Shopify legacy del tenant.

*Confidence: 1 | Status: active | Created: 2026-07-07T12:31:52*

### Anclora Fiscal: commit f3f6b1e (fix(web): show sel...

Anclora Fiscal: commit f3f6b1e (fix(web): show selected import file state) publicado en origin/main el 2026-07-07. Incluye feedback visual del archivo seleccionado y estado ocupado/cursor progress al generar vista previa.

*Confidence: 1 | Status: active | Created: 2026-07-07T09:57:10*

### portada.png fue reescalada de 1024x1536 a 1800x270...

portada.png fue reescalada de 1024x1536 a 1800x2700 px con filtro Lanczos y metadatos de densidad equivalentes a 300 ppp para KDP; se conservó PNG RGB sRGB.

*Confidence: 1 | Status: active | Created: 2026-06-27T05:52:09*

### Spec SDD transversal creada: docs/specs/real-estat...

Spec SDD transversal creada: docs/specs/real-estate-luxury-platform-2026/ en Boveda-Anclora. Tres archivos: REQUIREMENTS.md (591 líneas, 74 requisitos con IDs RE-REQ-XXX), DESIGN.md (894 líneas, 20 secciones, diagramas Mermaid, modelo conceptual), TASK.md (947 líneas, 26 tareas RE-TASK-001 a RE-TASK-061, 26 PRs secuenciados). Estado: Proposed. Fecha: 2026-06-20. Sin código de producto; solo planificación SDD.

*Confidence: 0.95 | Status: active | Created: 2026-06-20T10:25:02*

### La cubierta KDP 4-v1 de Éxito sin compañía fue rec...

La cubierta KDP 4-v1 de Éxito sin compañía fue recalculada y validada visualmente para 45 páginas, papel blanco: lomo 0,10134 pulgadas, tamaño total 12,35134 × 9,25 pulgadas, CMYK, 300 ppp; archivo doc-publicacion-amazon-kdp/4-v1-Exito-sin-compania-CUBIERTA-tapa-blanda-6x9-envolvente.pdf, SHA-256 a0abc72bb25deb3ccd29fb9d833b66298671e03db04cb9a4f2ad07b2d242504c.

*Confidence: 1 | Status: active | Created: 2026-06-30T20:48:09*

### Creado en anclora-private-estates-landing el docum...

Creado en anclora-private-estates-landing el documento ANALISIS_EJECUTIVO_ANCLORA_PRIVATE_ESTATES.md con análisis ejecutivo de la landing, diagnóstico técnico/UX/CRO/SEO y propuesta para integrar la vertical de alquiler vacacional de alto standing usando Anclora SyncXML con claims prudentes sobre SES.

*Confidence: 1 | Status: active | Created: 2026-06-11T10:53:46*

### Nexus access_requests final hardening prepared loc...

Nexus access_requests final hardening prepared locally on 2026-06-20 UTC: created forward-only migration supabase/migrations/20260620234119_remove_access_requests_defaults.sql (SHA-256 d4c9a8b68ba9fa52c01b9ae3b33a9dfc832db3a8012d08fe4c21628b2e4dd475) and runbook docs/release/access-requests-final-hardening-runbook.md. No Supabase SQL was applied, no deploy, no push, and no remote branches were modified.

*Confidence: 1 | Status: active | Created: 2026-06-20T23:43:57*

### Exito_sin_compania_SHOPIFY.docx fue actualizado in...

Exito_sin_compania_SHOPIFY.docx fue actualizado in situ sustituyendo únicamente la contraportada final por contraportada.jpeg. La imagen se incrustó como PNG sRGB para conservar las relaciones OOXML y la maquetación; el documento validó como ZIP, abrió en LibreOffice, mantuvo 46 páginas y la última página se verificó visualmente a página completa.

*Confidence: 1 | Status: active | Created: 2026-06-30T15:35:35*

### Generado el asset transparente brand/assets/anclor...

Generado el asset transparente brand/assets/anclora-insights-medalla-cuarto-superior-izquierdo.png (1254x1254 RGBA) para superponer en la esquina inferior derecha del Resumen de pedido de Shopify sobre #05564B, con espacio transparente superior e izquierdo para evitar solapamiento con textos.

*Confidence: 1 | Status: active | Created: 2026-07-01T14:14:11*

### Exito_sin_compania_SHOPIFY.docx fue auditado y lim...

Exito_sin_compania_SHOPIFY.docx fue auditado y limpiado de una etiqueta corporativa/de sensibilidad Microsoft Purview MIP. Se eliminaron docMetadata/LabelInfo.xml, la relación classificationlabels en _rels/.rels y su Override en [Content_Types].xml. Se verificó que no quedan rutas, GUID ni referencias MIP/Purview; el DOCX abre en LibreOffice y conserva 46 páginas y su maquetación.

*Confidence: 1 | Status: active | Created: 2026-06-30T15:40:16*

### Anclora Fiscal Shopify import UX/table reset chang...

Anclora Fiscal Shopify import UX/table reset changes were committed and pushed to origin/main as 7384bbc (fix(web): reset Shopify imports and refine tables).

*Confidence: 1 | Status: active | Created: 2026-07-07T03:08:29*

### contraportada.png fue reescalada de 1024x1536 a 18...

contraportada.png fue reescalada de 1024x1536 a 1800x2700 px con filtro Lanczos y metadatos de densidad equivalentes a 300 ppp para KDP; se conservó PNG RGB sRGB.

*Confidence: 1 | Status: active | Created: 2026-06-27T05:59:06*

### Se generó Exito_sin_compania_SHOPIFY.pdf desde el ...

Se generó Exito_sin_compania_SHOPIFY.pdf desde el DOCX base mediante exportación directa de LibreOffice Writer. El PDF conserva 46 páginas, formato 6x9 pulgadas, cubierta/contracubierta a página completa, estructura editorial premium, índice y maquetación; no contiene páginas en blanco, todas las fuentes están incrustadas y qpdf no detectó errores.

*Confidence: 1 | Status: active | Created: 2026-06-30T15:42:49*

### Anclora Fiscal refactor fiscal Shopify FASE 4 comp...

Anclora Fiscal refactor fiscal Shopify FASE 4 completada en feature/fiscal-refactor-shopify: commit 9039c69 feat(fiscal): orchestrate issuance from confirmed Shopify payments, pusheado a origin/feature/fiscal-refactor-shopify; la emisión se dispara desde shopify_order_payment_events sale/capture success, no desde pedidos, ledger, payout ni conciliación, y la emisión manual comparte política sin exigir ledger.

*Confidence: 1 | Status: active | Created: 2026-07-07T17:05:04*

### Se generaron versiones visuales de la entrega fina...

Se generaron versiones visuales de la entrega final de Anclora Group en /home/toni/projects/Curso-IA-Pro-Pymes/Trabajo_obligatorio: DOCX y PDF del documento, y PPTX y PDF de la presentación, usando una ruta HTML + Headless Chrome para mejorar el acabado visual.

*Confidence: 0.95 | Status: active | Created: 2026-06-09T01:19:49*

---

## Errors

*Failure records, bugs, and lessons learned from mistakes.*

### In Link2Media Windows portable, yt-dlp failed on u...

In Link2Media Windows portable, yt-dlp failed on user's Windows with SSL CERTIFICATE_VERIFY_FAILED unable to get local issuer certificate. Direct test showed yt-dlp succeeds with --no-check-certificates; add this flag to metadata and conversion yt-dlp invocations for portable reliability.

*Confidence: 1 | Status: active | Created: 2026-06-14T23:41:21*

### El comando documentado read -s AUTH_PASSWORD segui...

El comando documentado read -s AUTH_PASSWORD seguido de pipe produjo una contraseña vacía y auth:hash falló con 'Debe proporcionar la contraseña por stdin'. Se debe ofrecer un prompt interactivo visible que oculte la entrada.

*Confidence: 1 | Status: active | Created: 2026-07-03T11:59:01*

### In convertidor_youtube_mp3 portable Windows packag...

In convertidor_youtube_mp3 portable Windows packaging, user reproduced a 400 Bad Request on /api/metadata with YouTube short URL https://youtu.be/88fD-UtG_yo?si=xMGMQgiEI3iLRle1; fix should ensure youtu.be URLs with query params/trailing whitespace normalize correctly.

*Confidence: 1 | Status: active | Created: 2026-06-14T22:23:08*

---

*End of memory export.*
