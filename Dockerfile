FROM node:15.13-alpine
WORKDIR /.

ENV PATH="./node_modules/.bin:$PATH"
COPY . .

RUN yarn build
CMD ["yarn", "start"]