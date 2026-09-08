# Language Hub

Primera versión personal, diseñada para abrirse como una web o instalarse como PWA en Windows y Android.

## Cómo usarla

Abre `index.html` con un navegador moderno para probarla. Para instalarla en Android, publícala en cualquier alojamiento web seguro (HTTPS), abre esa dirección con Chrome y usa **Instalar aplicación** en el menú del navegador. Una vez publicada, la app permite abrirse incluso sin conexión; los recursos externos requieren Internet. No se instala desde una dirección que empiece por `file:///`.

## Newsletters de Outlook

El botón **Newsletters en inglés** pide las direcciones de los remitentes (una por línea). Con ese dato forma una consulta de Outlook, por ejemplo `from:news@ejemplo.com OR from:daily@ejemplo.org`, y abre Outlook en esa búsqueda. Microsoft documenta el operador `From:` para limitar los resultados a un remitente y permite combinar criterios con `OR`: https://support.microsoft.com/es-ES/Outlook/search-mail-and-people-in-outlook-on-the-web

El único dato que falta es la lista de direcciones de correo exactas de las newsletters. No se ha añadido ningún remitente inventado. Si el enlace de búsqueda no se rellena automáticamente en una cuenta o versión concreta de Outlook, la consulta queda visible en la pantalla para copiarla al cuadro de búsqueda; el formato es el mismo.

## Speak Up

Está incluido como acceso a una app externa. Al no existir todavía un enlace compatible confirmado para Speak Up, muestra una indicación en vez de intentar abrir una ruta inventada.
