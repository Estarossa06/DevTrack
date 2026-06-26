# D-008 Sistema de Diseño (Design System)

## Control del Documento

### Información General

| Campo                | Valor           |
| -------------------- | --------------- |
| Proyecto             | DevTrack        |
| Documento            | D-008           |
| Versión              | 1.0             |
| Estado               | En elaboración  |
| Responsable          | Sebastián Campo |
| Fecha de Creación    | Junio 2026      |
| Última Actualización | Junio 2026      |

### Historial de Versiones

| Versión | Fecha      | Autor           | Descripción                             |
| ------- | ---------- | --------------- | --------------------------------------- |
| 1.0     | Junio 2026 | Sebastián Campo | Creación del Sistema de Diseño inicial. |

---

# Objetivo

Definir la identidad visual, los principios de diseño y los componentes gráficos que servirán como guía para el desarrollo de la interfaz de DevTrack.

---

# Filosofía del Diseño

DevTrack no es únicamente una aplicación para gestionar proyectos.

Su propósito es convertirse en el espacio donde un desarrollador pueda visualizar su crecimiento profesional mediante proyectos, tecnologías, habilidades y metas de aprendizaje.

Cada decisión de diseño debe reforzar esa idea.

La interfaz debe transmitir profesionalismo, claridad, organización y evolución constante.

---

# Concepto del Producto

## DevTrack

**"Tu evolución como desarrollador, en un solo lugar."**

Mientras otras plataformas permiten gestionar tareas o almacenar código, DevTrack busca documentar el proceso completo de crecimiento de un desarrollador.

No reemplaza herramientas como GitHub, Notion o Trello; las complementa mostrando aquello que normalmente no queda registrado: el aprendizaje, la experiencia adquirida y la evolución profesional.

---

# Misión del Producto

Brindar a desarrolladores y estudiantes una plataforma que les permita documentar, organizar y visualizar su crecimiento profesional mediante el seguimiento de proyectos, tecnologías, habilidades y metas de aprendizaje.

DevTrack busca convertir el proceso de aprendizaje en una experiencia medible, organizada y motivadora, facilitando la construcción de un portafolio de evolución personal.

---

# Visión del Producto

Convertirse en la plataforma de referencia para desarrolladores que desean registrar, analizar y demostrar su evolución profesional a través de proyectos, conocimientos y experiencia adquirida durante su proceso de aprendizaje.

---

# Personalidad de la Marca

DevTrack debe percibirse como:

* Profesional.
* Tecnológica.
* Minimalista.
* Clara.
* Motivadora.

La aplicación debe inspirar al usuario a continuar aprendiendo y desarrollando nuevos proyectos.

---

# Valores del Producto

* Progreso.
* Aprendizaje.
* Organización.
* Profesionalismo.
* Evolución continua.

Cada nueva funcionalidad incorporada deberá contribuir al menos a uno de estos valores.

---

# Público Objetivo

* Estudiantes de Ingeniería y Tecnología.
* Desarrolladores Junior.
* Desarrolladores Freelance.
* Personas en proceso de aprendizaje de tecnologías.

---

# Principios de Diseño

| Principio              | Descripción                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| Simplicidad            | La interfaz debe mostrar únicamente la información necesaria para cada contexto.          |
| Intuitividad           | Un usuario nuevo debe comprender la navegación sin necesidad de instrucciones.            |
| Jerarquía Visual       | Las funciones más importantes deben ser las más visibles.                                 |
| Consistencia           | Los componentes y patrones de interacción deben mantenerse iguales en toda la aplicación. |
| Enfoque en el Progreso | El crecimiento del usuario debe ser visible en cualquier momento.                         |

---

# Identidad Visual

## Sistema de Logotipos

DevTrack cuenta con un sistema de identidad compuesto por tres variantes oficiales diseñadas para adaptarse a diferentes contextos de uso sin perder consistencia visual.

### Logotipo Principal

Incluye el isotipo, el nombre de la marca y el eslogan.

**Uso recomendado**

* Landing Page.
* Pantalla de inicio.
* Documentación.
* Presentaciones.
* Material institucional.

---

### Isotipo

Representación simplificada del logotipo.

**Uso recomendado**

* Sidebar.
* Barra de navegación.
* Avatar.
* Favicon.
* Botones.

---

### App Icon

Versión diseñada para aplicaciones y dispositivos.

**Uso recomendado**

* Aplicación móvil.
* Aplicación de escritorio.
* Accesos directos.
* PWA.
* Iconos del sistema operativo.

---

# Paleta de Colores

| Token       | HEX | Uso                 |
| ----------- | --- | ------------------- |
| Primary-50  | ... | Fondos claros       |
| Primary-100 | ... | Fondos secundarios  |
| Primary-200 | ... | Tarjetas            |
| Primary-300 | ... | Bordes              |
| Primary-400 | ... | Botones secundarios |
| Primary-500 | ... | Marca               |
| Primary-600 | ... | Hover               |
| Primary-700 | ... | Activo              |
| Primary-800 | ... | Destacados          |
| Primary-900 | ... | Oscuro              |

# Paleta Principal (Rojo DevTrack)

| Token           | HEX           | Uso                         |
| --------------- | ------------- | --------------------------- |
| Primary-50      | `#FEF2F2`     | Fondos muy claros           |
| Primary-100     | `#FEE2E2`     | Paneles suaves              |
| Primary-200     | `#FECACA`     | Estados ligeros             |
| Primary-300     | `#FCA5A5`     | Bordes destacados           |
| Primary-400     | `#F87171`     | Botones secundarios         |
| **Primary-500** | **`#DC2626`** | Color principal de DevTrack |
| Primary-600     | `#B91C1C`     | Hover                       |
| Primary-700     | `#991B1B`     | Activo                      |
| Primary-800     | `#7F1D1D`     | Contraste                   |
| Primary-900     | `#450A0A`     | Máximo contraste            |

# Paleta Neutra

| Token       | HEX       | Uso                    |
| ----------- | --------- | ---------------------- |
| Neutral-50  | `#FAFAFA` | Fondo principal        |
| Neutral-100 | `#F5F5F5` | Tarjetas               |
| Neutral-200 | `#E5E5E5` | Bordes                 |
| Neutral-300 | `#D4D4D4` | Separadores            |
| Neutral-400 | `#A3A3A3` | Texto secundario       |
| Neutral-500 | `#737373` | Texto estándar         |
| Neutral-600 | `#525252` | Iconos                 |
| Neutral-700 | `#404040` | Paneles oscuros        |
| Neutral-800 | `#262626` | Sidebar                |
| Neutral-900 | `#171717` | Fondo oscuro principal |

# Colores Semánticos

| Token       | HEX       | Uso            |
| ----------- | --------- | -------------- |
| Success-500 | `#16A34A` | Confirmaciones |
| Warning-500 | `#F59E0B` | Advertencias   |
| Error-500   | `#DC2626` | Errores        |
| Info-500    | `#2563EB` | Información    |

## Filosofía del Color

La identidad visual de DevTrack se fundamenta en una paleta de colores diseñada para transmitir profesionalismo, claridad y evolución.

El color principal de la marca es el rojo, utilizado para destacar acciones importantes, indicadores de progreso y elementos interactivos. Su propósito es representar la energía, la determinación y el crecimiento continuo del desarrollador.

El negro constituye la base visual del sistema, aportando una apariencia moderna, tecnológica y elegante, mientras que los tonos neutros permiten mantener una interfaz limpia, equilibrada y de fácil lectura.

Los colores semánticos se emplearán exclusivamente para comunicar estados del sistema, garantizando consistencia y una rápida interpretación por parte del usuario.

---

## Psicología del Color

| Color    | Significado                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴 Rojo  | Representa energía, determinación, crecimiento y acción. Es el color principal de DevTrack porque simboliza el avance continuo del desarrollador. |
| ⚫ Negro  | Representa profesionalismo, tecnología, elegancia y concentración. Sirve como base visual del sistema.                                            |
| ⚪ Blanco | Aporta claridad, equilibrio y facilita la lectura de la información.                                                                              |
| ⚪ Grises | Permiten establecer jerarquías visuales sin competir con el color principal.                                                                      |

---

## Colores Primarios

| Token           | Uso Principal                         |
| --------------- | ------------------------------------- |
| Primary-50      | Fondos muy claros y resaltados suaves |
| Primary-100     | Fondos secundarios                    |
| Primary-200     | Elementos informativos                |
| Primary-300     | Bordes activos                        |
| Primary-400     | Botones secundarios                   |
| **Primary-500** | Color principal de la marca           |
| Primary-600     | Hover de botones principales          |
| Primary-700     | Elementos activos                     |
| Primary-800     | Componentes destacados                |
| Primary-900     | Contrastes intensos                   |


---

## Colores Neutros

| Token       | Uso Principal          |
| ----------- | ---------------------- |
| Neutral-50  | Fondo principal claro  |
| Neutral-100 | Tarjetas y paneles     |
| Neutral-200 | Divisiones             |
| Neutral-300 | Bordes                 |
| Neutral-400 | Texto secundario       |
| Neutral-500 | Texto estándar         |
| Neutral-600 | Elementos secundarios  |
| Neutral-700 | Fondos oscuros         |
| Neutral-800 | Sidebar                |
| Neutral-900 | Fondo principal oscuro |

---

## Colores Semánticos

| Token       | Significado             |
| ----------- | ----------------------- |
| Success-500 | Operaciones exitosas    |
| Warning-500 | Advertencias            |
| Error-500   | Errores                 |
| Info-500    | Información del sistema |

---

## Tokens del Sistema

Primary-50
Primary-100
Primary-200
Primary-300
Primary-400
Primary-500
Primary-600
Primary-700
Primary-800
Primary-900

Neutral-50
Neutral-100
Neutral-200
Neutral-300
Neutral-400
Neutral-500
Neutral-600
Neutral-700
Neutral-800
Neutral-900

Success-500
Warning-500
Error-500
Info-500

---

## Ejemplos de Uso

| Elemento         | Token       |
| ---------------- | ----------- |
| Botón principal  | Primary-500 |
| Botón secundario | Neutral-300 |
| Sidebar          | Neutral-900 |
| Navbar           | Neutral-900 |
| Fondo principal  | Neutral-50  |
| Tarjetas         | Neutral-100 |
| Texto principal  | Neutral-900 |
| Texto secundario | Neutral-500 |
| Confirmaciones   | Success-500 |
| Advertencias     | Warning-500 |
| Errores          | Error-500   |

---

# Tipografía

## Fuente Principal

**Inter**

La tipografía oficial de DevTrack será Inter, una fuente diseñada para interfaces digitales que destaca por su excelente legibilidad, simplicidad y aspecto profesional.

Será utilizada en toda la aplicación, incluyendo títulos, navegación, formularios, tablas, botones y contenido general.

---

## Jerarquía Tipográfica

| Elemento | Tamaño | Peso | Uso |
|-----------|---------|------|-----|
| H1 | 36 px | Bold (700) | Títulos principales |
| H2 | 30 px | Bold (700) | Secciones |
| H3 | 24 px | Semibold (600) | Subsecciones |
| H4 | 20 px | Semibold (600) | Tarjetas |
| H5 | 18 px | Medium (500) | Componentes |
| H6 | 16 px | Medium (500) | Encabezados menores |
| Body | 16 px | Regular (400) | Texto principal |
| Small | 14 px | Regular (400) | Información secundaria |
| Caption | 12 px | Regular (400) | Notas y ayudas |

---

## Pesos Tipográficos

| Peso | Uso |
|------|-----|
| Regular (400) | Texto general |
| Medium (500) | Navegación y botones |
| Semibold (600) | Subtítulos |
| Bold (700) | Títulos principales |

---

## Reglas de Uso

- Mantener una jerarquía clara entre títulos y contenido.
- Evitar utilizar más de dos pesos tipográficos en un mismo componente.
- Priorizar la legibilidad sobre el estilo decorativo.
- Utilizar el tamaño mínimo de 14 px para contenido interactivo.
- Reservar el peso Bold para títulos y acciones importantes.

---

# Iconografía

## Objetivo

La iconografía de DevTrack tiene como propósito complementar la información visual, facilitar la navegación y mejorar la comprensión de las acciones disponibles dentro de la aplicación.

Los iconos no sustituyen el texto, sino que sirven como apoyo visual para acelerar la identificación de funciones.

---

## Biblioteca de Iconos

La aplicación utilizará **Lucide Icons** como biblioteca oficial de iconografía.

La selección se basa en los siguientes criterios:

* Diseño minimalista.
* Consistencia visual.
* Compatibilidad con React.
* Integración con Tailwind CSS.
* Amplio catálogo de iconos.
* Código abierto.

---

## Estilo de los Iconos

Todos los iconos deberán mantener un estilo uniforme.

Características:

* Trazo (outline).
* Sin relleno.
* Bordes redondeados.
* Diseño minimalista.
* Apariencia moderna.

---

## Tamaños Estándar

| Tamaño | Uso                                    |
| ------ | -------------------------------------- |
| 16 px  | Texto y tablas                         |
| 20 px  | Formularios                            |
| 24 px  | Navegación principal                   |
| 32 px  | Tarjetas destacadas                    |
| 48 px  | Estados vacíos e ilustraciones simples |

---

## Colores

Los iconos utilizarán los colores definidos en la paleta oficial del sistema.

Por defecto:

* Neutral-700 para iconografía estándar.
* Primary-500 para acciones principales.
* Success-500 para confirmaciones.
* Warning-500 para advertencias.
* Error-500 para errores.

---

## Reglas de Uso

* Todos los iconos deben mantener el mismo estilo visual.
* No combinar bibliotecas diferentes.
* No utilizar iconos decorativos sin función.
* Todo icono interactivo deberá contar con una etiqueta o texto cuando sea necesario para facilitar la comprensión.

---

# Sistema de Componentes

## Objetivo

Definir el conjunto de componentes reutilizables que conformarán la interfaz de DevTrack.

Todos los componentes deberán seguir la identidad visual, la tipografía, la paleta de colores y los principios de diseño definidos en este documento.

El objetivo es garantizar consistencia visual, reutilización del código y facilidad de mantenimiento durante el desarrollo.

---

## Componentes Base

| Categoría         | Componentes                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Navegación        | Sidebar, Navbar, Breadcrumb, Tabs                                     |
| Formularios       | Input, Textarea, Select, Checkbox, Radio Button, Switch               |
| Botones           | Primary Button, Secondary Button, Icon Button, Floating Action Button |
| Información       | Card, Badge, Tooltip, Alert, Toast, Modal                             |
| Datos             | Tabla, Lista, Paginación                                              |
| Retroalimentación | Spinner, Progress Bar, Skeleton Loader                                |
| Organización      | Accordion, Divider, Collapse                                          |
| Perfil            | Avatar, User Card                                                     |
| Proyectos         | Project Card, Technology Badge, Progress Card                         |
| Metas             | Goal Card, Progress Ring                                              |
| Dashboard         | Statistic Card, Activity Card, Chart Container                        |

---

## Principios de Construcción

Todos los componentes deberán cumplir las siguientes reglas:

* Ser reutilizables.
* Mantener una apariencia consistente.
* Adaptarse a dispositivos móviles.
* Cumplir criterios de accesibilidad.
* Integrarse con el sistema de colores oficial.
* Utilizar la tipografía definida para DevTrack.

---

## Convención de Nombres

Los componentes seguirán una nomenclatura uniforme en inglés para facilitar su implementación.

Ejemplos:

* Button
* Input
* Card
* Modal
* Sidebar
* Navbar
* ProjectCard
* GoalCard
* ProgressRing
* TechnologyBadge

---

## Prioridad de Desarrollo

### Alta

* Button
* Input
* Card
* Sidebar
* Navbar
* Modal

### Media

* Badge
* Tooltip
* Alert
* Toast
* Table
* Avatar

### Baja

* Skeleton Loader
* Accordion
* Progress Ring
* Charts
* Activity Card

---

## Objetivo Final

El Sistema de Componentes será la base para el desarrollo del frontend de DevTrack, permitiendo construir nuevas pantallas mediante la reutilización de componentes previamente definidos y documentados.

# Experiencia del Usuario

## Primera Impresión

Al ingresar por primera vez a DevTrack, el usuario debe percibir una interfaz limpia, profesional y fácil de comprender. Las funciones principales deben ser visibles desde el primer momento, evitando elementos innecesarios o sobrecarga de información.

La aplicación debe transmitir la sensación de estar utilizando una herramienta creada específicamente para desarrolladores.

---

## Durante la Navegación

Cada pantalla debe tener un propósito claro.

El usuario debe poder identificar rápidamente:

* Dónde se encuentra.
* Qué puede hacer.
* Cómo regresar.
* Cuál es la acción principal de la pantalla.

La navegación debe minimizar la cantidad de clics necesarios para completar una tarea.

---

## Sensación de Progreso

DevTrack debe mostrar constantemente el crecimiento del usuario.

La aplicación debe reflejar visualmente el avance mediante indicadores, estadísticas, metas cumplidas y evolución de habilidades, generando motivación para continuar aprendiendo.

El progreso debe ser uno de los elementos principales de la experiencia del usuario.

---

## Regla de los 10 Segundos

Cualquier usuario nuevo debe comprender la finalidad de una pantalla y localizar sus funciones principales en menos de diez segundos, sin necesidad de instrucciones o tutoriales.

Si una interfaz requiere explicaciones para ser utilizada, deberá replantearse su diseño antes de ser implementada.

---

## Sensación Final

Al finalizar cada sesión en DevTrack, el usuario debe sentir que ha dado un paso más en su crecimiento profesional.

La aplicación debe transmitir progreso, organización y motivación, incentivando el regreso continuo para seguir construyendo su evolución como desarrollador.

---

# Decisiones de Diseño

## DD-001

DevTrack tendrá una interfaz minimalista para reducir la carga cognitiva del usuario.

---

## DD-002

La navegación principal estará disponible desde cualquier pantalla.

---

## DD-003

El progreso del usuario será uno de los elementos visuales más importantes del sistema.

---

## DD-004

El diseño priorizará la claridad de la información sobre los elementos decorativos.

---

## DD-005

Toda decisión visual deberá reforzar la filosofía del producto: mostrar la evolución profesional del desarrollador.

---

# Criterios de Calidad del Diseño

| Criterio        | Objetivo                                                                       |
| --------------- | ------------------------------------------------------------------------------ |
| Claridad        | La información importante debe identificarse en menos de 10 segundos.          |
| Consistencia    | Todos los componentes deben seguir el mismo patrón visual.                     |
| Accesibilidad   | El contenido debe ser legible y usable por cualquier usuario.                  |
| Escalabilidad   | El diseño debe permitir agregar nuevas funcionalidades sin romper la interfaz. |
| Profesionalismo | Cada pantalla debe transmitir confianza y calidad.                             |

---

# Estado del Documento

**Versión:** 1.0

**Estado:** En elaboración

**Responsable:** Sebastián Campo
