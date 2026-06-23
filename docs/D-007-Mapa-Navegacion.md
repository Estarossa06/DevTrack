# D-007 Mapa de Navegación y Wireframes

## Control del Documento

### Información General

| Campo                | Valor           |
| -------------------- | --------------- |
| Proyecto             | DevTrack        |
| Documento            | D-007           |
| Versión              | 1.0             |
| Estado               | En elaboración  |
| Responsable          | Sebastián Campo |
| Fecha de Creación    | Junio 2026      |
| Última Actualización | Junio 2026      |

### Historial de Versiones

| Versión | Fecha      | Autor           | Descripción                                          |
| ------- | ---------- | --------------- | ---------------------------------------------------- |
| 1.0     | Junio 2026 | Sebastián Campo | Creación inicial del mapa de navegación y wireframes |

---

## Objetivo

Definir la estructura de navegación y la distribución inicial de las interfaces de usuario de DevTrack para la versión 1.0.

---

## Alcance

Este documento cubre las pantallas principales, los flujos de navegación y los wireframes de baja fidelidad correspondientes a la versión inicial del sistema.

---

## Mapa de Navegación

```text
Inicio
│
├── Login
│
└── Registro

Login
│
└── Dashboard

Dashboard
│
├── Proyectos
├── Habilidades
├── Metas
├── Perfil
└── Cerrar Sesión

Proyectos
│
├── Crear Proyecto
├── Editar Proyecto
├── Eliminar Proyecto
└── Detalle Proyecto

Detalle Proyecto
│
├── Tareas
└── Tecnologías

Habilidades
│
├── Registrar Tecnología
├── Actualizar Habilidad
└── Consultar Habilidades

Metas
│
├── Crear Meta
├── Actualizar Meta
└── Completar Meta

Perfil
│
├── Editar Perfil
└── Tecnologías Favoritas
```

---

## Pantallas Públicas

### Login

Permite la autenticación de usuarios registrados.

### Registro

Permite la creación de nuevas cuentas.

---

## Pantallas Privadas

### Dashboard

Pantalla principal del sistema con métricas y accesos rápidos.

### Proyectos

Gestión de proyectos creados por el usuario.

### Detalle Proyecto

Visualización detallada de un proyecto específico, incluyendo tareas y tecnologías asociadas.

### Habilidades

Gestión de tecnologías y habilidades registradas por el usuario.

### Metas

Gestión y seguimiento de metas de aprendizaje.

### Perfil

Administración de la información personal del usuario.

---

## Wireframes

### WF-001 Login

```text
┌─────────────────────────┐
│       DevTrack          │
│                         │
│ Correo Electrónico      │
│ [_______________]       │
│                         │
│ Contraseña              │
│ [_______________]       │
│                         │
│ [ Iniciar Sesión ]      │
│                         │
│ ¿No tienes cuenta?      │
│ Registrarse             │
└─────────────────────────┘
```

---

### WF-002 Dashboard

```text
┌─────────────────────────────────┐
│ Logo DevTrack      Usuario      │
├─────────────────────────────────┤
│ Dashboard                       │
│                                 │
│ Proyectos Activos: 4            │
│ Tareas Pendientes: 12           │
│ Metas Activas: 3                │
│ Tecnologías: 8                  │
│                                 │
│ [Ver Proyectos]                 │
│ [Ver Metas]                     │
└─────────────────────────────────┘
```

---

### WF-003 Proyectos

```text
┌─────────────────────────────────┐
│ Mis Proyectos                   │
│                                 │
│ [+ Nuevo Proyecto]              │
│                                 │
│ Proyecto A                      │
│ Estado: Activo                  │
│ [Ver] [Editar]                  │
│                                 │
│ Proyecto B                      │
│ Estado: Finalizado              │
│ [Ver] [Editar]                  │
└─────────────────────────────────┘
```

---

### WF-004 Detalle Proyecto

```text
┌─────────────────────────────────┐
│ Proyecto: DevTrack              │
├─────────────────────────────────┤
│ Descripción                     │
│                                 │
│ Tecnologías                     │
│ React                           │
│ Node.js                         │
│ PostgreSQL                      │
│                                 │
│ Tareas                          │
│                                 │
│ [ ] Diseñar Login               │
│ [✓] Crear Modelo BD             │
│                                 │
│ [+ Nueva Tarea]                 │
└─────────────────────────────────┘
```

---

### WF-005 Habilidades

┌─────────────────────────────────┐
│ Mis Habilidades                 │
├─────────────────────────────────┤
│ [+ Nueva Tecnología]            │
│                                 │
│ React          Intermedio 75%   │
│ Node.js        Básico      40%  │
│ PostgreSQL     Básico      30%  │
│                                 │
│ [Editar] [Eliminar]             │
└─────────────────────────────────┘

### WF-006 Metas

┌─────────────────────────────────┐
│ Metas de Aprendizaje            │
├─────────────────────────────────┤
│ [+ Nueva Meta]                  │
│                                 │
│ Aprender React                  │
│ Progreso: 80%                   │
│ Fecha objetivo: 31/08/2026      │
│                                 │
│ Aprender Docker                 │
│ Progreso: 25%                   │
│ Fecha objetivo: 15/10/2026      │
│                                 │
│ [Actualizar]                    │
└─────────────────────────────────┘

### WF-007 Perfil

┌─────────────────────────────────┐
│ Perfil Profesional              │
├─────────────────────────────────┤
│ Nombre: Sebastián Campo         │
│                                 │
│ Tecnologías: 8                  │
│ Proyectos: 4                    │
│ Metas Completadas: 6            │
│                                 │
│ Descripción Profesional         │
│                                 │
│ [Editar Perfil]                 │
└─────────────────────────────────┘

## Decisiones Tomadas

* Utilizar navegación basada en autenticación.
* Centralizar el acceso a funcionalidades desde el Dashboard.
* Mantener una estructura simple para la versión 1.0.
* Diseñar wireframes de baja fidelidad antes de iniciar el desarrollo visual.
* Separar la gestión de proyectos, habilidades y metas en módulos independientes.

---

## Pendientes

* Elaborar wireframes de media fidelidad.
* Definir guía visual inicial del sistema.
* Preparar prototipo navegable.

---

## Referencias Relacionadas

* D-001 Acta de Definición del Proyecto.
* D-002 Especificación de Requisitos de Software.
* D-003 Arquitectura del Sistema.
* D-004 Diseño de Base de Datos.
* D-005 Product Backlog.

---

## Estado del Documento

**Versión:** 1.0

**Estado:** En elaboración

**Responsable:** Sebastián Campo
