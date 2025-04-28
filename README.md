# Curso Bootstrap

Repositorio del curso de **Bootstrap**, diseñado para aprender a utilizar el framework de manera profesional y automatizar flujos de trabajo con Gulp.

## Contenido del Repositorio

### 1. `bootstrap-template/`

Plantilla básica que incluye:

- Uso directo de Bootstrap desde CDN.
- Archivos HTML estructurados para implementar componentes de Bootstrap.
- Ideal para aprender a integrar Bootstrap de forma rápida.

### 2. `bootstrap-template-gulp/`

Plantilla avanzada que automatiza tareas usando **Gulp**:

- Compilación de SCSS a CSS.
- Minificación de archivos CSS y JS.
- Recarga automática del navegador con cambios en el código.
- Flujo de trabajo optimizado para proyectos de frontend profesional.

### 3. `temas/`

Prácticas organizadas por temas:

- Aprendizaje gradual de Bootstrap: grillas, componentes, utilidades, entre otros.
- Ejemplos prácticos para afianzar el conocimiento.

## Cómo usar este repositorio

### Requisitos

- Editor de código como **Visual Studio Code**.
- Node.js y npm instalados (solo para la plantilla Gulp).
- Gulp instalado globalmente:

```bash
npm install -g gulp-cli
```

### Instrucciones

#### 1. Clona el repositorio:
```bash
git clone https://github.com/renetts/curso-bootstrap.git
cd curso-bootstrap
```
#### 2. Para usar la plantilla simple (bootstrap-template):
- Abre los archivos HTML directamente en el navegador.

#### 3.	Para usar la plantilla Gulp (bootstrap-template-gulp):
- Instala las dependencias:
```bash
npm install
```
- Ejecuta Gulp:
```bash
gulp
```
- El navegador se abrirá automáticamente y se actualizará al guardar cambios.

#### 4.	Para estudiar los temas (temas/):
- Abre cada carpeta para practicar los diferentes módulos de Bootstrap.

### Scripts de Gulp
#### 1.	sass
```bash
gulp sass
```
- Entrada: src/scss/**/*.scss
- Salida: dist/css/

#### 1.	sass
```bash
gulp sass
```
- Entrada: src/scss/**/*.scss
- Salida: dist/css/

#### 2. scripts

Concatena y minifica archivos .js:
```bash
gulp scripts
```
- Entrada: src/js/**/*.js
- Salida: dist/js/

#### 3. watch
Monitorea cambios y recompila automáticamente:
```bash
gulp watch
```
- Observa archivos SCSS y JS.
- Recarga el navegador usando BrowserSync.

#### 4. default
Ejecuta todas las tareas anteriores y lanza un servidor local:
```bash
gulp
```