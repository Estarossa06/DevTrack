# D-003 Arquitectura del Sistema

Información General
Nombre del Sistema

DevTrack

# Tipo de Arquitectura

Arquitectura cliente-servidor de tres capas.

# Objetivo

Definir la estructura técnica del sistema, los componentes principales, sus responsabilidades y la forma en que interactúan entre sí.

Arquitectura General

DevTrack implementará una arquitectura de tres capas compuesta por:

# Capa de Presentación

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

# Responsable del almacenamiento persistente.

Tecnologías:

PostgreSQL
Prisma ORM

Responsabilidades:

Almacenar información.
Gestionar relaciones.
Garantizar integridad de datos.
Ejecutar consultas.

## Relación con la Arquitectura Técnica

La arquitectura conceptual descrita en este documento se complementa con el documento **D-009 – Arquitectura Técnica del Proyecto**, donde se define la organización del repositorio, la arquitectura del frontend y backend, la estructura de la base de datos y las convenciones de desarrollo que guiarán la implementación del sistema.

## Flujo entre Capas

La comunicación entre las capas del sistema seguirá un flujo unidireccional.

La capa de presentación enviará solicitudes a la capa de negocio mediante la API del sistema.

La capa de negocio procesará las solicitudes, aplicará las reglas correspondientes y accederá a la capa de datos cuando sea necesario.

Finalmente, la información procesada será devuelta a la capa de presentación para su visualización al usuario.

Esta separación garantiza un bajo acoplamiento entre componentes y facilita el mantenimiento y evolución del sistema.
