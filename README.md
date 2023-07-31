# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Planificacion del proyecto](#3-Planificacion-del-proyecto)
* [4. Paso a paso del proyecto](#4-Paso-a-paso-del-proyecto)
* [5. Testeo del proyecto](#5-Testeo-del-proyecto)
* [6. Checklist](#6-checklist)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

[anchor-links-wordpress](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/6d296484-95c5-49e4-b01d-952d3bd4017c)

## 2. Resumen del proyecto

En este proyecto se creo una herramienta de línea de comando (CLI) así como su
propia librería.Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

En esta oportunidad nos alejamos un poco del navegador para construir un
programa que se ejecute usando Node.js, es un entorno de ejecución para JavaScript
construido con el Node.js

## 3. Planificación del proyecto
El metodo para desarrollar el proyecto fue por medio de GitHub Projects, Issues y Milestones.
[foto 6](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/629a2911-dc41-4cb5-b33f-d4047bdf42ad)

# Diagrama de flujo del proyecto
[Diagrama MDLinks (2)](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/42ad84b9-c42c-4407-894c-cce0c53c0664)

## 4. Paso a paso del proyecto
CLI (aplicación de línea de comandos).

Instalación.
Dentro de tu terminal ejecuta el siguiente comando:

npm i vivianagomez_md-links

Inicar la libreria.
Cuando se tenga la libreria instalada sera necesario proporcionar los datos en la terminal de la siguiente forma:

npx npm i vivianagomez_md-links <path> [options]

Path (Url o Ruta relativa u absoluta).

Options a ejecutar (--validate, --stats, --validate --stats, solo la path).

En caso de se una ruta no encontrada o la ruta no fue proporcionada correctamente lanzara error.

Ingresos de opciones y resultados esperados.
1. npx npm i vivianagomez_md-links <path> Al ejecutar esta opción donde solo se proporciona la ruta la libreria solo enlistara los links encontrados. En caso de no encontrar ruta o no ser proporcionada conrrectamente lanzara error u ruta no encontrada.
[foto 1](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/1dd966ad-a70c-47b7-86fc-b2d66b79621f)
[foto 2](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/118e4093-e821-4c6f-8591-9755505ffff0)

2. npx i vivianagomez_md-links <path> --validate Al ejecutar esta opción el modulo hara una petición HTTP mostrando si los links encontrados funcionan o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como funcional. Si el link resulta en una redirección a una URL que responde fail, entonces consideraremos el link como roto. Si no encuentra ningun archivo se lanzara error.
[foto 3](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/63c77895-3fe3-47bd-a3c2-9a06939926c5)

3.npx i vivianagomez_md-links <path> --stats Al ejecutar esta opción el output (salida) será un texto con estadísticas básicas sobre los links, donde se mostrara la cantidad de links encontrados y no repetidos. Si no encuentra ningun archivo se lanzara error.
[foto 4](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/e27b5cc7-9a76-4d95-ba77-98666bcfd23d)
4. npx i vivianagomez_md-links <path> --validate --stats Al ejecutar esta opción el output (salida) será un texto con estadísticas básicas sobre los links, donde se mostrara la cantidad de links encontrados y no repetidos, ademas de analizar la cantidad de links rotos u no funcionales. Si no encuentra ningun archivo se lanzara error.
[foto 5](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/03a6abf0-c6b6-4522-a2c5-fcaf08e874ab)

## 5. Testeo del proyecto

Resultados de pruebas realizadas a las funciones puras.
[foto7](https://github.com/Viviana8913/DEV007-md-links/assets/129759642/053fcae3-747c-46ee-99a4-229e191a197c)

## 6. Checklist

### General

* [x] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [x] Un board con el backlog para la implementación de la librería.
* [x] Documentación técnica de la librería.
* [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [x] El módulo exporta una función con la interfaz (API) esperada.
* [x] Implementa soporte para archivo individual
* [x] Implementa soporte para directorios
* [x] Implementa `options.validate`

### CLI

* [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [x] Se ejecuta sin errores / output esperado
* [x] Implementa `--validate`
* [x] Implementa `--stats`

### Pruebas / tests

* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [x] Pasa tests (y linters) (`npm test`).


