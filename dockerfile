 FROM node
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . . 
    RUN npm run dev
    
    EXPOSE 4000
    CMD ["npm", "start"]

