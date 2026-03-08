# Task Manager =

A simple task/post manager built using **Node.js, Express, and EJS**.
This project allows users to create, view, edit, and delete posts in a clean sticky-notes style interface.

---

## Features

* Create new posts
* View all posts
* Edit existing posts
* Delete posts
* Responsive layout for mobile devices
* Animated background UI
* Sticky-note style post cards

---

## Tech Stack

* Node.js
* Express.js
* EJS (Embedded JavaScript Templates)
* CSS (Flexbox + Responsive Design)
* UUID for unique post IDs
* Method-Override for PATCH requests

---

## Project Structure

```
project-folder
│
├── api                  # serverless function entry point
│   └── index.js
├── middleware           # custom middleware functions
│   └── logger.js
├── routes               # express routers
│   └── posts.js
├── public
│   └── style.css
│
├── views
│   ├── home.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
├── index.js             # local dev entry point
├── vercel.json          # vercel serverless config
├── package.json
└── .gitignore
```

---

## Installation

Clone the repository

```
git clone https://github.com/your-username/task-manager.git
```

Navigate to the project folder

```
cd task-manager
```

Install dependencies

```
npm install
```

Run the server locally

```
npm run dev
```

Or production mode

```
npm start
```

Open in browser

```
http://localhost:8080/posts
```

---

## Vercel Deployment (Serverless)

This project is configured for serverless deployment on Vercel.

### Deploy Steps

1. Push your code to GitHub

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

2. Connect your repository to Vercel
   - Go to [vercel.com](https://vercel.com)
   - Click Import Project
   - Select your GitHub repository
   - Vercel will auto-detect the `vercel.json` configuration

3. Click Deploy
   - Your app will be live at a URL like `https://your-app.vercel.app`

### Serverless Configuration

The `vercel.json` file configures:
- Serverless function runtime: `@vercel/node`
- Entry point: `api/index.js`
- All requests route to the Express app

### Notes

- The app uses in-memory storage (posts are not persisted across deployments)
- For production, consider adding a database (MongoDB, PostgreSQL, etc.)
- Environment variables can be configured in Vercel's project settings

---

## Routes

| Method | Route           | Description          |
| ------ | --------------- | -------------------- |
| GET    | /posts          | Show all posts       |
| GET    | /posts/new      | Create new post page |
| POST   | /posts          | Add a new post       |
| GET    | /posts/:id      | View single post     |
| GET    | /posts/:id/edit | Edit post page       |
| PATCH  | /posts/:id      | Update post          |
| DELETE | /posts/:id      | Delete post          |

---

## Author

Created as a practice project for learning **Express CRUD operations and EJS templating**.
