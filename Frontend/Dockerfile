# Use Node.js image
FROM node:22

# Create working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining frontend files
COPY . .

# Expose Vite port
EXPOSE 5173

# Start React app
CMD ["npm", "run", "dev", "--", "--host"]