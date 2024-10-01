# DrakoHotel CMS

Bienvenido al sistema de gestión de contenido (CMS) para **DrakoHotel**, un juego en línea inspirado en el clásico Habbo Hotel. Este repositorio contiene el código necesario para gestionar el contenido del hotel y permitir que los administradores y usuarios interactúen con la plataforma de manera efectiva.

## Estructura del Proyecto

```
CMS/
│
├── maintenance/              # Archivos relacionados con el mantenimiento del sitio
│
├── routes/                   # Definición de rutas del servidor
│
├── src/                      # Código fuente del proyecto
│   ├── css/                  # Archivos CSS para el diseño
│   ├── js/                   # Archivos JavaScript para la funcionalidad
│   └── media/                # Imágenes y otros recursos multimedia
│       ├── build.png
│       ├── drakohotel-banner.png
│       ├── Futurama.gif
│       ├── Header_Banner.png
│       └── spromo_Bonus_Bags.png
│
├── views/                    # Vistas HTML para el contenido del hotel
│   ├── profile/              # Vistas de perfil de usuario
│   │   ├── me.html
│   │   └── wall.html
│   └── store/                # Vistas de la tienda
│       ├── tienda.css
│       ├── tienda.html
│       ├── tienda.js
│       ├── 404.html
│       ├── about.html
│       ├── index.html
│       ├── top.html
│       └── staffs.html
│
├── .htaccess                 # Configuraciones del servidor
├── app.js                    # Archivo principal de la aplicación
├── package-lock.json         # Bloqueo de versiones de paquetes
├── package.json              # Información del proyecto y dependencias
├── RDJIULggrksh4Baor.html    # Archivo adicional
└── server.js                 # Configuración del servidor y lógica de backend
```

## Requisitos

- Node.js
- npm (Node Package Manager)
- Un servidor web (Apache o similar) para la implementación

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/DevJuanB/drakohotel
   ```

2. Navega a la carpeta del proyecto:
   ```bash
   cd cms
   ```

3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

4. Inicia el servidor:
   ```bash
   node server.js
   ```

## Uso

Accede a la aplicación web en tu navegador usando la dirección `http://localhost:puerto` donde `puerto` es el número de puerto que estás utilizando en tu servidor.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregada nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para más información,  [discord](https://discord.gg/Ahk7Fm9Hbk)].
