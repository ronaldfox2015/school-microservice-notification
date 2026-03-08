# Usar la imagen oficial de PHP 8.3 FPM basada en Alpine para ligereza
FROM php:8.3-fpm-alpine

# Instalar dependencias del sistema y extensiones de PHP comunes para APIs
RUN apk add --no-cache \
    bash \
    curl \
    libpng-dev \
    libzip-dev \
    zlib-dev \
    icu-dev \
    oniguruma-dev \
    $PHPIZE_DEPS

RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    intl \
    zip \
    opcache

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar el directorio de trabajo
WORKDIR /var/www/html

# Ajustar permisos para el usuario www-data
RUN chown -R www-data:www-data /var/www/html

USER www-data

EXPOSE 9000

CMD ["php-fpm"]
