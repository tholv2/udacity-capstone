FROM node:16-alpine

# Create a working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 80
EXPOSE 80

## Step 5:
# Run index.js at container launch
CMD ["node", "index.js"]