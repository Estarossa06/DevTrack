# D-010 – Convenciones del Proyecto DevTrack

## Información General

| Campo | Valor |
|--------|--------|
| Documento | D-010 |
| Nombre | Convenciones del Proyecto |
| Proyecto | DevTrack |
| Versión | 1.0 |
| Estado | Vigente |
| Fecha | Julio 2026 |

---

# 1. Objetivo

Definir las convenciones técnicas utilizadas durante el desarrollo de DevTrack con el fin de mantener un código consistente, legible y escalable.

---

# 2. Convenciones de nombres

## Carpetas

Las carpetas deberán utilizar **camelCase** o minúsculas según el tipo de módulo.

Ejemplos:

```text
components/
services/
dashboard/
shared/
config/
```

---

## Componentes React

Los componentes utilizarán **PascalCase**.

Ejemplo:

```text
DashboardStats.tsx
LoginForm.tsx
ProtectedRoute.tsx
```

---

## Hooks

Todos los hooks personalizados comenzarán con el prefijo:

```text
use
```

Ejemplos:

```text
useAuth.ts
useProjects.ts
```

---

## Types e Interfaces

Los archivos de tipos se almacenarán dentro de:

```text
src/types
```

---

# 3. Organización del proyecto

Los componentes deberán organizarse por dominio funcional.

```text
components/

auth/

dashboard/

shared/

ui/
```

No se crearán carpetas nuevas sin una responsabilidad claramente definida.

---

# 4. Imports

Se utilizará el alias:

```ts
@
```

Ejemplo:

```ts
import { Button } from "@/components/ui";
```

Se evitarán rutas relativas largas como:

```text
../../../
```

---

# 5. Barrel Exports

Cada módulo reutilizable deberá contar con un archivo:

```text
index.ts
```

que centralice las exportaciones.

---

# 6. Servicios

Toda comunicación con el backend deberá realizarse mediante:

```text
services/api
```

Los componentes React no deberán realizar llamadas HTTP directamente.

---

# 7. Variables de entorno

Todas las variables deberán comenzar con:

```text
VITE_
```

El acceso se realizará únicamente mediante:

```ts
env
```

Nunca mediante:

```ts
import.meta.env
```

directamente en los componentes.

---

# 8. Commits

Formato recomendado:

```text
feat(scope): descripción

fix(scope): descripción

refactor(scope): descripción

docs(scope): descripción
```

Ejemplo:

```text
feat(frontend): implement authentication module
```

---

# 9. Flujo de trabajo

Cada Sprint seguirá el siguiente proceso:

1. Planificación.
2. Desarrollo.
3. Validación.
4. Refactorización.
5. Documentación.
6. Commit.
7. Revisión.

---

# 10. Observaciones

Estas convenciones podrán evolucionar conforme avance el proyecto, procurando mantener compatibilidad con la arquitectura establecida durante la Fase 2.