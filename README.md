# Planly Task Manager 🗂️

This is a simple task manager I built while learning **Node.js, Express, and EJS**.
The goal was not just to build a UI, but to understand how **backend logic, routing, and dynamic rendering** work together in a real application.

---

## What this app does

• Add new tasks with title, description, and priority
• Mark tasks as completed using a checkbox
• Delete tasks from the list
• Automatically calculate task completion percentage
• Save tasks in a JSON file so data persists after server restart

---

## Why I built this

I wanted hands-on practice with:

• Building an** app using Node.js and Express**
• Understanding **MVC project structure**
• Rendering dynamic pages using **EJS templates**
• Handling **form data and POST requests**
• Persisting data using a **JSON file as a lightweight database**

This project helped me connect **backend concepts → real application behavior**.

---

## Tech used

• **Node.js** – backend runtime
• **Express.js** – server and routing
• **EJS** – server-side templating
• **Tailwind CSS** – styling
• **JavaScript** – application logic
• **JSON file** – data storage

---

## What I learned

• How **Express routing and controllers** work
• How to structure a project using **MVC architecture**
• How to dynamically render data using **EJS templates**
• How to manage **state and persistence** using JSON
• How frontend and backend communicate using **forms and HTTP requests**

##

---

## Project Structure

```
planly
│
├── controllers
├── data
│   ├── tasks.js
│   └── tasks.json
├── public
├── routes
├── views
│   ├── layouts
│   ├── pages
│   └── partials
├── server.js
└── package.json
```

---

## How to run this project

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/planly-task-manager.git
```

2. Install dependencies

```
npm install
```

3. Start the server

```
node server.js
```

4. Open in browser

```
http://localhost:3000
```

---

## Future improvements

• Edit tasks
• Task filtering (Active / Completed)
• Database integration (MongoDB)
• User authentication
• Deploy the app online
