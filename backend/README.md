# Sellora Backend API

Node.js & Express REST API built with TypeScript for the Sellora marketplace platform.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build and run production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
src/
├── controllers/    # Request handlers
├── middleware/     # Custom Express middleware
├── models/         # Database models / schemas
├── routes/         # Express router modules
├── services/       # Business logic
├── types/          # TypeScript types & interfaces
└── server.ts       # Application entry point
```
