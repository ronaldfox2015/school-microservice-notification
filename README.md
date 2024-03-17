Infraestructura Microservice Payment
=========================================
Microservicio de payment con Cloudformation


Pasos para levantar proyecto 2022
==============================
Se realizaron modificaciones para levantarlo en local

```console
~/$ make build
~/$ make install
~/$ make up
```

http://local.services.aptitus.com/v1/payment/doc se debe considerar ejecutar el schema.sql en aptitus-local-infraestructure
para que tenga la bd configurada. Ademas de levantar aptitus-local-infrastructure

¿Que incluye?
--------------
* source Code (directory app)
* Infra Code (directory cloudformation)
* Dockerfile (directory docker)
* Makefile

Requerimientos
--------------
* Docker
* Docker Compose
* Php

Help
----
* make
* make help

Comandos
--------
```console
Target                      Help                                                       Usage
------                      ----                                                       -----
aws:
 login-aws            Login to region aws

backend:
 install              Install project
 composer             Run composer command
 test                 Run test
 build-e2e            Build image end to end                        make build-e2e
 unit-tests           Run unit tests
 tests-e2e            Run the end to end Tests                      make tests-e2e

docker:
 build                build image                                   make build, make build image=nginx
 up                   Up docker containers                          make up
 down                 Stops and removes the docker containers       make down
 restart              Restart all containers                        make restart
 status               Show containers status                        make status
 ssh                  Enter ssh container                           make ssh container=nginx
 clean                Clear containers
```

Estructura del proyecto
=======================

Directorio de la Aplicacion
---------------------------
```console
app
├── web
│   └── app_dev.php (Archivo de configuración modo dev)
│   └── app.php (Archivo de configuración modo prod)
└── app
    └── config
        └── aws.yml
        └── parameters.yml.dist

```

Directorio de Cloudformation
----------------------------
```console
cloudformation
├── sam.yml
└── stacks
    ├── autoscaling.yml
    └── service.yml
```

Directorio de Docker
--------------------
```console
docker
├── cli
│   └── Dockerfile  (Imagen de docker para instalar dependencias de composer)
├── nginx
│   └── Dockerfile  (Imagen de docker para desarrollar y generar release)
└── latest
    └── Dockerfile  (Imagen de docker para desplegar en el ambiente de producción)
```

Directorio de Tests
--------------------
```console
app
└── tests
    └── e2e (Pruebas e2e)
        ├── Payment (Test realizado por caso de prueba)
        └── request (Configuración del test, definición de rutas y conexiones)
    └── Payments (Pruebas Unitarias)
```

Deploy Stack de Cloudformation
==============================
Para desplegar el stack de cloudformation, usar los siguientes comandos:

```console
~/$ make install.deploy.build
~/$ make build.last
~/$ make login.aws.ecr
~/$ make create.repository.aws.ecr
~/$ make login.aws.ecr
~/$ make push.aws.ecr
~/$ make stack.deploy
```

**NOTE:**
Se debe construir la imagen del contenedor de docker cuando no exista en el repositorio local de docker del equipo o cuando se realize un cambio en el archivo Dockerfile, usando el siguiente comando:
```console
~/$ make build
```

Eliminar Stack de Cloudformation
================================
Para eliminar el stack de cloudformation, usar el siguiente comando:

```console
~/$ make stack.delete
```

Ejecutar los tests e2e
================================
Para poder ejecutar los tests de manera local sin ningun inconveniente, verificar los siguientes archivos:

En el archivo app/tests/e2e/request/config.js
```console
process.env.HOST = 'http://nginx:80/v1/payment';
process.env.APTITUS = 'https://dev4c.aptitus.com';

process.env.DATABASE = 'mysql://root:1234@mysql:3306/mdb_apt_payments?debug=false';
```

En el archivo app/app/config/parameters.yml
```console
## Database
database_host: mysql
database_port: 3306
database_name: mdb_apt_payments
database_user: root
database_password: 1234
```
