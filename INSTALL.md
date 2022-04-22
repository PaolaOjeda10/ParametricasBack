# Instalación del Proyecto

## Instalación del código fuente

### 1. Clonar el proyecto

```
$ git clone https://gitlab.agetic.gob.bo/agetic/mdpyep/registro-comercio/mdpyep-seprec-parametricas-backend.git
```

### 2. Ingresar a la carpeta

```
$ cd mdpyep-seprec-parametricas-backend
```

### 3. Instalar dependencias del proyecto

> Es necesario que el servidor tenga correctamente configurado los [repositorios](http://repositorio.agetic.gob.bo/).

```
$ npm install
```

### 4. Archivo de configuración

1. Copiar el archivo de configuración de ejemplo.

```
$ cp .env.sample .env
```

2. Verificar que todas las variables esten correctamente configurados.

```
$ nano .env
```

3. Revisar el archivo creado `.env` y configurar las variables necesarias. Los ejemplos se encuentran en el archivo `.env.sample` de configuración.

**NOTA**: PARA MAYOR DETALLE REVISAR LA ÚLTIMA VERSIÓN DEL ARCHIVO .env.sample.

**Datos de despliegue**
- NODE_ENV: ambiente de despliegue.
- PORT: Puerto en el que se levantará la aplicación.

**Configuración de la base de datos**
- DB_HOST: Host de la base de datos.
- DB_USERNAME: nombre de usuario de la base de datos.
- DB_PASSWORD: contraseña de la base de datos.
- DB_DATABASE: nombre de la base de datos.
- DB_PORT: puerto de despliegue de la base de datos.
- PATH_SUBDOMAIN: `api` - mantener.

**Path para generar archivos CSV**
- PATH_EXPORT_CSV: Ruta para para generar los archivos csv de las tablas parametricas.


## Ejecución manual

- Ejecución en modo desarrollo
```bash
# development
$ npm run start
```
- Ejecución en modo desarrollo (live-reload)
```bash
# watch mode
$ npm run start:dev
```
- Ejecución en modo PRODUCCIÓN
```bash
# production mode
$ npm run start:prod
```
```

