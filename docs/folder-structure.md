# Architecture

- [Architecture]:
  - [`docs`](#docs)
  - [`src`](#src)
    - [`app`](#app)
        - [core](#core)
        - [modules](#modules)
        - [shared](#shared)
    - [`assets`](#assets)
    - [`environments`](#environments)


## `docs`

Documentation of the structure, conventions and multiple opinionated rules that the app structure followed.

## `src`

Source code folder.

## `app`

App folder, contain the main app module and configurations.

### `core`

Core folder, contain important and global configuration for the front-end app (Authorization service, guard, interceptor)

### `modules`

Module pages folder, contain each route and route module for each different module.

### `shared`

Reusable services, components, pipes, directives, constants, interfaces/models, enums and more.

## `assets`

Hold source styles, global styles, certain config style and many other customization of CSS framework style.
Hold img (mostly SVG) and other assets to be use for styling.