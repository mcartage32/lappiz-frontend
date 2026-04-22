# Lappiz Frontend - UI de Gestión de Leads (React + Vite + Ant Design)

## 1. Descripción General

Frontend desarrollado para la gestión de **leads (interesados en demos de la plataforma Lappiz)**.

Esta aplicación permite:

- Registrar nuevos leads mediante formulario
- Visualizar leads en una tabla paginada
- Consumir una API REST desarrollada en NestJS
- Mostrar notificaciones de éxito y error

La interfaz está diseñada con un estilo tipo **SaaS moderno (Lappiz UI)** usando tema oscuro personalizado.

---

## 2. Tecnologías Utilizadas

- React 18
- Vite
- TypeScript
- Ant Design (UI Library)
- React Query (TanStack Query)
- Axios

---

## 3. Estructura del Proyecto

```
src/
├── api/
│   ├── reactQuery/         # Hooks personalizados (useQuery, useMutation)
│   │   ├── index.ts        # Exportaciones centralizadas
│   │   └── leads.ts        # Queries/Mutations específicos de leads
│   ├── axiosConfig.ts      # Instancia de Axios y base URL
│   └── endpoints.ts        # Constantes con las rutas de la API
├── components/
│   └── NotificationCustom.tsx
├── interfaces/
│   ├── index.ts            # Exportaciones centralizadas
│   └── leads.ts            # Interfaces para las operaciones con los leads
├── pages/
│   ├── LeadsForm.tsx
│   └── LeadsTable.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 4. Instalación y Ejecución

### Requisitos previos

- Node.js
- Bun

---

### Instalación

1. Clonar el repositorio

```
git clone https://github.com/tu-usuario/lappiz-frontend.git
```

2. Ingresar al proyecto

```
cd lappiz-frontend
```

3. Instalar dependencias

```
bun install
```

---

### Ejecutar en desarrollo

```
bun run dev
```

La aplicación estará disponible en:

[http://localhost:5173](http://localhost:5173)

---

## 5. Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```
VITE_API_URL=http://localhost:3000/api/v1
```

---

## 6. Funcionalidades

### 1. Registro de Leads

Formulario para crear nuevos leads:

- Nombre
- Correo electrónico
- Validaciones básicas

### 2. Listado de Leads

Tabla con:

- ID
- Nombre
- Email
- Fecha de creación
- Paginación dinámica

---

## 7. Comunicación con Backend

El frontend consume una API REST desarrollada en NestJS:

### Endpoints utilizados

#### Obtener leads

```
GET /leads
```

#### Crear lead

```
POST /leads
```

---

## 8. Estado Global y Fetching

Se utiliza **React Query** para:

- Cache de datos
- Revalidación automática
- Manejo de estados de loading y error

---

## 9. UI / Diseño

La interfaz sigue un estilo tipo **https://lappiz.io/**:

- Fondo negro (#000000)
- Acento rojo (#fe0000)
- Cards con glow sutil
- Tabla transparente
- Estilo enterprise moderno

---

## 10. Notificaciones

Se implementa un sistema de notificaciones personalizado:

- Éxito al crear lead
- Error en solicitudes
- Feedback inmediato al usuario

---

## 11. Build para Producción

```
bun run build
```

El build será generado en:

```
dist/
```

---

## 12. Notas del Proyecto

- Proyecto frontend desacoplado del backend
- Diseñado para escalar a dashboard completo

---
