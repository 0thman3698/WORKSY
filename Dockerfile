FROM node:20-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install

COPY . .

COPY prisma ./prisma

RUN npx prisma generate

RUN npm run build


FROM node:20-alpine as development

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install

COPY . .

COPY prisma ./prisma

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "dev"]

FROM node:20-alpine as production


RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install --only=production

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma


EXPOSE 4000

CMD ["npm", "run", "start"]





