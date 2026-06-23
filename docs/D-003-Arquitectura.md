# D-003 Arquitectura del Sistema

Información General
Nombre del Sistema

DevTrack

Tipo de Arquitectura

Arquitectura cliente-servidor de tres capas.

Objetivo

Definir la estructura técnica del sistema, los componentes principales, sus responsabilidades y la forma en que interactúan entre sí.

Arquitectura General

DevTrack implementará una arquitectura de tres capas compuesta por:

Capa de Presentación

Responsable de la interacción con el usuario.

Tecnologías:

React
Vite
Tailwind CSS
React Router

Responsabilidades:

Mostrar información.
Capturar acciones del usuario.
Consumir servicios del backend.
Gestionar navegación.
Capa de Negocio

Responsable de la lógica del sistema.

Tecnologías:

Node.js
Express.js

Responsabilidades:

Procesar solicitudes.
Validar información.
Aplicar reglas de negocio.
Gestionar autenticación.
Coordinar acceso a datos.
Capa de Datos

Responsable del almacenamiento persistente.

Tecnologías:

PostgreSQL
Prisma ORM

Responsabilidades:

Almacenar información.
Gestionar relaciones.
Garantizar integridad de datos.
Ejecutar consultas.