FROM node:18-alpine
RUN apk update && \
    apk upgrade && \
    apk add --no-cache git && \
    npm install -g pnpm
ENV TZ=America/Lima
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /app

ONBUILD ADD app /app

WORKDIR /app
RUN npm i -g @nestjs/cli
RUN nest new . --package-manager pnpm
RUN rm -R node_modules/
RUN rm -R src/
RUN rm -R test/
RUN rm -R tsconfig.build.json
RUN rm -R tsconfig.json
RUN rm -R README.md
RUN rm -R pnpm-lock.yaml

EXPOSE 80
EXPOSE 9229
