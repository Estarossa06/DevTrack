# D-009 Arquitectura Técnica del Proyecto

## Control del Documento

### Información General

| Campo | Valor |
|--------|-------|
| Proyecto | DevTrack |
| Documento | D-009 |
| Versión | 1.0 |
| Estado | En elaboración |
| Responsable | Sebastián Campo |
| Fecha de Creación | Junio 2026 |
| Última Actualización | Junio 2026 |

### Historial de Versiones

| Versión | Fecha | Autor | Descripción |
|----------|--------|--------|-------------|
| 1.0 | Junio 2026 | Sebastián Campo | Creación del documento de Arquitectura Técnica. |

---

# Objetivo

Definir la arquitectura técnica del proyecto DevTrack, estableciendo la organización del repositorio, la estructura del código fuente, las convenciones de desarrollo y los principios que guiarán la implementación del sistema.

---

# Alcance

Este documento aplica a toda la estructura técnica del proyecto, incluyendo el frontend, backend, base de datos y los estándares de organización del código.

---

# Organización del Repositorio

## Descripción General

La organización del repositorio de DevTrack tiene como objetivo separar claramente las diferentes áreas del proyecto, facilitando el mantenimiento, la escalabilidad y el trabajo colaborativo.

Cada directorio posee una responsabilidad específica y su estructura deberá mantenerse consistente durante todo el ciclo de desarrollo.

## Estructura General

text
DevTrack/
│
├── docs/
│   ├── D-001 Acta del Proyecto
│   ├── D-002 Especificación de Requisitos
│   ├── D-003 Arquitectura del Sistema
│   ├── D-004 Base de Datos
│   ├── D-005 Product Backlog
│   ├── D-006 Bitácora
│   ├── D-007 Mapa de Navegación y Wireframes
│   ├── D-008 Sistema de Diseño
│   └── D-009 Arquitectura Técnica
│
├── frontend/
│
├── backend/
│
├── database/
│
├── branding/
│
└── resources/

---

## Descripción de Carpetas

docs/

Contiene toda la documentación oficial del proyecto, incluyendo actas, requisitos, arquitectura, diseño, base de datos, bitácoras y demás documentos utilizados durante el desarrollo.

frontend/

Contiene el código fuente de la aplicación cliente, desarrollado con React y las tecnologías asociadas al frontend.

backend/

Contiene la API, la lógica de negocio, los servicios y la configuración del servidor encargados del procesamiento de la información.

database/

Contiene los recursos relacionados con la base de datos, como el esquema, migraciones, semillas (seed) y futuros respaldos de desarrollo.

branding/

Almacena la identidad visual del proyecto: logotipos, iconografía, paleta de colores, recursos gráficos y material de marca.

resources/

Contiene archivos de apoyo utilizados durante el desarrollo, como referencias, recursos temporales y documentación auxiliar.

## Principios de Organización

La estructura del repositorio de DevTrack deberá mantenerse organizada y consistente durante todo el ciclo de vida del proyecto.

Para garantizar la mantenibilidad y escalabilidad del sistema se establecen los siguientes principios:

Cada directorio tendrá una única responsabilidad claramente definida.
La documentación oficial del proyecto se almacenará exclusivamente en la carpeta docs.
El código del frontend y backend permanecerá completamente separado.
Los recursos relacionados con la base de datos se concentrarán en el directorio database.
La identidad visual del proyecto se almacenará en branding.
Los recursos de apoyo y material auxiliar se ubicarán en resources.
Cualquier nueva carpeta deberá responder a una necesidad técnica claramente justificada y documentarse previamente en este documento.

# Arquitectura del Frontend

## Descripción General
La arquitectura del frontend de DevTrack está diseñada para favorecer la modularidad, la reutilización de componentes y la separación de responsabilidades.

Todo el código fuente de la aplicación cliente se organizará dentro del directorio src, permitiendo una estructura clara, escalable y fácil de mantener conforme el proyecto evolucione.

La organización de las carpetas responde a una distribución por responsabilidades, donde cada módulo tiene un propósito específico y evita la duplicación de código.

Esta arquitectura permitirá desarrollar nuevas funcionalidades de forma ordenada, reutilizar componentes entre diferentes pantallas y simplificar las tareas de mantenimiento y evolución del sistema.

## Estructura de src

Toda la implementación del frontend de DevTrack se concentrará dentro del directorio src, siguiendo una organización basada en responsabilidades.

La siguiente estructura representa la distribución principal del código fuente de la aplicación:

src/
│
├── assets/
├── components/
├── config/
├── constants/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── styles/
├── types/
└── utils/

Cada uno de estos directorios cumple una función específica dentro de la arquitectura del frontend y será documentado en las siguientes secciones de este documento.

## Núcleo de la Aplicación

El núcleo de la aplicación agrupa los directorios que proporcionan configuraciones, definiciones y utilidades compartidas por todo el frontend.

Su objetivo es centralizar recursos comunes, reducir la duplicación de código y facilitar el mantenimiento del proyecto.

config/

Contiene la configuración general del frontend.

Ejemplos:

Variables de configuración.
Configuración de librerías.
Configuración de servicios.
Parámetros globales.
constants/

Almacena constantes reutilizables en toda la aplicación.

Ejemplos:

Rutas.
Roles de usuario.
Estados del sistema.
Valores predeterminados.
Claves de almacenamiento local.
types/

Contiene las definiciones de tipos e interfaces utilizadas por TypeScript.

Ejemplos:

Interfaces de Usuario.
Interfaces de Proyecto.
Tipos de respuestas de la API.
Modelos compartidos.
utils/

Agrupa funciones auxiliares reutilizables que no dependen de una funcionalidad específica.

Ejemplos:

Formateo de fechas.
Validaciones.
Conversión de datos.
Funciones matemáticas.
Helpers generales.

## Interfaz de Usuario

La interfaz de usuario reúne los directorios responsables de la presentación visual de DevTrack.

Su organización busca separar la estructura de las pantallas, los componentes reutilizables y los estilos de la aplicación, permitiendo desarrollar una interfaz consistente y alineada con el Sistema de Diseño definido en el documento D-008.

components/

Contiene todos los componentes reutilizables de la aplicación.

Ejemplos:

Botones.
Tarjetas.
Formularios.
Modales.
Tablas.
Barras de progreso.
Componentes de navegación.

Los componentes deberán seguir el Sistema de Componentes definido en el D-008.

layouts/

Contiene las estructuras generales que organizan las diferentes pantallas de la aplicación.

Ejemplos:

Layout principal.
Layout de autenticación.
Layout del dashboard.

Los layouts permiten reutilizar la estructura común entre varias páginas sin duplicar código.

pages/

Contiene las páginas principales de la aplicación.

Cada página representa una vista completa accesible mediante el sistema de navegación.

Ejemplos:

Dashboard.
Proyectos.
Habilidades.
Metas.
Perfil.
Configuración.

Las páginas estarán construidas utilizando componentes reutilizables y layouts previamente definidos.

styles/

Contiene los estilos globales de la aplicación.

Ejemplos:

Estilos generales.
Variables CSS.
Configuración de Tailwind.
Temas globales.
Tipografía base.

Los estilos deberán respetar el Sistema de Diseño definido para DevTrack y evitar estilos duplicados dentro de los componentes.

## Lógica de Negocio
La lógica de negocio agrupa los directorios responsables de gestionar el comportamiento de la aplicación, la comunicación con los servicios externos y la administración del estado global.

Esta separación permite mantener la interfaz desacoplada de la lógica de procesamiento, facilitando el mantenimiento, las pruebas y la escalabilidad del proyecto.

hooks/

Contiene los Hooks personalizados utilizados para encapsular lógica reutilizable.

Ejemplos:

Autenticación.
Consumo de datos.
Manejo de formularios.
Persistencia local.
Utilidades de navegación.

Los Hooks deberán evitar duplicar lógica entre componentes y páginas.

services/

Contiene los servicios encargados de la comunicación con el backend y otros recursos externos.

Ejemplos:

Servicio de autenticación.
Servicio de proyectos.
Servicio de usuarios.
Servicio de habilidades.
Servicio de metas.

Los servicios serán el único punto autorizado para realizar peticiones HTTP hacia la API.

context/

Contiene los Contextos de React utilizados para compartir información entre múltiples componentes sin necesidad de prop drilling.

Ejemplos:

Usuario autenticado.
Tema de la aplicación.
Configuración general.

Los Contextos deberán utilizarse únicamente cuando el estado deba compartirse entre diferentes áreas de la aplicación.

store/

Contiene el estado global de la aplicación cuando su complejidad requiera una solución centralizada.

Ejemplos:

Estado del usuario.
Estado de autenticación.
Preferencias del sistema.
Datos compartidos entre módulos.

La implementación del store deberá mantenerse desacoplada de la interfaz para facilitar futuras modificaciones.

## Recursos y Navegación    
Este grupo reúne los recursos estáticos y la configuración del sistema de navegación de la aplicación.

Su objetivo es centralizar los elementos visuales y definir la estructura de acceso entre las diferentes páginas del sistema.

assets/

Contiene los recursos estáticos utilizados por el frontend.

Ejemplos:

Imágenes.
Iconos.
Logotipos.
Ilustraciones.
Archivos multimedia.

Siempre que sea posible, los recursos gráficos deberán provenir de la identidad visual definida en el directorio branding.

routes/

Contiene la configuración del sistema de navegación de la aplicación.

Ejemplos:

Definición de rutas.
Protección de rutas privadas.
Redirecciones.
Organización del enrutamiento.

Todas las rutas deberán estar organizadas de forma centralizada para facilitar su mantenimiento y garantizar una navegación consistente en toda la aplicación.

# Arquitectura del Backend

## Descripción General

La arquitectura del backend de DevTrack estará orientada a una organización por capas, separando claramente las responsabilidades de cada módulo del sistema.

Esta estructura busca garantizar un código mantenible, escalable y reutilizable, evitando el acoplamiento entre la lógica de negocio, el acceso a los datos y la exposición de la API.

Cada petición realizada desde el frontend seguirá un flujo definido hasta llegar a la base de datos y regresar con una respuesta estructurada.

---

## Estructura de `src`

Todo el código fuente del backend se organizará dentro del directorio `src`, siguiendo una distribución basada en responsabilidades.

```text
src/
│
├── config/
├── controllers/
├── middlewares/
├── repositories/
├── routes/
├── schemas/
├── services/
└── utils/
```

Cada uno de estos directorios cumple una función específica dentro de la arquitectura del servidor.

---

## Configuración

### config/

**Propósito**

Centralizar toda la configuración del backend para evitar configuraciones duplicadas dentro del proyecto.

**Contenido**

* Variables de entorno.
* Configuración del servidor.
* Configuración de la base de datos.
* Configuración de autenticación.
* Configuración de librerías externas.

**Dependencias**

Será utilizado por prácticamente todos los módulos del backend.

---

## Procesamiento de Solicitudes

### controllers/

**Propósito**

Recibir las solicitudes HTTP provenientes del frontend y coordinar el flujo de ejecución del sistema.

**Contenido**

* Controladores de autenticación.
* Controladores de usuarios.
* Controladores de proyectos.
* Controladores de habilidades.
* Controladores de metas.

**Dependencias**

Dependen de los servicios para ejecutar la lógica de negocio.

---

### services/

**Propósito**

Implementar la lógica de negocio de la aplicación.

**Contenido**

* Validaciones.
* Reglas del negocio.
* Procesamiento de información.
* Coordinación entre módulos.

**Dependencias**

Utilizan los repositorios para acceder a la información almacenada.

---

### repositories/

**Propósito**

Gestionar el acceso a la base de datos.

**Contenido**

* Consultas.
* Inserciones.
* Actualizaciones.
* Eliminaciones.
* Operaciones sobre Prisma.

**Dependencias**

Interactúan directamente con la base de datos y son utilizados exclusivamente por los servicios.

---

## Infraestructura

### middlewares/

**Propósito**

Procesar las solicitudes antes o después de llegar a los controladores.

**Contenido**

* Autenticación.
* Autorización.
* Manejo de errores.
* Registro de solicitudes.
* Validaciones generales.

**Dependencias**

Son utilizados por las rutas para controlar el flujo de las peticiones.

---

### routes/

**Propósito**

Definir todos los puntos de acceso disponibles para la API.

**Contenido**

* Rutas públicas.
* Rutas privadas.
* Organización por módulos.
* Asociación entre rutas y controladores.

**Dependencias**

Redirigen las solicitudes hacia los controladores correspondientes.

---

### schemas/

**Propósito**

Definir las estructuras de validación utilizadas por la API.

**Contenido**

* Validación de solicitudes.
* Validación de respuestas.
* Esquemas de autenticación.
* Validación de formularios.

**Dependencias**

Serán utilizados por los controladores y middlewares para garantizar la integridad de los datos.

---

## Utilidades

### utils/

**Propósito**

Agrupar funciones auxiliares reutilizables dentro del backend.

**Contenido**

* Conversión de datos.
* Formateo.
* Utilidades matemáticas.
* Funciones generales.
* Helpers.

**Dependencias**

Podrán ser utilizados por cualquier módulo del backend cuando sea necesario.

---

## Resumen de Dependencias

El flujo principal del backend seguirá la siguiente secuencia:

```text
Routes
   │
   ▼
Middlewares
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
Database
```

Esta arquitectura garantiza una separación clara de responsabilidades, facilita las pruebas unitarias y permite escalar el sistema sin afectar el resto de los módulos.

# Arquitectura de la Base de Datos

## Descripción General

La base de datos constituye la capa encargada del almacenamiento persistente de la información de DevTrack.

Su diseño seguirá un modelo relacional, priorizando la integridad de los datos, la consistencia de las relaciones y la facilidad de mantenimiento conforme el sistema evolucione.

Toda interacción con la base de datos se realizará exclusivamente a través de la capa de repositorios del backend, evitando accesos directos desde otros módulos de la aplicación.

---

## Estructura General

Los recursos relacionados con la base de datos se organizarán dentro del directorio `database`, permitiendo separar claramente la definición del modelo de datos de la lógica de negocio.

```text
database/
│
├── prisma/
├── migrations/
└── seed/
```

Cada uno de estos directorios cumple una función específica dentro del ciclo de vida de la base de datos.

---

## Componentes

### prisma/

**Propósito**

Contener el esquema principal de la base de datos y la configuración del ORM Prisma.

**Contenido**

* Esquema de la base de datos.
* Relaciones entre entidades.
* Configuración del cliente Prisma.

**Dependencias**

Será utilizado por la capa de repositorios del backend.

---

### migrations/

**Propósito**

Registrar la evolución del esquema de la base de datos mediante migraciones versionadas.

**Contenido**

* Creación de tablas.
* Modificación de columnas.
* Cambios en relaciones.
* Evolución del modelo de datos.

**Dependencias**

Las migraciones serán administradas por Prisma durante el desarrollo del proyecto.

---

### seed/

**Propósito**

Contener los datos iniciales utilizados para el desarrollo y las pruebas del sistema.

**Contenido**

* Usuarios de prueba.
* Roles iniciales.
* Configuración base.
* Datos de demostración.

**Dependencias**

Será utilizado durante la configuración inicial del entorno de desarrollo.

---

## Principios de la Arquitectura de Datos

Para garantizar la calidad y mantenibilidad de la base de datos se establecen los siguientes principios:

* Toda modificación del esquema deberá realizarse mediante migraciones.
* No se permitirá el acceso directo a la base de datos desde el frontend.
* Los repositorios serán el único punto autorizado para interactuar con la base de datos.
* El modelo de datos oficial será el definido en el documento D-004.
* Las migraciones deberán mantenerse versionadas para garantizar la trazabilidad de los cambios.

---

## Relación con la Arquitectura General

Dentro de la arquitectura de DevTrack, la base de datos representa la capa final del flujo de procesamiento.

```text
Frontend
    │
    ▼
Backend
    │
    ▼
Repositories
    │
    ▼
Prisma ORM
    │
    ▼
PostgreSQL
```

Esta organización garantiza una separación clara entre la lógica de negocio y el almacenamiento de la información, favoreciendo la escalabilidad y el mantenimiento del sistema.

# Convenciones del Proyecto

## Filosofía General

Con el objetivo de mantener un proyecto consistente, mantenible y escalable, DevTrack establece un conjunto de convenciones técnicas que deberán respetarse durante todo el desarrollo.

Estas convenciones buscan facilitar la comprensión del código, reducir errores y permitir que cualquier desarrollador pueda integrarse al proyecto siguiendo un mismo estándar.

Toda nueva funcionalidad, módulo o componente deberá cumplir las reglas definidas en este documento.

---

## Convenciones de Nomenclatura

### Carpetas

* Utilizar nombres en inglés.
* Utilizar letras minúsculas.
* No utilizar espacios.
* Utilizar nombres descriptivos.

Ejemplos:

```text
components/
services/
layouts/
hooks/
```

---

### Archivos

Los nombres deberán describir claramente su propósito.

Ejemplos:

```text
UserCard.tsx
LoginForm.tsx
ProjectService.ts
AuthController.ts
```

---

### Componentes React

Los componentes deberán utilizar PascalCase.

Ejemplos:

```text
DashboardCard.tsx
ProgressChart.tsx
UserProfile.tsx
```

---

### Hooks

Los Hooks personalizados deberán comenzar siempre con el prefijo `use`.

Ejemplos:

```text
useAuth.ts
useProjects.ts
useTheme.ts
```

---

### Variables

Las variables utilizarán la convención camelCase.

Ejemplos:

```text
userName
projectList
completedGoals
```

---

### Constantes

Las constantes globales podrán escribirse en MAYÚSCULAS con guiones bajos.

Ejemplos:

```text
API_URL
DEFAULT_THEME
MAX_PROJECTS
```

## Convenciones de Código

Con el fin de mantener un código limpio, legible y fácil de mantener, se establecen las siguientes reglas de desarrollo.

### Idioma

* El código fuente se desarrollará completamente en inglés.
* La documentación oficial del proyecto se redactará en español.
* Los comentarios dentro del código deberán utilizarse únicamente cuando sean realmente necesarios.

---

### Organización del Código

* Cada archivo deberá tener una única responsabilidad.
* Se evitarán archivos excesivamente largos.
* La lógica de negocio no deberá implementarse dentro de los componentes visuales.
* Se priorizará la reutilización de código antes que la duplicación.

---

### Imports

Los imports deberán organizarse en el siguiente orden:

1. Librerías externas.
2. Configuración.
3. Componentes.
4. Hooks.
5. Servicios.
6. Utilidades.
7. Tipos.
8. Estilos.

Esto facilitará la lectura y consistencia del código.

---

### TypeScript

* Evitar el uso de `any`.
* Definir interfaces para los modelos principales.
* Utilizar tipos cuando sea apropiado.
* Aprovechar el tipado estático para prevenir errores durante el desarrollo.

---

## Convenciones de Git

Git será el sistema oficial de control de versiones de DevTrack.

Todo cambio significativo deberá quedar registrado mediante commits claros y trazables.

### Commits

Cada commit deberá representar una unidad lógica de trabajo.

Ejemplos:

```text
docs: actualiza arquitectura del frontend

feat: agrega módulo de autenticación

fix: corrige validación del formulario de registro

refactor: reorganiza estructura de componentes

style: mejora estilos del dashboard
```

---

### Ramas

Se utilizará una rama principal denominada:

```text
main
```

Cuando el proyecto crezca podrán incorporarse ramas específicas para nuevas funcionalidades o correcciones.

Ejemplos:

```text
feature/authentication

feature/dashboard

fix/login-validation

docs/update-architecture
```

---

### Flujo de Trabajo

Antes de finalizar una actividad de desarrollo deberán realizarse los siguientes pasos:

1. Verificar el funcionamiento de los cambios realizados.
2. Actualizar la documentación correspondiente.
3. Registrar el avance en la bitácora del proyecto.
4. Realizar el commit utilizando la convención establecida.
5. Sincronizar los cambios con el repositorio remoto.

Este flujo garantiza la trazabilidad completa de cada avance del proyecto.

---

## Convenciones de Documentación

La documentación forma parte del producto y deberá mantenerse sincronizada con el desarrollo.

Se establecen las siguientes reglas:

* Todo cambio de arquitectura deberá reflejarse en el documento correspondiente.
* Cada sprint deberá generar al menos un registro en la bitácora.
* Los documentos deberán conservar una estructura homogénea.
* Ningún desarrollo importante deberá finalizar sin su respectiva actualización documental.

---

## Buenas Prácticas

Durante todo el desarrollo de DevTrack deberán seguirse las siguientes recomendaciones:

* Priorizar la simplicidad antes que la complejidad.
* Favorecer la reutilización de componentes.
* Mantener una separación clara entre presentación, lógica y datos.
* Evitar dependencias innecesarias.
* Documentar las decisiones importantes del proyecto.
* Revisar periódicamente la arquitectura para asegurar su escalabilidad.
* Mantener consistencia con el Sistema de Diseño (D-008) y con la Arquitectura Técnica (D-009).

Estas prácticas buscan garantizar un desarrollo ordenado, sostenible y alineado con los objetivos del proyecto.

# Flujo General de la Aplicación

## Objetivo

El flujo general de la aplicación describe el recorrido que sigue una solicitud desde que el usuario interactúa con la interfaz hasta que la información es procesada y almacenada en la base de datos.

Este flujo establece la relación entre el frontend, el backend y la capa de persistencia, garantizando una separación clara de responsabilidades.

---

## Flujo General

El procesamiento de una solicitud seguirá la siguiente secuencia:

```text
Usuario
   │
   ▼
Interfaz (Pages)
   │
   ▼
Componentes
   │
   ▼
Hooks
   │
   ▼
Services (Frontend)
   │
   ▼
API REST
   │
   ▼
Routes
   │
   ▼
Middlewares
   │
   ▼
Controllers
   │
   ▼
Services (Backend)
   │
   ▼
Repositories
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

Una vez procesada la información, la respuesta seguirá el recorrido inverso hasta ser presentada al usuario.

---

## Principios del Flujo

Durante el procesamiento de cualquier solicitud deberán respetarse los siguientes principios:

* Cada capa tendrá una única responsabilidad.
* Ninguna capa podrá omitir otra dentro del flujo establecido.
* El frontend nunca accederá directamente a la base de datos.
* Toda interacción con la base de datos deberá realizarse mediante los repositorios.
* La lógica de negocio permanecerá centralizada en la capa de servicios del backend.
* Los componentes visuales no contendrán lógica de negocio.
* La información presentada al usuario deberá provenir exclusivamente de respuestas procesadas por la API.

---

## Beneficios de la Arquitectura

Esta organización proporciona las siguientes ventajas:

* Separación clara de responsabilidades.
* Mayor facilidad de mantenimiento.
* Escalabilidad del sistema.
* Reutilización de componentes.
* Reducción del acoplamiento entre módulos.
* Facilidad para realizar pruebas y futuras ampliaciones del proyecto.

# Definition of Done (DoD)

## Objetivo

La Definition of Done establece los criterios mínimos que deberá cumplir cualquier actividad, funcionalidad o sprint antes de considerarse finalizado.

Su propósito es garantizar la calidad, la trazabilidad y la consistencia del desarrollo de DevTrack.

---

## Criterios Generales

Una actividad se considerará terminada únicamente cuando cumpla todos los siguientes criterios:

* La funcionalidad cumple el objetivo definido.
* La implementación respeta la arquitectura del proyecto.
* El código sigue las convenciones establecidas en el D-009.
* Se verificó el funcionamiento de la implementación.
* No se identifican errores críticos relacionados con la actividad desarrollada.

---

## Documentación

Antes de cerrar una actividad deberán actualizarse los documentos afectados.

Dependiendo del alcance del trabajo podrán requerirse actualizaciones en:

* D-002 Especificación de Requisitos.
* D-003 Arquitectura del Sistema.
* D-004 Base de Datos.
* D-007 Mapa de Navegación y Wireframes.
* D-008 Sistema de Diseño.
* D-009 Arquitectura Técnica.

---

## Bitácora

Toda actividad completada deberá registrarse en la bitácora oficial del proyecto, indicando:

* Actividad realizada.
* Resultado obtenido.
* Próximo paso.

---

## Control de Versiones

Antes de cerrar una actividad deberán realizarse las siguientes acciones:

1. Revisar los cambios realizados.
2. Crear un commit siguiendo la convención definida.
3. Sincronizar el repositorio con GitHub.
4. Confirmar que el repositorio refleja el estado actual del proyecto.

---

## Revisión Final

Antes de iniciar una nueva actividad deberá verificarse que:

* La documentación se encuentra actualizada.
* La bitácora refleja el avance realizado.
* El repositorio está sincronizado.
* Los entregables del sprint cumplen los objetivos definidos.

Solo después de esta revisión podrá darse por finalizada una actividad o iniciarse la siguiente.

---

# Estado del Documento

**Versión:** 1.0

**Estado:** En elaboración

**Responsable:** Sebastián Campo
