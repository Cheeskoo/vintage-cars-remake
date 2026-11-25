# Vintage Cars

Sitio para explorar un catalogo de autos clasicos, ver el detalle de cada uno con un slider de fotos y guardar tus favoritos con tu propia cuenta.

## Como correrlo

```bash
npm install
cp .env.example .env   # y completa SESSION_SECRET con un texto largo y aleatorio
npm run dev            # o: npm start
```

Abre `http://localhost:3000` (o el puerto que pongas en `PORT`).

## Funciones

- **Catalogo** (`/html/catalogo.html`): busqueda por texto y filtros por disponibilidad, categoria, marca y orden por precio. Los filtros quedan en la URL, asi que se pueden compartir.
- **Detalle** (`/html/auto.html?id=N`): slider de fotos con flechas, puntos, miniaturas y teclado, ficha tecnica y autos relacionados.
- **Cuentas**: registro e inicio de sesion. Las contraseñas se guardan con hash (scrypt) y la sesion es una cookie `httpOnly` firmada.
- **Favoritos** (`/html/dashboard.html`): cada usuario guarda sus autos con el corazon y los ve en su panel.

## API

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/cars` | Lista de autos. Query: `buscar`, `categoria`, `marca`, `disponible` (`true`/`false`), `orden` (`ASC`/`DESC`) |
| GET | `/api/cars/filtros` | Categorias y marcas disponibles |
| GET | `/api/cars/:id` | Detalle de un auto con su galeria |
| POST | `/api/auth/register` | `{ nombre, apellido, correo, usuario, password }` |
| POST | `/api/auth/login` | `{ usuario, password }` (usuario o correo) |
| POST | `/api/auth/logout` | Cierra la sesion |
| GET | `/api/auth/me` | Usuario actual o `null` |
| GET | `/api/favorites` | Autos guardados (requiere sesion) |
| POST / DELETE | `/api/favorites/:carId` | Guardar / quitar un favorito (requiere sesion) |

## Estructura

```
server.js            servidor Express
routes/              rutas de la API (autos, auth, favoritos)
lib/auth.js          hash de contraseñas, cookie de sesion y middlewares
lib/store.js         usuarios guardados en data/users.json
data/cars.js         catalogo de autos con sus fotos
public/              frontend (HTML, CSS y JS modulares)
```

Los usuarios se guardan en `data/users.json` (se crea solo y esta en `.gitignore`).
Las fotos de la galeria vienen de Unsplash y Wikimedia Commons; cada foto muestra su credito en el slider.
