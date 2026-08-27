# D-005 Product Backlog

## Objetivo

Definir y priorizar las funcionalidades que serán desarrolladas durante
la construcción de DevTrack, manteniendo trazabilidad entre el alcance
funcional, los sprints y el estado real de implementación.

## Niveles de Prioridad

### P0 - Crítico

Funcionalidades obligatorias para que la V1 sea funcional.

### P1 - Importante

Funcionalidades de alto valor que mejoran significativamente la
experiencia.

### P2 - Deseable

Funcionalidades complementarias.

### P3 - Futuro

Funcionalidades planeadas para versiones posteriores.

## Estados

- **Completado:** funcionalidad implementada y validada dentro del
  alcance actual.
- **En progreso:** funcionalidad actualmente en desarrollo.
- **Pendiente:** funcionalidad planificada que todavía no ha sido
  implementada.
- **Parcial:** existe una implementación inicial, pero todavía requiere
  completar su alcance funcional.

---

# Product Backlog

## EPIC 1 - Autenticación

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-001 | Registro de Usuario | P0 | ✅ Completado |
| HU-002 | Inicio de Sesión | P0 | ✅ Completado |
| HU-003 | Cierre de Sesión | P0 | ✅ Completado |

## EPIC 2 - Perfil

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-004 | Actualizar Perfil | P1 | ⏳ Pendiente |
| HU-005 | Gestionar Tecnologías Favoritas | P1 | ⏳ Pendiente |

## EPIC 3 - Gestión de Proyectos

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-006 | Crear Proyecto | P0 | ✅ Completado |
| HU-007 | Editar Proyecto | P0 | ✅ Completado |
| HU-008 | Eliminar Proyecto | P0 | ✅ Completado |
| HU-009 | Consultar Proyecto | P0 | ✅ Completado |

## EPIC 4 - Gestión de Tareas

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-010 | Crear Tarea | P0 | ✅ Completado |
| HU-011 | Editar Tarea | P0 | ✅ Completado |
| HU-012 | Eliminar Tarea | P0 | ✅ Completado |
| HU-013 | Cambiar Estado de Tarea | P0 | ✅ Completado |

La gestión actual de tareas contempla los estados `pending`,
`in_progress` y `completed`, además de las prioridades `low`, `medium`
y `high`.

## EPIC 5 - Habilidades

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-014 | Registrar Tecnología | P1 | ⏳ Pendiente |
| HU-015 | Actualizar Nivel de Habilidad | P1 | ⏳ Pendiente |
| HU-016 | Asociar Tecnologías a Proyectos | P1 | ⏳ Pendiente |

## EPIC 6 - Metas de Aprendizaje

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-022 | Crear Meta | P1 | ⏳ Pendiente |
| HU-023 | Actualizar Progreso | P1 | ⏳ Pendiente |
| HU-024 | Completar Meta | P1 | ⏳ Pendiente |
| HU-025 | Visualizar Metas | P1 | ⏳ Pendiente |

## EPIC 7 - Dashboard

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-017 | Visualizar Estadísticas | P1 | 🟡 Parcial |
| HU-018 | Visualizar Proyectos Activos | P1 | 🟡 Parcial |
| HU-019 | Visualizar Tareas Pendientes | P1 | 🟡 Parcial |

> El Dashboard V1 y sus componentes iniciales fueron implementados
> durante la Fase 2. Su alcance funcional actual todavía no representa
> todas las capacidades previstas para el producto final.

## EPIC 8 - Crecimiento Profesional

| ID | Historia | Prioridad | Estado |
|---|---|---|---|
| HU-020 | Historial Profesional | P2 | ⏳ Pendiente |
| HU-021 | Generar Perfil Profesional | P2 | ⏳ Pendiente |

---

# Fase 3 - Desarrollo Funcional

La Fase 3 se centra en convertir la arquitectura e infraestructura
construidas durante las fases anteriores en funcionalidades de negocio
utilizables.

## Sprint F3-S1 - Gestión de Proyectos

| Elemento | Estado |
|---|---|
| Crear proyecto | ✅ |
| Consultar proyectos | ✅ |
| Editar proyecto | ✅ |
| Eliminar proyecto | ✅ |
| Navegación hacia Workspace | ✅ |

**Estado:** ✅ Sprint completado.

## Sprint F3-S2 - Project Workspace

| Elemento | Estado |
|---|---|
| Estructura inicial del Workspace | ✅ |
| Overview | ✅ |
| Visualización del último checkpoint | ✅ |
| Visualización del siguiente paso | ✅ |
| Visualización del progreso | ✅ |
| Guide contextual inicial | ✅ |
| Integración de Tasks dentro del Workspace | ✅ |

**Estado:** ✅ Sprint completado en su alcance inicial.

## Sprint F3-S3 - Gestión de Tareas

| Elemento | Estado |
|---|---|
| Crear tarea | ✅ |
| Listar tareas | ✅ |
| Editar tarea | ✅ |
| Eliminar tarea | ✅ |
| Cambiar estado | ✅ |
| Gestionar prioridad | ✅ |
| Persistencia del estado durante la sesión | ✅ |
| Indicadores visuales de estado y prioridad | ✅ |

**Estado:** ✅ Sprint completado en su alcance actual.

---

# Próximo Sprint

La siguiente actividad de la Fase 3 deberá definirse después de una
revisión funcional del Workspace y de los módulos ya implementados.

La selección del siguiente sprint deberá priorizar las funcionalidades
que aporten mayor valor a la propuesta central de DevTrack:

**preservar el contexto, facilitar la continuidad y mantener el control
sobre el proyecto.**

Antes de iniciar una nueva funcionalidad deberá verificarse que no
existan pendientes técnicos, documentales o de integración derivados de
los sprints anteriores.

---

# Funcionalidades Futuras (V2)

### P3

- Sistema de Logros
- Sistema de Rachas
- Certificaciones
- Integración con GitHub
- Línea de Tiempo de Actividad
- Trabajo Colaborativo
- Aplicación Móvil
- Inteligencia Artificial

---

# Estado General del Backlog

Actualmente DevTrack cuenta con la infraestructura de Fase 2 y con un
primer bloque funcional de Fase 3 centrado en **Projects, Project
Workspace y Tasks**.

La siguiente etapa deberá ampliar el Workspace de manera incremental,
evitando incorporar funcionalidades que no contribuyan directamente a
la visión definida en D-011 – Diseño Funcional del Producto.