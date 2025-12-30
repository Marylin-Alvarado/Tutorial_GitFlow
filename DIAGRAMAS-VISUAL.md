# GITFLOW - VISUAL PARA EXPLICAR EN VIDEO

---

## DIAGRAMA 1: Estructura de Ramas

```
┌─────────────────────────────────────────────────────────────────┐
│                    GITFLOW WORKFLOW VISUAL                       │
└─────────────────────────────────────────────────────────────────┘

                    PRODUCCIÓN (USUARIOS)
                            ↓
                    ┌───────────────┐
                    │     MAIN      │  ← Rama de producción
                    │  (estable)    │     Solo aquí va código
                    └───────────────┘     probado y listo
                       ↑         ↑
                       │         └──── hotfix/critical-bug
                       │
                    release/v1.0.0
                       ↑
                       │
                    ┌───────────────┐
                    │   DEVELOP     │  ← Rama de desarrollo
                    │ (integración) │    Integra features
                    └───────────────┘    terminadas
                       ↑
            ┌──────────┼──────────┐
            │          │          │
        feature/    feature/    feature/
        login       dashboard   user-profile
            │          │          │
      ┌─────┘          │          └─────┐
      │                │                │
   Dev 1            Dev 2            Dev 3
   trabaja          trabaja          trabaja
   sin conflictos   sin conflictos   sin conflictos
```

---

## DIAGRAMA 2: Flujo de una Feature

```
┌──────────────────────────────────────────────────────────────┐
│            FLUJO DESARROLLO DE UNA FEATURE                    │
└──────────────────────────────────────────────────────────────┘

PASO 1: Crear feature
   $ git checkout develop
   $ git checkout -b feature/login
   
   develop  ──────────┬──────────
                      │
                  feature/login  (nueva rama)

PASO 2: Desarrollar código
   feature/login  ──●──●──●──●──●
                   commits del desarrollo

PASO 3: Subir a GitHub
   $ git push origin feature/login
   
   GitHub
   └─ feature/login  (visible en GitHub)

PASO 4: Fusionar a develop
   $ git checkout develop
   $ git merge feature/login
   
   develop  ──────●─●─●──  ← Recibe el código
                   ↑
              (merge de feature/login)

PASO 5: Borrar rama
   $ git branch -d feature/login
   
   feature/login  (ELIMINADA, su trabajo está en develop)
```

---

## DIAGRAMA 3: Release a Producción

```
┌──────────────────────────────────────────────────────────────┐
│            FLUJO RELEASE A PRODUCCIÓN                         │
└──────────────────────────────────────────────────────────────┘

develop contiene features terminadas:
   develop  ──●──●──●──●──●
             feature/feature/feature/
             login dashboard profile
                
PASO 1: Crear release
   $ git checkout -b release/v1.0.0
   
   develop  ──●──●──●──●──●──┬─────
                              │
                         release/v1.0.0

PASO 2: Preparar versión
   - Actualizar version en package.json → 1.0.0
   - Crear/actualizar CHANGELOG.md
   - Pruebas finales
   
   release/v1.0.0  ──●──●

PASO 3: Fusionar a MAIN
   $ git checkout main
   $ git merge release/v1.0.0
   $ git tag -a v1.0.0
   
   main  ──────────●───  ← TAG: v1.0.0
                   ↑ (código en producción)

PASO 4: Fusionar de vuelta a develop
   $ git checkout develop
   $ git merge release/v1.0.0
   
   develop  ──●──●──●──●──●───●──
                           ↑ (sincronizado)

PASO 5: Borrar release
   $ git branch -d release/v1.0.0
   
   release/v1.0.0  (ELIMINADA)
```

---

## DIAGRAMA 4: Hotfix Urgente

```
┌──────────────────────────────────────────────────────────────┐
│            FLUJO HOTFIX PARA BUG CRÍTICO                      │
└──────────────────────────────────────────────────────────────┘

SITUACIÓN: Bug crítico encontrado en producción

main  ──────────●─────────  ← ERROR AQUÍ!
               v1.0.0

develop  ──●──●──●──●──●──  ← Desarrollo en progreso (no afectar)

PASO 1: Crear hotfix DESDE MAIN
   $ git checkout main
   $ git checkout -b hotfix/critical-bug
   
   main  ──────────●──┬──────
                      │
                  hotfix/critical-bug

PASO 2: Corregir el bug (RÁPIDO)
   hotfix/critical-bug  ──●──●
                         
PASO 3: Fusionar a MAIN (producción inmediata)
   $ git checkout main
   $ git merge hotfix/critical-bug
   $ git tag -a v1.0.1
   
   main  ──────────●──┬────●───  ← v1.0.1 (CORREGIDO)
                      │    ↑
                  hotfix/
                  crítico

PASO 4: Fusionar a DEVELOP (sincronizar)
   $ git checkout develop
   $ git merge hotfix/critical-bug
   
   develop  ──●──●──●──●──●──●──
                           ↑ (tiene el fix)

PASO 5: Borrar hotfix
   hotfix/critical-bug  (ELIMINADA)

RESULTADO:
   - main está corregida (v1.0.1)
   - develop tiene el fix
   - Desarrollo continúa sin interrupción
```

---

## DIAGRAMA 5: Vista General de Ramas

```
┌──────────────────────────────────────────────────────────────┐
│          TODAS LAS RAMAS EN UN MOMENTO DEL TIEMPO             │
└──────────────────────────────────────────────────────────────┘

ESTADO ACTUAL DEL REPOSITORIO:

main
├─ v1.0.0  (release/v1.0.0 fusionada)
└─ v1.0.1  (hotfix/critical-bug fusionada)

develop (rama principal de desarrollo)
├─ Incluye code de: feature/login
├─ Incluye code de: feature/dashboard
├─ Incluye code de: feature/user-profile
├─ Incluye fixes de: release/v1.0.0
└─ Incluye fixes de: hotfix/critical-bug

Ramas activas (en progreso):
├─ feature/login          (en desarrollo)
├─ feature/dashboard      (en desarrollo)
├─ feature/user-profile   (en desarrollo)
├─ release/v1.0.0         (preparación)
└─ hotfix/critical-bug    (corrección urgente)

NOTA: Las features se crean/borran continuamente
      Las releases duran poco (días)
      Los hotfixes duran poco (horas)
      MAIN y DEVELOP son permanentes
```

---

## DIAGRAMA 6: Tabla Comparativa Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPARACIÓN DE RAMAS                         │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┬───────────────────┬─────────────────────────┐
│ RAMA         │ PROPÓSITO         │ DURACIÓN / ESTADO       │
├──────────────┼───────────────────┼─────────────────────────┤
│ MAIN         │ PRODUCCIÓN        │ PERMANENTE             │
│              │ (usuarios reales) │ SAGRADA                │
│              │                   │ Siempre estable        │
├──────────────┼───────────────────┼─────────────────────────┤
│ DEVELOP      │ DESARROLLO        │ PERMANENTE             │
│              │ (integración)     │ Siempre activa         │
│              │                   │ Base de features       │
├──────────────┼───────────────────┼─────────────────────────┤
│ FEATURE/*    │ NUEVA FUNCIÓN     │ TEMPORAL (días)        │
│              │ (trabajo aislado) │ Se borra al merge      │
│              │                   │ Una por funcionalidad  │
├──────────────┼───────────────────┼─────────────────────────┤
│ RELEASE/*    │ LANZAMIENTO       │ TEMPORAL (días)        │
│              │ (preparación)     │ Se borra al merge      │
│              │                   │ Antes de producción    │
├──────────────┼───────────────────┼─────────────────────────┤
│ HOTFIX/*     │ BUG CRÍTICO       │ TEMPORAL (horas)       │
│              │ (respuesta rápida)│ Se borra al merge      │
│              │                   │ Desde MAIN             │
└──────────────┴───────────────────┴─────────────────────────┘
```

---

## DIAGRAMA 7: De dónde viene cada rama

```
┌──────────────────────────────────────────────────────────────┐
│           ORIGEN Y DESTINO DE CADA RAMA                       │
└──────────────────────────────────────────────────────────────┘

feature/login         feature/dashboard      feature/user-profile
        ↓                     ↓                        ↓
        └─────────────────────┴────────────────────────┘
                              │
                         Se fusionan a
                              ↓
                         DEVELOP
                              │
                    ┌─────────┴─────────┐
                    ↓                   ↓
              release/v1.0.0        hotfix/critical-bug
                    │                   │
            ┌───────┴───────┐           │
            ↓               ↓           ↓
          MAIN ←────────────┴───────────┘
         (producción)
            │
            ├─ TAG: v1.0.0 (release)
            └─ TAG: v1.0.1 (hotfix)

FLUJO RESUMIDO:
features → develop → release/hotfix → main
```

---

## DIAGRAMA 8: Archivos en cada rama

```
┌──────────────────────────────────────────────────────────────┐
│               ARCHIVOS POR RAMA (SIMPLIFICADO)                │
└──────────────────────────────────────────────────────────────┘

MAIN
  └─ README.md (documentación)

DEVELOP  
  ├─ README.md
  ├─ EXPLICACION-DETALLADA.md
  └─ RAMAS-Y-EJEMPLOS.md

feature/login
  ├─ login.html (formulario)
  ├─ login.js (validación)
  └─ styles.css (estilos)

feature/dashboard
  ├─ dashboard.html (panel)
  ├─ dashboard.js (funcionalidad)
  └─ dashboard.css (diseño)

feature/user-profile
  ├─ profile.html (perfil)
  ├─ profile.js (edición)
  └─ profile.css (diseño)

release/v1.0.0
  ├─ package.json (versión 1.0.0)
  ├─ CHANGELOG.md (cambios)
  └─ index.html (página inicio)

hotfix/critical-bug
  ├─ login-fixed.js (código corregido)
  └─ HOTFIX-REPORT.md (documentación)
```

---

## DIAGRAMA 9: Cómo se ve en GitHub

```
┌──────────────────────────────────────────────────────────────┐
│          SELECTOR DE RAMAS EN GITHUB / VS CODE                │
└──────────────────────────────────────────────────────────────┘

EN GITHUB (esquina superior izquierda):
┌─────────────────┐
│ develop    v    │ ← Haz clic aquí
└─────────────────┘
     ↓ (menú)
  ┌─────────────────────────┐
  │ develop                 │ ← Rama actual
  │ feature/dashboard       │
  │ feature/login           │
  │ feature/user-profile    │
  │ hotfix/critical-bug     │
  │ main                    │
  │ release/v1.0.0          │
  └─────────────────────────┘

EN VS CODE (esquina inferior izquierda):
┌─────────────────┐
│ develop         │ ← Haz clic aquí
└─────────────────┘
     ↓ (menú)
  ┌─────────────────────────┐
  │ develop                 │
  │ feature/dashboard       │
  │ feature/login           │
  │ feature/user-profile    │
  │ hotfix/critical-bug     │
  │ main                    │
  │ release/v1.0.0          │
  └─────────────────────────┘
```

---

## DIAGRAMA 10: Ciclo de vida de una rama

```
┌──────────────────────────────────────────────────────────────┐
│          CICLO DE VIDA DE UNA FEATURE                         │
└──────────────────────────────────────────────────────────────┘

DÍA 1 - CREAR
   $ git checkout -b feature/login
   - feature/login creada

DÍA 1-3 - DESARROLLAR
   $ git add . && git commit -m "feat: ..."
   feature/login  ──●──●──●
                   (commits)

DÍA 4 - PUSH A GITHUB
   $ git push origin feature/login
   GitHub ahora tiene feature/login

DÍA 4-5 - CODE REVIEW
   Pull Request abierto
   Equipo revisa el código
   Se solicitan cambios (si es necesario)

DÍA 5 - APROBAR Y FUSIONAR
   $ git checkout develop
   $ git merge feature/login
   develop  ──●──●──●────●
                         ↑ (recibe feature/login)

DÍA 5 - BORRAR RAMA
   $ git branch -d feature/login
   - feature/login eliminada (su código está en develop)

RESULTADO:
   - feature/login completada
   - Código integrado en develop
   - Rama temporal borrada
```

---

## DIAGRAMA 11: Comparación: Con vs Sin GitFlow

```
┌──────────────────────────────────────────────────────────────┐
│          SIN GITFLOW vs CON GITFLOW                           │
└──────────────────────────────────────────────────────────────┘

SIN GITFLOW (CAOS):
┌───────────────────────────────────────────────┐
│ main/master                                   │
│  ├─ Dev 1 commits directamente: ●●●●        │
│  ├─ Dev 2 commits directamente: ●●●●        │
│  ├─ Dev 3 commits directamente: ●●●●        │
│  ├─ Quién hizo qué?                          │
│  ├─ Qué funciona?                            │
│  ├─ Qué se rompió?                           │
│  └─ Cómo volvemos atrás?                     │
│                                               │
│ RESULTADO: DESASTRE                           │
└───────────────────────────────────────────────┘

CON GITFLOW (ORDEN):
┌───────────────────────────────────────────────┐
│ main        - Siempre estable                │
│ develop     - Integración ordenada           │
│ feature/*   - Dev 1, 2, 3 sin conflictos    │
│ release/*   - Preparación controlada         │
│ hotfix/*    - Respuesta rápida a bugs       │
│                                               │
│ RESULTADO: PROFESIONAL Y ORDENADO            │
└───────────────────────────────────────────────┘
```

---

## DIAGRAMA 12: Lecciones Clave

```
┌──────────────────────────────────────────────────────────────┐
│              LECCIONES CLAVE DE GITFLOW                       │
└──────────────────────────────────────────────────────────────┘

1. MAIN ES SAGRADO
   main ────────●────────●────────●
                (solo código probado)
                (nunca desarrollar aquí)

2. DEVELOP ES LA BASE
   develop ────●──●──●──●──●──●
                (integra features)
                (siempre funcional)

3. FEATURES SE AÍSLAN
   develop ──────┬──────┬──────┬──────
                 │      │      │
           feature/   feature/ feature/
           login    dashboard profile
           (sin conflictos)

4. RELEASES SON FORMALES
   develop → release → main + tag
   (preparación controlada)

5. HOTFIX ES EMERGENCIA
   main → hotfix → main + develop
   (respuesta rápida, sin esperar)

MORALEJA:
   - Organización clara = mejor software
   - Trabajo en equipo = sin caos
   - Respuesta rápida = confiabilidad
```

---

## CÓMO USAR ESTOS DIAGRAMAS EN TU VIDEO

1. Introduce el tema:
   - Muestra DIAGRAMA 1 (estructura general)
   - Explica por qué necesitas GitFlow

2. Desarrollo de features:
   - Muestra DIAGRAMA 2 (flujo de feature)
   - Demuestra en GitHub/VS Code

3. Release:
   - Muestra DIAGRAMA 3 (flujo release)
   - Muestra los archivos en release/v1.0.0

4. Hotfix:
   - Muestra DIAGRAMA 4 (flujo hotfix)
   - Explica por qué es importante

5. Resumen:
   - Muestra DIAGRAMA 12 (lecciones clave)
   - Finaliza con impacto

---

## IMPRIME O CAPTURA ESTOS DIAGRAMAS

Para que se vea mejor en video:
- Abre este archivo en otra pantalla
- Captura pantalla de los diagramas
- Úsalos como referencia visual

Ahora tienes TODO VISUAL para explicar en tu video!
