# Kohat Nectar – Web Platform

## A modern Next.js (App Router) application showcasing fruit varieties of Kohat, Pakistan.

## 1. Introduction

Kohat Nectar is a web-based platform designed to highlight the diverse fruit varieties of Kohat. It provides information about fruits, their seasons, orchard locations, community reports, and environmental impacts. The application is built with Next.js, TailwindCSS, and ShadCN UI to deliver a clean, professional, and responsive user experience.

---

## 2. Features

### Public Features

- Landing page with project introduction
- Fruit varieties listing page
- Detailed fruit information pages
- Community page for user-shared issues and insights (static demo)
- Fully responsive layout

### Admin Features (Mock)

- View submitted posts
- Approve or delete posts (static interface)
- Structured admin page for future expansion

### UI and Design

- Built with TailwindCSS and ShadCN components
- Clean typography, spacing, and layout
- Reusable UI components

---

## 3. Tech Stack

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- ShadCN UI
- Framer Motion (optional animations)
- Lucide React (icons)
- Mock JSON data

---

## 4. Project Structure

```
/app
  / (home)
  /about
  /fruits
  /fruits/[id]
  /community
  /admin
/components
  Navbar.tsx
  Footer.tsx
  FruitCard.tsx
  SectionHeader.tsx
  UI Components...
/data
  fruits.json
  posts.json
/lib
  utils.ts
/public
  fruit-images/
/styles
  globals.css
```

---

## 5. Installation

### Step 1: Clone the repository

```
git clone https://github.com/yourusername/kohat-nectar.git
cd kohat-nectar
```

### Step 2: Install dependencies

```
npm install
```

### Step 3: Run the development server

```
npm run dev
```

Your application will be available at:
[http://localhost:3000](http://localhost:3000)

---

## 6. ShadCN UI Setup

Initialize ShadCN:

```
npx shadcn-ui init
```

Generate components as needed:

```
npx shadcn-ui add card button input navbar dialog textarea
```

---

## 7. Mock Data

All mock data is stored in:

```
/data/fruits.json
/data/posts.json
```

Future versions may replace this with a real database.

---

## 8. Deployment

This project is optimized for deployment on Vercel.

Build the project:

```
npm run build
```

Deploy using Vercel CLI:

```
npx vercel --prod
```

Or connect the GitHub repository directly to Vercel for automated deployments.

---

## 9. Future Enhancements

- Database integration (MongoDB or PostgreSQL)
- User authentication and profiles
- Real-time issue reporting
- Orchard location mapping with Leaflet/Mapbox
- Mobile application version
- Advanced admin dashboard

---

## 10. License

This project is intended for educational and portfolio purposes.
All rights reserved by the authors.

---

## 11. Author

Muhammad Naeem
Full Stack Developer
Portfolio: [https://mnaeem.vercel.app](https://mnaeem.vercel.app)

---
