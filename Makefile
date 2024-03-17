.DEFAULT_GOAL := help
.PHONY: venv
.EXPORT_ALL_VARIABLES:

## APP VARS ##
OWNER             = school
SERVICE_TYPE      = microservice
SERVICE_NAME      = notification
VERSION      	  = v2
APP_NAME          = $(SERVICE_TYPE)-$(SERVICE_NAME)
DOCKER_NETWORK    ?= neo_network
DOCKER_USER 	  ?= node:node
TIME_ZONE		  = America/Lima
CONTAINER_PORT    ?= 80
PATH_PREFIX   	  = /$(VERSION)

## GENERAL VARS ##
ENV               ?= dev
NODE_ENV          ?= dev
ACCOUNT_ENV		  ?= $(ENV)
INFRA_BUCKET      ?= infraestructura.neoauto.local
CLUSTER           ?= $(OWNER)-$(ENV)
PROJECT_NAME      = $(OWNER)-$(ENV)-$(SERVICE_NAME)
APP_DIR           = app
DEPLOY_REGION     ?= us-east-1
PATH_SERVICE	= /v1/notification*

## INCLUDE TARGETS ##
include makefiles/container.mk
include makefiles/deploy.mk
include makefiles/test.mk
include makefiles/help.mk
