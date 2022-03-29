# syntax=docker/dockerfile:1

########################
# Stage 1 - Copy Files #
########################
FROM node:lts-alpine AS build

# Set working directory on image
WORKDIR /app

# Copy files
COPY ./src /app/src
COPY ./prisma /app/prisma
COPY ./nodemon.json /app/nodemon.json
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./tsconfig.json /app/tsconfig.json

#################################
# Stage 2: Install Dependencies #
#################################
FROM node:lts-alpine AS dependencies

# set workdir on image
WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/yarn.lock /app/yarn.lock
COPY --from=build /app/prisma /app/prisma

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

# Install dependencies
RUN yarn install

# bootstrap prisma
RUN yarn prisma generate

#########################################
# Stage 3 - Run app in development mode #
#########################################
FROM node:lts-alpine AS develop

# set workdir on image
WORKDIR /app

# copy files from previous steps
COPY --from=build /app/src /app/src
COPY --from=build /app/nodemon.json /app/nodemon.json
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/tsconfig.json /app/tsconfig.json
COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=dependencies /app/prisma /app/prisma
COPY --from=dependencies /wait /wait

# run
CMD /wait && yarn nodemon

