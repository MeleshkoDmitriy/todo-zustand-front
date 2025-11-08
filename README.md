# Zustodo - PWA Todo Application

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety
- **Vite 5.4** - Build tool and dev server
- **Zustand 5.0** - State management
- **Axios** - HTTP client
- **Sass** - CSS preprocessor
- **React Icons** - Icon library
- **Vite PWA Plugin** - PWA functionality

### Backend
The application connects to a RESTful API backend built with Node.js and Express. The backend repository is available at: **[todo-express-back](https://github.com/MeleshkoDmitriy/todo-express-back)**

The backend provides:
- RESTful API endpoints for CRUD operations
- Query parameter support for filtering
- CORS configuration for frontend integration
- Deployed on Vercel

## 🚀 Features

### Core Functionality
- **Create Todos**: Add new tasks with custom titles and categories
- **Edit Todos**: Update task titles and categories inline
- **Delete Todos**: Remove tasks with confirmation dialog
- **Toggle Completion**: Mark tasks as completed or active with a single click
- **Category Management**: Organize tasks by custom categories

### Advanced Features
- **Smart Filtering**: 
  - Filter by task title (debounced search)
  - Filter by category (debounced search)
  - Filter by completion status (All/Active/Done)
  - Quick category filter by clicking on category badges
  - Clear all filters with one click
- **Real-time Sync**: All changes are automatically synchronized with the backend API
- **Optimistic Updates**: Instant UI updates for better user experience
- **Loading States**: Visual feedback during API operations
- **Smooth Animations**: Powered by `@formkit/auto-animate` for fluid transitions

### Progressive Web App (PWA)
Zustodo works as a **Progressive Web App**, providing:
- **Offline Support**: Service workers enable offline functionality
- **Installable**: Add to home screen on mobile and desktop devices
- **App-like Experience**: Standalone display mode for native app feel
- **Auto-updates**: Automatic updates when new versions are available
- **Responsive Design**: Optimized for both desktop and mobile devices
- **App Icons**: Custom icons for maskable and standard display

## 🎯 Usage

### Creating a Todo
1. Enter a task title in the "Write title" field
2. Enter a category in the "Write category" field
3. Click "Save" to create the todo

### Filtering Todos
- **By Title**: Type in the "Search title..." field (debounced)
- **By Category**: Type in the "Search category..." field (debounced)
- **By Status**: Click on "All", "Active", or "Done" tabs
- **Quick Category Filter**: Click on any category badge in a todo item
- **Clear Filters**: Click the "Clear" tab to reset all filters

### Managing Todos
- **Edit**: Click the edit icon to modify title and category
- **Complete**: Toggle the checkbox to mark as done/active
- **Delete**: Click the delete icon and confirm the action

## 🔧 Configuration

### API Configuration
The API base URL is configured in `src/api/api.ts`:
```typescript
export const BASE_URL = 'https://todo-express-back.vercel.app/api/todos';
```

### PWA Configuration
PWA settings are configured in `vite.config.ts`:
- App name: "Zustodo"
- Theme color: #7c36dd
- Background color: #ffffff
- Display mode: standalone
- Auto-update enabled

## 📱 PWA Installation

### Desktop
1. Open the application in your browser
2. Look for the install icon in the address bar
3. Click "Install" to add to your desktop

### Mobile
1. Open the application in your mobile browser
2. Tap the menu (three dots)
3. Select "Add to Home Screen" or "Install App"
---
