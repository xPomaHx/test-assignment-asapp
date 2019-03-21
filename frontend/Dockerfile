FROM mhart/alpine-node:11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build
RUN mkdir -p distReady
CMD ["cp", "-a", "dist/.","distReady/"]
