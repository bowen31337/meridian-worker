FROM node:20-alpine

WORKDIR /app

# Install wrangler globally for local testing
RUN npm install -g wrangler

# Install project dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY src ./src
COPY wrangler.toml ./
COPY . .

# Expose wrangler dev server
EXPOSE 8787

# Run wrangler dev by default
CMD ["wrangler", "dev", "--local"]
