FROM node:13.7.0-alpine3.11 AS builder

WORKDIR /typescript
COPY index.ts /typescript
RUN yarn global add typescript \
 && tsc index.ts

FROM node:13.7.0-alpine3.11

WORKDIR /typescript
COPY --from=builder /typescript/index.js .
CMD ["node", "index.js"]
