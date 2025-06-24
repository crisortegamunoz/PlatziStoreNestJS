# 🛍️ Platzi Store API - Proyecto con NestJS

Este es un proyecto backend desarrollado como parte del curso de **NestJS** en Platzi. La aplicación simula una tienda virtual y está enfocada en la creación de una API REST sólida, mantenible y escalable, siguiendo buenas prácticas de arquitectura y validación de datos.

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- Node.js
- TypeScript
- Express (por debajo de Nest)
- Swagger (para documentación)
- PostgreSQL (o base de datos elegida)
- TypeORM / Prisma (dependiendo de implementación)

## 📚 Temas abordados en el curso

Durante el desarrollo del proyecto se abordaron los siguientes conceptos y prácticas:

- ✅ **Estructura de un proyecto NestJS**
- ✅ **Creación de APIs RESTful**
- ✅ **Controladores (`@Controller`) y rutas**
- ✅ **Servicios (`@Injectable`) y lógica de negocio**
- ✅ **Inyección de dependencias**
- ✅ **Data Transfer Objects (DTOs) para validación de datos**
- ✅ **Pipes de validación con `class-validator` y `class-transformer`**
- ✅ **Manejo de errores con filtros (`@Catch`)**
- ✅ **Uso de módulos (`@Module`) para organizar la arquitectura**
- ✅ **Documentación de la API con Swagger**
- ✅ **Uso de parámetros, query params y body en los endpoints**
- ✅ **Middlewares y Guards**
- ✅ **Principios SOLID y buenas prácticas**
- ✅ **Conexión con base de datos relacional**

## 🧱 Estructura del proyecto

```
src/
├── app.module.ts
├── main.ts
├── products/
│   ├── products.module.ts
│   ├── products.controller.ts
│   ├── products.service.ts
│   ├── dtos/
│   └── entities/
├── users/
│   └── ...
└── common/
    ├── filters/
    └── guards/
```

## 🔧 Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/platzi-store-nest.git
   cd platzi-store-nest
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

4. Accede a la documentación de la API en:
   ```
   http://localhost:3000/docs
   ```

## 📦 Endpoints disponibles (ejemplos)

- `GET /products`: Lista todos los productos
- `POST /products`: Crea un nuevo producto
- `GET /products/:id`: Obtiene un producto por ID
- `PUT /products/:id`: Actualiza un producto
- `DELETE /products/:id`: Elimina un producto

## ✅ Validaciones y DTOs

Los datos enviados a los endpoints son validados usando **DTOs** y la librería `class-validator`. Esto permite asegurar que los datos sean correctos antes de llegar a la lógica del servicio.

```ts
export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;
}
```

## 🛡️ Buenas prácticas y arquitectura

- Módulos organizados por dominio (Products, Users, etc.)
- Separación de responsabilidades entre controlador, servicio y DTO
- Validación automática de datos
- Código limpio y reutilizable

## 📌 Notas del curso

Este proyecto fue desarrollado paso a paso siguiendo las lecciones del curso **"NestJS: Backend con Node.js y TypeScript"** de Platzi, con el objetivo de dominar los fundamentos y herramientas para crear APIs modernas en Node.js.