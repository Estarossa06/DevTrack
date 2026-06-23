# D-004 Diseño de Base de Datos

Información General
Nombre del Sistema

DevTrack

Objetivo

Definir la estructura de almacenamiento de datos, entidades, relaciones y restricciones necesarias para el funcionamiento del sistema.

Tecnologías de Persistencia
Motor de Base de Datos

PostgreSQL

ORM

Prisma ORM

Tipo de Base de Datos

Relacional

Modelo Conceptual
Entidades Principales
Usuario
Proyecto
Tarea
Tecnologia
Habilidad
MetaAprendizaje
ProyectoTecnologia
Justificación

Estas entidades representan los componentes fundamentales del sistema y permiten gestionar proyectos, tareas, habilidades y metas de aprendizaje manteniendo la integridad y consistencia de los datos.

Diccionario de Datos
Usuario

(Tabla completa)

Proyecto

(Tabla completa)

Tarea

(Tabla completa)

Tecnologia

(Tabla completa)

Habilidad

(Tabla completa)

MetaAprendizaje

(Tabla completa)

ProyectoTecnologia

(Tabla completa)

Relaciones del Sistema

Usuario (1) ---- (N) Proyecto

Proyecto (1) ---- (N) Tarea

Usuario (1) ---- (N) Habilidad

Tecnologia (1) ---- (N) Habilidad

Usuario (1) ---- (N) MetaAprendizaje

Tecnologia (1) ---- (N) MetaAprendizaje

Proyecto (1) ---- (N) ProyectoTecnologia

Tecnologia (1) ---- (N) ProyectoTecnologia

Reglas de Integridad
RI-001

Todo proyecto debe pertenecer a un usuario existente.

RI-002

Toda tarea debe pertenecer a un proyecto existente.

RI-003

Toda habilidad debe estar asociada a un usuario y una tecnología existentes.

RI-004

Toda meta de aprendizaje debe estar asociada a un usuario válido.

RI-005

No se permitirán registros duplicados en ProyectoTecnologia.

Índices Recomendados
Usuario
email (único)
Proyecto
usuarioId
Tarea
proyectoId
estado
Habilidad
usuarioId
tecnologiaId
MetaAprendizaje
usuarioId
estado
Consideraciones de Escalabilidad

La estructura permitirá incorporar futuras funcionalidades como:

Logros.
Rachas de aprendizaje.
Integración con GitHub.
Certificaciones.
Equipos de trabajo.
Colaboración entre usuarios.
Estado del Documento

Versión: 1.0

Estado: En elaboración

Responsable: Sebastián Campo






