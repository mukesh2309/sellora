# Sellora

Sellora is a modern e-commerce and marketplace platform featuring a React Native mobile application and Node.js REST API backend.

## Project Structure

```
sellora/
├── App/          # React Native Mobile Application (iOS & Android)
│   ├── android/  # Native Android project
│   ├── ios/      # Native iOS project
│   ├── src/      # Mobile application source code
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── theme/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── constants/
│   │   └── types/
│   ├── App.tsx   # React Native app root
│   └── package.json
│
├── backend/      # Node.js & Express REST API
│   ├── src/      # Server & API routes
│   └── package.json
```

## Getting Started

### 1. Mobile App (`App/`)

```bash
cd App
npm install

# Run iOS
npm run ios

# Run Android
npm run android
```

### 2. Backend (`backend/`)

```bash
cd backend
npm install
npm run dev
```
