FROM 929226109038.dkr.ecr.eu-west-1.amazonaws.com/aptitus-dev-testrestfull-test:20180622.33

COPY ./package.json /app/package.json

RUN cd /app && yarn install \
    && chmod +x /tmp/wait-for-it.sh

WORKDIR /app
EXPOSE 4567