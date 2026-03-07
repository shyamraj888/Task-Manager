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
├── public
│   └── style.css
│
├── views
│   ├── home.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
├── index.js
└── package.json
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

Run the server

```
node index.js
```

Open in browser

```
http://localhost:8080/posts
```

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
