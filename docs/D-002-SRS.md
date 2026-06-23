# D-002 Especificación de Requisitos de Software

## Información General

Nombre del sistema: DevTrack

Tipo de sistema: Aplicación web para gestión de proyectos y seguimiento del crecimiento profesional de desarrolladores.

Versión del documento: 1.0

Estado: En elaboración

Responsable: Sebastián Campo

Fecha de creación: Junio 2026

## Alcance del Sistema

DevTrack permitirá a los usuarios gestionar proyectos de desarrollo de software, administrar tareas, registrar habilidades técnicas y visualizar métricas relacionadas con su crecimiento profesional.

El sistema estará orientado inicialmente a estudiantes, desarrolladores junior y profesionales independientes que deseen centralizar el seguimiento de su experiencia técnica y productividad.

La versión inicial estará enfocada en un único usuario por cuenta y no incluirá funciones colaborativas ni integración con servicios externos.

## Actores del Sistema

Usuario

Actor principal del sistema.

Responsabilidades:

Crear y administrar proyectos.
Gestionar tareas.
Registrar habilidades.
Consultar estadísticas.
Actualizar información de perfil.
Sistema DevTrack

Responsable de:

Almacenar información.
Calcular métricas.
Gestionar autenticación.
Generar estadísticas.
Mantener la integridad de los datos.

## Historias de Usuario

Módulo de Autenticación

HU-001 Registro de Usuario

Como visitante

Quiero registrarme en la plataforma

Para acceder a las funcionalidades de DevTrack.

HU-002 Inicio de Sesión

Como usuario registrado

Quiero iniciar sesión

Para acceder a mi información personal y mis proyectos.

HU-003 Cierre de Sesión

Como usuario

Quiero cerrar sesión

Para proteger mi información cuando termine de usar la plataforma.

Módulo de Perfil

HU-004 Actualizar Perfil

Como usuario

Quiero modificar mi información personal

Para mantener mi perfil actualizado.

HU-005 Registrar Tecnologías Favoritas

Como usuario

Quiero registrar mis tecnologías favoritas

Para personalizar mi perfil profesional.

Módulo de Proyectos

HU-006 Crear Proyecto

Como usuario

Quiero crear un proyecto

Para organizar mi trabajo de desarrollo.

HU-007 Editar Proyecto

Como usuario

Quiero modificar un proyecto existente

Para actualizar su información.

HU-008 Eliminar Proyecto

Como usuario

Quiero eliminar un proyecto

Para mantener organizada mi información.

HU-009 Consultar Proyecto

Como usuario

Quiero visualizar los detalles de un proyecto

Para revisar su estado y progreso.

Módulo de Tareas

HU-010 Crear Tarea

Como usuario

Quiero crear tareas dentro de un proyecto

Para dividir el trabajo en actividades específicas.

HU-011 Editar Tarea

Como usuario

Quiero modificar una tarea

Para actualizar información o prioridades.

HU-012 Eliminar Tarea

Como usuario

Quiero eliminar una tarea

Para mantener organizado el proyecto.

HU-013 Cambiar Estado de Tarea

Como usuario

Quiero actualizar el estado de una tarea

Para reflejar el progreso real del trabajo.

Módulo de Habilidades

HU-014 Registrar Tecnología

Como usuario

Quiero registrar una tecnología aprendida

Para llevar control de mis conocimientos.

HU-015 Actualizar Nivel de Habilidad

Como usuario

Quiero actualizar mi nivel de dominio

Para reflejar mi progreso de aprendizaje.

HU-016 Asociar Tecnologías a Proyectos

Como usuario

Quiero relacionar tecnologías con proyectos

Para construir un historial técnico.

Módulo de Dashboard

HU-017 Visualizar Estadísticas

Como usuario

Quiero consultar estadísticas generales

Para conocer mi progreso.

HU-018 Visualizar Proyectos Activos

Como usuario

Quiero ver mis proyectos activos

Para identificar mis prioridades actuales.

HU-019 Visualizar Tareas Pendientes

Como usuario

Quiero consultar mis tareas pendientes

Para planificar mi trabajo.

Módulo de Crecimiento Profesional

HU-020 Visualizar Historial Profesional

Como usuario

Quiero visualizar mi historial de proyectos y habilidades

Para medir mi evolución profesional.

HU-021 Generar Perfil Profesional

Como usuario

Quiero generar automáticamente un perfil profesional

Para utilizarlo como referencia para mi portafolio.

Módulo de Metas de Aprendizaje

HU-022 Crear Meta de Aprendizaje

Como usuario

Quiero crear una meta de aprendizaje

Para planificar el estudio de una nueva tecnología o habilidad.

HU-023 Actualizar Progreso de Meta

Como usuario

Quiero actualizar el progreso de una meta

Para reflejar mi avance real.

HU-024 Completar Meta

Como usuario

Quiero marcar una meta como completada

Para registrar mis logros de aprendizaje.

HU-025 Visualizar Metas Activas

Como usuario

Quiero visualizar mis metas activas

Para mantener el enfoque en mis objetivos actuales.

## Requisitos Funcionales

Módulo de Autenticación
RF-001 Registro de Usuarios

El sistema debe permitir el registro de nuevos usuarios mediante correo electrónico y contraseña.

RF-002 Inicio de Sesión

El sistema debe permitir la autenticación de usuarios registrados.

RF-003 Cierre de Sesión

El sistema debe permitir finalizar la sesión activa del usuario.

Módulo de Perfil
RF-004 Gestión de Perfil

El sistema debe permitir visualizar y actualizar la información del perfil del usuario.

RF-005 Gestión de Tecnologías Favoritas

El sistema debe permitir registrar, editar y eliminar tecnologías favoritas asociadas al perfil.

Módulo de Proyectos
RF-006 Creación de Proyectos

El sistema debe permitir crear proyectos con nombre, descripción, estado y fechas relevantes.

RF-007 Edición de Proyectos

El sistema debe permitir modificar la información de proyectos existentes.

RF-008 Eliminación de Proyectos

El sistema debe permitir eliminar proyectos registrados por el usuario.

RF-009 Consulta de Proyectos

El sistema debe permitir visualizar la información detallada de un proyecto.

Módulo de Tareas
RF-010 Creación de Tareas

El sistema debe permitir crear tareas asociadas a un proyecto.

RF-011 Edición de Tareas

El sistema debe permitir actualizar la información de una tarea.

RF-012 Eliminación de Tareas

El sistema debe permitir eliminar tareas existentes.

RF-013 Gestión de Estados de Tareas

El sistema debe permitir cambiar el estado de una tarea entre pendiente, en progreso y completada.

Módulo de Habilidades
RF-014 Registro de Habilidades

El sistema debe permitir registrar tecnologías o habilidades técnicas.

RF-015 Actualización de Habilidades

El sistema debe permitir modificar el nivel de dominio y progreso asociado a una habilidad.

RF-016 Asociación de Tecnologías

El sistema debe permitir asociar tecnologías a proyectos específicos.

Módulo de Metas de Aprendizaje
RF-017 Creación de Metas

El sistema debe permitir crear metas de aprendizaje con fecha objetivo y porcentaje de progreso.

RF-018 Actualización de Metas

El sistema debe permitir actualizar el progreso de una meta.

RF-019 Finalización de Metas

El sistema debe permitir marcar metas como completadas.

RF-020 Consulta de Metas

El sistema debe permitir visualizar metas activas, completadas y pendientes.

Módulo Dashboard
RF-021 Visualización de Estadísticas

El sistema debe mostrar métricas relacionadas con proyectos, tareas, habilidades y metas.

RF-022 Visualización de Actividad

El sistema debe mostrar un resumen del progreso general del usuario.

Módulo de Crecimiento Profesional
RF-023 Historial Profesional

El sistema debe generar un historial de proyectos, tecnologías y metas alcanzadas.

RF-024 Perfil Profesional

El sistema debe generar una vista consolidada del perfil profesional del usuario.

## Requisitos No Funcionales

RNF-001 Usabilidad

La interfaz debe ser intuitiva y fácil de utilizar para usuarios con conocimientos básicos de informática.

RNF-002 Diseño Responsive

La aplicación debe adaptarse correctamente a dispositivos móviles, tabletas y equipos de escritorio.

RNF-003 Rendimiento

Las operaciones principales del sistema deben responder en un tiempo inferior a 2 segundos bajo condiciones normales de uso.

RNF-004 Seguridad

Las contraseñas de los usuarios deben almacenarse utilizando mecanismos de cifrado seguros.

RNF-005 Disponibilidad

La aplicación debe estar disponible de forma continua salvo durante actividades de mantenimiento programadas.

RNF-006 Escalabilidad

La arquitectura debe permitir agregar nuevos módulos y funcionalidades sin afectar significativamente los componentes existentes.

RNF-007 Mantenibilidad

El código debe seguir estándares de desarrollo que faciliten futuras modificaciones y correcciones.

RNF-008 Integridad de Datos

El sistema debe garantizar la consistencia de la información almacenada en la base de datos.

RNF-009 Compatibilidad

La aplicación debe funcionar correctamente en los principales navegadores modernos.

RNF-010 Control de Versiones

Todo cambio realizado durante el desarrollo deberá registrarse mediante Git y GitHub.

## Reglas de Negocio

RN-001

Cada proyecto debe pertenecer a un único usuario.

RN-002

Una tarea debe estar asociada obligatoriamente a un proyecto.

RN-003

Un usuario puede tener múltiples proyectos.

RN-004

Un proyecto puede contener múltiples tareas.

RN-005

Una tecnología puede estar asociada a múltiples proyectos.

RN-006

Una meta de aprendizaje debe estar asociada a una tecnología o habilidad específica.

RN-007

El progreso de una meta debe mantenerse entre 0% y 100%.

RN-008

Una tarea completada no podrá volver al estado pendiente sin una acción explícita del usuario.

RN-009

El perfil profesional deberá generarse únicamente con información registrada dentro del sistema.

RN-010

Los usuarios únicamente podrán modificar información perteneciente a su propia cuenta.

## Restricciones Técnicas

RT-001

El frontend deberá desarrollarse utilizando React y Vite.

RT-002

El backend deberá desarrollarse utilizando Node.js y Express.

RT-003

La base de datos principal deberá implementarse en PostgreSQL.

RT-004

El acceso a la base de datos deberá realizarse mediante Prisma ORM.

RT-005

El sistema utilizará Git y GitHub para el control de versiones.

RT-006

La autenticación deberá implementarse mediante JWT.

RT-007

La aplicación deberá desplegarse utilizando servicios en la nube compatibles con el stack seleccionado. 

## Casos de Uso



## Criterios de Aceptación

## Estado del Documento