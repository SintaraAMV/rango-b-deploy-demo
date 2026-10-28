# LeadBoard

Aplicación web sencilla para consultar leads comerciales. Muestra un resumen por estado y una tabla de leads con filtro por estado. Los datos son sintéticos y viven en memoria (sin base de datos).

## Requisitos

- Node.js 18 o superior
- npm

## Uso

```bash
npm install
npm start
```

La aplicación queda disponible en http://localhost:3000.

## Endpoints

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/` | Interfaz web |
| GET | `/api/leads` | Lista de leads (JSON) |
| GET | `/api/leads?status=qualified` | Filtra por estado: `new`, `contacted`, `qualified`, `won`, `lost`. Un estado inválido devuelve 400 |
| GET | `/health` | Estado del servicio: `{"status":"ok","app":"...","version":"..."}` |

Las rutas `/api/*` desconocidas devuelven 404 en JSON.

## Variables de entorno (opcionales)

- `PORT`: puerto de escucha (por defecto `3000`).
- `APP_NAME`: nombre mostrado en la interfaz y en `/health` (por defecto `LeadBoard`).
