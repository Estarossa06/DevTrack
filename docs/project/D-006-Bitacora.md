# D-006 Bitácora de Desarrollo

## Objetivo

Registrar cronológicamente todas las actividades realizadas durante el
desarrollo de DevTrack, incluyendo decisiones tomadas, problemas
encontrados, soluciones implementadas y próximos pasos.

---

# Registro de Actividades

## BD-001

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

### Actividad Realizada

* Creación de la estructura inicial del proyecto DevTrack.
* Organización de carpetas principales.
* Inicialización del repositorio Git local.
* Creación del archivo README.md.
* Creación del archivo .gitignore.
* Definición de la visión general del proyecto.
* Elaboración del documento D-001 Acta de Definición del Proyecto.
* Inicio del documento D-002 Especificación de Requisitos de Software.

### Decisiones Tomadas

* Utilizar React + Vite para el frontend.
* Utilizar Node.js + Express para el backend.
* Utilizar PostgreSQL como base de datos principal.
* Utilizar Prisma ORM.
* Implementar control de versiones mediante Git y GitHub.
* Enfocar DevTrack como plataforma de crecimiento profesional para desarrolladores.

### Problemas Encontrados

* Ninguno.

### Soluciones Aplicadas

* No aplica.

### Resultado

Se estableció la base documental y organizativa del proyecto.

### Próximo Paso

Finalizar el documento D-002 y comenzar el diseño arquitectónico del sistema.

---

## BD-002

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

### Actividad Realizada

* Finalización del análisis funcional del sistema.
* Elaboración de los requisitos funcionales y no funcionales.
* Definición de la arquitectura inicial de DevTrack.
* Diseño del modelo lógico de la base de datos.
* Identificación de entidades principales.
* Definición de relaciones entre entidades.

### Decisiones Tomadas

* Utilizar una arquitectura cliente-servidor de tres capas.
* Implementar API REST para la comunicación entre frontend y backend.
* Utilizar PostgreSQL como sistema gestor de base de datos.
* Utilizar Prisma ORM para el acceso a datos.
* Definir las entidades Usuario, Proyecto, Tarea, Tecnología, Habilidad,
  MetaAprendizaje y ProyectoTecnologia.

### Problemas Encontrados

* Necesidad de definir claramente las relaciones entre tecnologías,
  proyectos y habilidades para evitar redundancia de información.

### Soluciones Aplicadas

* Implementación de tablas intermedias para relaciones muchos a muchos.
* Separación entre las entidades Tecnología y Habilidad para mejorar la
  normalización de la base de datos.

### Resultado

Se definieron las entidades principales, relaciones y estructura general
de la base de datos, así como la arquitectura inicial del sistema.

### Próximo Paso

Diseñar el Product Backlog y priorizar las funcionalidades de la versión 1.0.

---

## BD-003

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

### Actividad Realizada

* Elaboración del documento D-005 Product Backlog.
* Organización de funcionalidades por módulos del sistema.
* Priorización de historias de usuario.
* Definición de funcionalidades críticas para la versión 1.0.
* Identificación de funcionalidades futuras para versiones posteriores.

### Decisiones Tomadas

* Utilizar un sistema de prioridades basado en niveles P0, P1, P2 y P3.
* Considerar como funcionalidades críticas de la V1 la autenticación,
  gestión de proyectos y gestión de tareas.
* Incluir habilidades y metas de aprendizaje dentro de la versión inicial
  del sistema.
* Posponer funcionalidades como logros, rachas, certificaciones,
  integración con GitHub e inteligencia artificial para futuras versiones.

### Problemas Encontrados

* Necesidad de delimitar claramente el alcance de la versión inicial para
  evitar sobrecarga de funcionalidades.

### Soluciones Aplicadas

* Clasificación de funcionalidades mediante prioridades.
* Separación entre funcionalidades obligatorias y funcionalidades futuras.

### Resultado

Se estableció el Product Backlog inicial de DevTrack, definiendo el
alcance funcional de la versión 1.0 y las funcionalidades previstas para
futuras iteraciones.

### Próximo Paso

Diseñar el mapa de navegación del sistema y elaborar los primeros
wireframes de las interfaces principales.

---

## BD-004

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

### Actividad Realizada

* Elaboración del documento D-007 Mapa de Navegación y Wireframes.
* Definición del flujo de navegación principal del sistema.
* Identificación de pantallas públicas y privadas.
* Diseño de wireframes de baja fidelidad para Login, Dashboard,
  Proyectos y Detalle de Proyecto.
* Definición inicial de la experiencia de usuario de DevTrack.

### Decisiones Tomadas

* Utilizar el Dashboard como punto central de navegación.
* Mantener una estructura simple y escalable para la versión 1.0.
* Diseñar primero wireframes de baja fidelidad antes de realizar diseños
  visuales detallados.
* Separar las funcionalidades en módulos independientes para facilitar
  el desarrollo y mantenimiento.

### Problemas Encontrados

* Necesidad de definir con precisión las pantallas necesarias para evitar
  funcionalidades duplicadas.

### Soluciones Aplicadas

* Construcción del mapa de navegación completo antes del diseño visual.
* Definición clara de responsabilidades para cada pantalla.

### Resultado

Se estableció la estructura de navegación inicial del sistema y se
diseñaron los primeros wireframes de la versión 1.0.

### Próximo Paso

Completar los wireframes restantes y preparar la transición hacia la
Fase 1 - Diseño del Sistema.

---

## BD-005

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

### Actividad Realizada

* Revisión general de todos los documentos del proyecto.
* Validación de requisitos, arquitectura, base de datos, backlog y navegación.
* Verificación del alcance de la versión 1.0.
* Confirmación de la preparación para iniciar la Fase 1.

### Decisiones Tomadas

* Dar por finalizada la Fase 0.
* Mantener pendientes menores dentro de futuras iteraciones documentales.
* Iniciar la Fase 1 enfocada en diseño del sistema y sistema visual.

### Problemas Encontrados

* Ninguno bloqueante.

### Soluciones Aplicadas

* Identificación y registro de pendientes para ser tratados en fases posteriores.

### Resultado

La Fase 0 quedó formalmente cerrada y DevTrack cuenta con una base
documental suficiente para iniciar el diseño visual del sistema.

### Próximo Paso

Iniciar la Fase 1 - Diseño del Sistema.

---

## BD-006

**Fecha:** Junio 2026

**Fase:** Fase 1 - Diseño del Sistema

**Sprint:** F1-S1 - Identidad Visual

### Actividad Realizada

* Creación del documento D-008 Sistema de Diseño.
* Definición de la filosofía del diseño de DevTrack.
* Definición del concepto del producto.
* Definición de la misión y visión del producto.
* Definición de la personalidad de la marca.
* Identificación de los valores del producto.
* Definición del público objetivo.
* Establecimiento de los principios de diseño.
* Definición de la experiencia esperada del usuario.
* Registro de las decisiones de diseño.
* Definición de los criterios de calidad del sistema de diseño.

### Decisiones Tomadas

* DevTrack tendrá como propósito principal visualizar la evolución
  profesional del desarrollador.
* La interfaz priorizará simplicidad, claridad y enfoque en el progreso
  del usuario.
* El sistema de diseño será construido antes del desarrollo del frontend.
* Se estableció el eslogan oficial: "Tu evolución como desarrollador,
  en un solo lugar."

### Problemas Encontrados

* Fue necesario redefinir el alcance del sistema de diseño para separar
  la identidad conceptual de la identidad visual.

### Soluciones Aplicadas

* División del diseño en sprints, comenzando por la identidad conceptual
  antes de abordar elementos visuales.

### Resultado

Se completó la base conceptual del Sistema de Diseño de DevTrack,
estableciendo los principios que guiarán el diseño de la interfaz durante
el desarrollo del proyecto.

### Próximo Paso

Iniciar el Sprint F1-S2 para definir la identidad visual, incluyendo el
logotipo, la paleta de colores, la tipografía y los lineamientos gráficos.

---

## BD-007

**Fecha:** Junio 2026

**Fase:** Fase 1 - Diseño del Sistema

**Sprint:** F1-S2 - Identidad Visual

### Actividad Realizada

Se completó el documento D-008 Sistema de Diseño, definiendo la identidad
visual oficial de DevTrack.

Durante este sprint se establecieron:

* Sistema oficial de logotipos.
* Filosofía y psicología del color.
* Paleta de colores.
* Sistema tipográfico.
* Sistema de iconografía.
* Sistema de componentes.
* Reglas generales de diseño.

### Decisiones Tomadas

* Se aprobó el logotipo oficial de DevTrack y sus tres variantes
  (Logotipo Principal, Isotipo y App Icon).
* Se adoptó un sistema de colores basado en Design Tokens.
* Se definió la tipografía oficial del proyecto.
* Se estableció Lucide Icons como biblioteca oficial de iconografía.
* Se documentó el inventario inicial de componentes reutilizables.

### Resultado

El Sistema de Diseño quedó preparado para servir como guía durante el
desarrollo del frontend.

### Próximo Paso

Iniciar el Sprint F1-S3 para definir la arquitectura del sistema de
componentes y comenzar la preparación del desarrollo de la interfaz.

---

## BD-008

**Fecha:** Junio 2026

**Fase:** Fase 2 - Arquitectura Técnica

**Sprint:** F2-S1 - Arquitectura Técnica

### Actividades Realizadas

* Definición de la organización oficial del repositorio.
* Documentación de la arquitectura del frontend.
* Documentación de la arquitectura del backend.
* Definición de la arquitectura de la base de datos.
* Establecimiento de las convenciones de desarrollo.
* Documentación del flujo general de la aplicación.
* Definición de la Definition of Done (DoD).
* Actualización de los documentos D-003 y D-004 para mantener la
  coherencia arquitectónica.

### Decisiones Tomadas

* Se aprobó la arquitectura técnica oficial de DevTrack.
* Se definió la estructura base del frontend y del backend.
* Se establecieron las convenciones oficiales de desarrollo y control
  de versiones.
* Se adoptó Prisma ORM como herramienta de acceso a datos dentro de la
  arquitectura del proyecto.

### Problemas Encontrados

* Fue necesario definir claramente los límites entre la arquitectura
  conceptual (D-003), el diseño de la base de datos (D-004) y la
  arquitectura técnica (D-009) para evitar duplicidad de información.

### Soluciones Aplicadas

* Se delimitó el alcance de cada documento.
* Se incorporaron referencias cruzadas entre los documentos para
  mantener la coherencia documental.

### Resultado

La Fase 2 - Sprint F2-S1 quedó finalizada con la arquitectura técnica
del proyecto completamente documentada y preparada para iniciar la
implementación.

### Próximo Sprint

F2-S2 - Configuración del Entorno de Desarrollo.

### Estado

✅ Sprint completado.

---

## BD-009

**Fecha:** Julio 2026

**Fase:** Fase 2 - Arquitectura Técnica

**Sprint:** F2-S4 y F2-S5 - Autenticación e Infraestructura Frontend

### Actividades Realizadas

* Implementación del módulo completo de autenticación del frontend.
* Desarrollo de las páginas Login y Register.
* Creación de los componentes LoginForm y RegisterForm.
* Implementación del contexto global de autenticación mediante React
  Context API.
* Desarrollo del hook personalizado useAuth.
* Implementación del componente ProtectedRoute para proteger las rutas
  privadas.
* Persistencia de la sesión utilizando LocalStorage.
* Implementación del proceso de cierre de sesión (Logout).
* Corrección de la estructura de rutas utilizando React Router DOM.
* Eliminación de la duplicación del MainLayout en las rutas privadas.
* Reorganización completa de la arquitectura de componentes.
* Separación de los componentes en los módulos auth, dashboard, shared
  y ui.
* Implementación de Barrel Exports para los módulos principales.
* Configuración del alias @ para simplificar los imports del proyecto.
* Migración de los imports hacia la nueva arquitectura.
* Configuración centralizada de variables de entorno mediante el módulo
  config.
* Creación de la infraestructura inicial para la comunicación con la API.
* Instalación y configuración de Axios.
* Implementación de httpClient como cliente HTTP centralizado.
* Creación de los servicios authApi, projectApi y taskApi.
* Validación funcional completa de la aplicación tras la refactorización.

### Decisiones Tomadas

* Centralizar toda la configuración del proyecto dentro del módulo config.
* Utilizar el alias @ como estándar oficial para los imports entre módulos.
* Organizar los componentes siguiendo una arquitectura basada en dominios
  funcionales.
* Implementar Barrel Exports para reducir la complejidad de los imports.
* Preparar la infraestructura de comunicación con el backend antes de
  iniciar el desarrollo funcional de la Fase 3.
* Mantener una única instancia de Axios mediante httpClient para todas
  las solicitudes HTTP futuras.

### Problemas Encontrados

* Se detectó una duplicación del MainLayout debido a una configuración
  incorrecta de las rutas privadas.
* Se presentaron conflictos al renombrar la carpeta Dashboard a dashboard
  debido al manejo de mayúsculas y minúsculas en Windows.
* La reorganización de carpetas provocó múltiples errores temporales de
  resolución de imports.
* Se identificó una advertencia relacionada con la configuración de
  baseUrl en TypeScript 6.

### Soluciones Aplicadas

* Reestructuración completa del AppRouter eliminando la duplicación del
  MainLayout.
* Renombrado progresivo de la carpeta dashboard para evitar conflictos
  con Git y Windows.
* Migración completa de los imports utilizando el alias @.
* Revisión y validación de toda la arquitectura antes de continuar con
  el desarrollo.
* Adaptación de la configuración del proyecto para mantener compatibilidad
  con las versiones actuales de TypeScript y Vite.

### Resultado

Se completó la infraestructura base del frontend de DevTrack.

El proyecto quedó preparado para iniciar el desarrollo de funcionalidades
de negocio durante la Fase 3, contando con una arquitectura modular,
escalable y preparada para la futura integración con el backend.

### Próximo Sprint

F3-S1 - Gestión de Proyectos.

### Estado

✅ Sprint completado.

---

## BD-010

**Fecha:** 13 de Julio de 2026

**Fase:** Fase 3 - Desarrollo Funcional

**Sprint:** F3-S2 - Project Workspace

### Actividades Realizadas

* Implementación de la navegación hacia Project Workspace.
* Creación de la estructura inicial del Workspace.
* Implementación de WorkspaceHeader.
* Implementación de WorkspaceTabs.
* Creación del componente Overview.
* Reorganización de la arquitectura del Workspace.
* Mejoras al Design System.
* Definición del documento D-012 - Diseño del Workspace.

### Resultado

Se estableció la estructura inicial del Project Workspace y la navegación
entre sus pestañas.

### Estado

🟡 Sprint en desarrollo.

### Próximo Paso

Continuar el desarrollo del Overview y completar las funcionalidades
principales del Workspace.

---

## BD-011

**Fecha:** Agosto 2026

**Fase:** Fase 3 - Desarrollo Funcional

**Sprint:** F3-S1 - Gestión de Proyectos

### Actividades Realizadas

* Implementación del módulo de gestión de proyectos.
* Implementación del listado de proyectos.
* Implementación de creación de proyectos.
* Implementación de edición de proyectos.
* Implementación de eliminación de proyectos.
* Implementación de confirmación antes de eliminar un proyecto.
* Implementación de navegación desde un proyecto hacia su Workspace.
* Integración del módulo con los servicios y hooks correspondientes.

### Decisiones Tomadas

* Mantener Projects como punto de entrada hacia el Workspace.
* Utilizar componentes reutilizables para representar los proyectos.
* Implementar confirmación explícita antes de operaciones destructivas.
* Mantener la gestión de proyectos separada de la lógica específica del
  Workspace.

### Problemas Encontrados

* El flujo inicial de eliminación estaba pendiente de implementación.
* Fue necesario coordinar la comunicación entre ProjectCard, ProjectList
  y ProjectsPage.

### Soluciones Aplicadas

* Se implementó el flujo completo de eliminación.
* Se agregó un componente ConfirmDialog reutilizable.
* Se conectó la acción de eliminación con el hook de proyectos.
* Se estableció la navegación hacia el Workspace desde cada proyecto.

### Resultado

El Sprint F3-S1 quedó completado con el flujo principal de gestión de
proyectos funcional.

### Estado

✅ Sprint completado.

### Próximo Sprint

F3-S2 - Project Workspace.

---

## BD-012

**Fecha:** Agosto 2026

**Fase:** Fase 3 - Desarrollo Funcional

**Sprint:** F3-S2 - Project Workspace

### Actividades Realizadas

* Implementación de la estructura inicial del Project Workspace.
* Creación de la navegación desde Projects hacia el Workspace.
* Implementación del componente Overview.
* Visualización del último checkpoint del proyecto.
* Visualización del siguiente paso.
* Visualización del progreso del proyecto.
* Implementación de una guía contextual inicial.
* Integración inicial del módulo Tasks dentro del Workspace.
* Creación de componentes reutilizables para la representación de
  proyectos y Workspace.

### Decisiones Tomadas

* Utilizar el Workspace como espacio central de contexto de cada proyecto.
* Mostrar primero información de continuidad: último checkpoint y
  siguiente paso.
* Mantener Tasks como un módulo interno del Workspace.
* Construir el Workspace de manera incremental para permitir la
  incorporación posterior de Goals, Skills, Documentation, Resources
  y Statistics.

### Problemas Encontrados

* Fue necesario adaptar componentes existentes para soportar la nueva
  estructura del Workspace.
* Se requirió ajustar componentes de interfaz para mantener consistencia
  con el sistema de diseño.

### Soluciones Aplicadas

* Creación de componentes específicos para Projects y Workspace.
* Reutilización del UI Kit existente.
* Integración progresiva de los módulos funcionales.

### Resultado

Se implementó la primera versión funcional del Project Workspace,
estableciendo la estructura sobre la cual se desarrollarán los siguientes
módulos de DevTrack.

### Estado

✅ Sprint completado en su alcance inicial.

### Próximo Sprint

F3-S3 - Gestión de Tareas.

---

## BD-013

**Fecha:** Agosto 2026

**Fase:** Fase 3 - Desarrollo Funcional

**Sprint:** F3-S3 - Gestión de Tareas

### Actividades Realizadas

* Implementación de creación de tareas.
* Implementación del listado de tareas.
* Implementación de edición de tareas.
* Implementación de eliminación de tareas.
* Implementación del cambio de estado de las tareas.
* Integración de las tareas dentro del Project Workspace.
* Implementación de prioridades para las tareas.
* Implementación de indicadores visuales para estados y prioridades.
* Implementación de persistencia del estado de las tareas durante la sesión.

### Decisiones Tomadas

* Utilizar tres estados principales para las tareas:
  `pending`, `in_progress` y `completed`.
* Utilizar tres niveles de prioridad:
  `low`, `medium` y `high`.
* Mantener las tareas asociadas directamente a un proyecto.
* Utilizar componentes reutilizables para representar estados y prioridades.

### Problemas Encontrados

* La primera versión del cambio de estado solo permitía alternar entre
  pendiente y completado.
* La representación visual inicial de estado y prioridad era demasiado
  genérica.
* Fue necesario mejorar el formulario de creación y edición para
  permitir seleccionar prioridades.

### Soluciones Aplicadas

* Se implementó un flujo de estados progresivo:
  `pending → in_progress → completed → pending`.
* Se agregaron componentes StatusBadge y PriorityBadge.
* Se incorporó selección de prioridad en los formularios.
* Se mejoró la representación visual de los estados y prioridades.
* Se permitió editar la prioridad de una tarea existente.

### Resultado

El Sprint F3-S3 quedó completado en su alcance actual, proporcionando
un sistema funcional de gestión de tareas dentro del Workspace.

### Estado

✅ Sprint completado.

### Próximo Sprint

Realizar una revisión funcional y técnica del Workspace antes de definir
el siguiente bloque de desarrollo.