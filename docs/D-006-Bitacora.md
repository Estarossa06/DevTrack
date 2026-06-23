### D-006 Bitácora de Desarrollo

Objetivo

Registrar cronológicamente todas las actividades realizadas durante el desarrollo de DevTrack, incluyendo decisiones tomadas, problemas encontrados, soluciones implementadas y próximos pasos.

Registro de Actividades

### BD-001

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

**Actividad Realizada:**

* Creación de la estructura inicial del proyecto DevTrack.
* Organización de carpetas principales.
* Inicialización del repositorio Git local.
* Creación del archivo README.md.
* Creación del archivo .gitignore.
* Definición de la visión general del proyecto.
* Elaboración del documento D-001 Acta de Definición del Proyecto.
* Inicio del documento D-002 Especificación de Requisitos de Software.

**Decisiones Tomadas:**

* Utilizar React + Vite para el frontend.
* Utilizar Node.js + Express para el backend.
* Utilizar PostgreSQL como base de datos principal.
* Utilizar Prisma ORM.
* Implementar control de versiones mediante Git y GitHub.
* Enfocar DevTrack como plataforma de crecimiento profesional para desarrolladores.

**Problemas Encontrados:**

* Ninguno.

**Soluciones Aplicadas:**

* No aplica.

**Resultado:**

Se estableció la base documental y organizativa del proyecto.

**Próximo Paso:**

Finalizar el documento D-002 y comenzar el diseño arquitectónico del sistema.

### BD-002

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

**Actividad Realizada:**

* Finalización del análisis funcional del sistema.
* Elaboración de los requisitos funcionales y no funcionales.
* Definición de la arquitectura inicial de DevTrack.
* Diseño del modelo lógico de la base de datos.
* Identificación de entidades principales.
* Definición de relaciones entre entidades.

**Decisiones Tomadas:**

* Utilizar una arquitectura cliente-servidor de tres capas.
* Implementar API REST para la comunicación entre frontend y backend.
* Utilizar PostgreSQL como sistema gestor de base de datos.
* Utilizar Prisma ORM para el acceso a datos.
* Definir las entidades Usuario, Proyecto, Tarea, Tecnología, Habilidad, MetaAprendizaje y ProyectoTecnologia.

**Problemas Encontrados:**

* Necesidad de definir claramente las relaciones entre tecnologías, proyectos y habilidades para evitar redundancia de información.

**Soluciones Aplicadas:**

* Implementación de tablas intermedias para relaciones muchos a muchos.
* Separación entre las entidades Tecnología y Habilidad para mejorar la normalización de la base de datos.

**Resultado:**

Se definieron las entidades principales, relaciones y estructura general de la base de datos, así como la arquitectura inicial del sistema.

**Próximo Paso:**

Diseñar el Product Backlog y priorizar las funcionalidades de la versión 1.0.


### BD-003

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

**Actividad Realizada:**

* Elaboración del documento D-005 Product Backlog.
* Organización de funcionalidades por módulos del sistema.
* Priorización de historias de usuario.
* Definición de funcionalidades críticas para la versión 1.0.
* Identificación de funcionalidades futuras para versiones posteriores.

**Decisiones Tomadas:**

* Utilizar un sistema de prioridades basado en niveles P0, P1, P2 y P3.
* Considerar como funcionalidades críticas de la V1 la autenticación, gestión de proyectos y gestión de tareas.
* Incluir habilidades y metas de aprendizaje dentro de la versión inicial del sistema.
* Posponer funcionalidades como logros, rachas, certificaciones, integración con GitHub e inteligencia artificial para futuras versiones.

**Problemas Encontrados:**

* Necesidad de delimitar claramente el alcance de la versión inicial para evitar sobrecarga de funcionalidades.

**Soluciones Aplicadas:**

* Clasificación de funcionalidades mediante prioridades.
* Separación entre funcionalidades obligatorias y funcionalidades futuras.

**Resultado:**

Se estableció el Product Backlog inicial de DevTrack, definiendo el alcance funcional de la versión 1.0 y las funcionalidades previstas para futuras iteraciones.

**Próximo Paso:**

Diseñar el mapa de navegación del sistema y elaborar los primeros wireframes de las interfaces principales.

### BD-004

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

**Actividad Realizada:**

* Elaboración del documento D-007 Mapa de Navegación y Wireframes.
* Definición del flujo de navegación principal del sistema.
* Identificación de pantallas públicas y privadas.
* Diseño de wireframes de baja fidelidad para Login, Dashboard, Proyectos y Detalle de Proyecto.
* Definición inicial de la experiencia de usuario de DevTrack.

**Decisiones Tomadas:**

* Utilizar el Dashboard como punto central de navegación.
* Mantener una estructura simple y escalable para la versión 1.0.
* Diseñar primero wireframes de baja fidelidad antes de realizar diseños visuales detallados.
* Separar las funcionalidades en módulos independientes para facilitar el desarrollo y mantenimiento.

**Problemas Encontrados:**

* Necesidad de definir con precisión las pantallas necesarias para evitar funcionalidades duplicadas.

**Soluciones Aplicadas:**

* Construcción del mapa de navegación completo antes del diseño visual.
* Definición clara de responsabilidades para cada pantalla.

**Resultado:**

Se estableció la estructura de navegación inicial del sistema y se diseñaron los primeros wireframes de la versión 1.0.

**Próximo Paso:**

Completar los wireframes restantes y preparar la transición hacia la Fase 1 - Diseño del Sistema.

### BD-005

**Fecha:** Junio 2026

**Fase:** Fase 0 - Planeación y Análisis

**Actividad Realizada:**

* Revisión general de todos los documentos del proyecto.
* Validación de requisitos, arquitectura, base de datos, backlog y navegación.
* Verificación del alcance de la versión 1.0.
* Confirmación de la preparación para iniciar la Fase 1.

**Decisiones Tomadas:**

* Dar por finalizada la Fase 0.
* Mantener pendientes menores dentro de futuras iteraciones documentales.
* Iniciar la Fase 1 enfocada en diseño del sistema y sistema visual.

**Problemas Encontrados:**

* Ninguno bloqueante.

**Soluciones Aplicadas:**

* Identificación y registro de pendientes para ser tratados en fases posteriores.

**Resultado:**

La Fase 0 quedó formalmente cerrada y DevTrack cuenta con una base documental suficiente para iniciar el diseño visual del sistema.

**Próximo Paso:**

Iniciar la Fase 1 - Diseño del Sistema.

