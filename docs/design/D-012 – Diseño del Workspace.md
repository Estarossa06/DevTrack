# D-012 – Diseño del Workspace

**Versión:** 1.0  
**Estado:** Aprobado  
**Fecha:** Julio 2026

---

# 1. Objetivo

El Workspace es el núcleo funcional de DevTrack.

Su propósito es concentrar toda la información relevante de un proyecto en un único lugar para que cualquier desarrollador pueda recuperar rápidamente el contexto del trabajo realizado y continuar el desarrollo sin perder tiempo recordando el estado del proyecto.

El Workspace debe responder siempre una pregunta:

> "¿Qué debo saber para continuar este proyecto ahora mismo?"

---

# 2. Principios

El Workspace se diseñará siguiendo los siguientes principios:

- Mostrar únicamente información relevante.
- Reducir la carga cognitiva del desarrollador.
- Mantener una estructura clara y consistente.
- Favorecer la continuidad del trabajo después de largos periodos sin actividad.
- Escalar fácilmente conforme el proyecto crezca.

---

# 3. Estructura General

Cada proyecto dispondrá de un Workspace propio.

Ruta:

/projects/:id

La estructura principal será:

Workspace

├── Header
├── Navegación
└── Contenido

---

# 4. Header

El encabezado del Workspace mostrará la información principal del proyecto.

Incluye:

- Nombre del proyecto
- Estado
- Descripción
- Botón para regresar a Projects

Su objetivo es identificar inmediatamente el proyecto sobre el que se está trabajando.

---

# 5. Navegación

El Workspace estará dividido en pestañas.

## Overview

Vista general del proyecto.

## Tasks

Gestión de tareas.

## Notes

Registro de decisiones técnicas, ideas y documentación rápida.

## Resources

Enlaces, documentos y recursos relacionados.

## Activity

Historial cronológico de cambios importantes.

## Settings

Configuración específica del proyecto.

---

# 6. Overview

El Overview representa el estado actual del proyecto.

Debe responder seis preguntas fundamentales.

## 6.1 ¿Dónde estoy?

Información resumida.

- Estado
- Progreso
- Última actualización

---

## 6.2 ¿Qué hice la última vez?

Últimos checkpoints importantes.

---

## 6.3 ¿Qué debo hacer ahora?

Próximo paso definido para el proyecto.

---

## 6.4 Guía

La Guía representa el principal diferenciador de DevTrack.

Analiza el estado actual del proyecto y propone una secuencia lógica de trabajo.

No pretende reemplazar al desarrollador.

Su función es facilitar la continuidad del proyecto.

---

## 6.5 Actividad reciente

Registro resumido de los cambios más recientes.

Ejemplo:

- Se creó Project Workspace.
- Se añadió Project Service.
- Se actualizó la interfaz.

---

## 6.6 Accesos rápidos

Acciones frecuentes.

- Abrir repositorio.
- Abrir documentación.
- Abrir demo.
- Editar proyecto.

---

# 7. Responsabilidad de cada pestaña

## Overview

Consultar el estado general.

No permite edición directa.

---

## Tasks

Administrar tareas del proyecto.

---

## Notes

Guardar contexto técnico y decisiones importantes.

---

## Resources

Centralizar documentación y enlaces.

---

## Activity

Visualizar la evolución histórica.

---

## Settings

Modificar la configuración del proyecto.

---

# 8. Escalabilidad

El Workspace deberá permitir la incorporación futura de nuevos módulos sin modificar su estructura principal.

Ejemplos:

- IA Assistant
- Team
- Roadmap
- Releases
- Analytics
- Notifications
- Integrations

---

# 9. Filosofía

El Workspace no pretende ser únicamente una ficha técnica del proyecto.

Su objetivo es convertirse en el centro operativo del desarrollo.

Cada elemento mostrado debe ayudar al desarrollador a recuperar el contexto y continuar el trabajo con la menor fricción posible.

Este principio guiará toda la evolución futura del Workspace.