
---

```md
# 🗂️ Kanban Task Manager (Full-Stack)

A full-stack Kanban-style task management web application that allows users to create, update, organize, and persist tasks across different workflow stages.

This project demonstrates end-to-end full-stack development, including frontend UI, backend APIs, database persistence, drag-and-drop interactions, and cloud deployment.

---

## 🚀 Features

- Create tasks with a **required title**
- Optional task **description**
- Three workflow stages:
  - Todo
  - In Progress
  - Done
- **Drag & Drop** tasks between columns
- Edit task title and description inline
- Delete tasks
- **Persistent storage** using MongoDB
- **Light / Dark mode toggle**
- Clean, responsive, modern UI
- Fully **deployed** frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript
- HTML5 Drag & Drop API
- Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## 🧠 Architecture Overview

```

React (Frontend)
↓ HTTP (Fetch API)
Express API (Backend)
↓
MongoDB Atlas (Cloud Database)

```

- The frontend handles UI rendering and user interactions
- The backend exposes REST APIs for task CRUD operations
- MongoDB Atlas ensures persistent cloud storage
- Frontend and backend are deployed independently

---

## 🌍 Live Demo

- **Frontend:** https://<your-vercel-url>.vercel.app  
- **Backend API:** https://kanban-task-manager-backend-719o.onrender.com/api/tasks  

---

## 📂 Project Structure

```

kanban-task-manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
├── src/
│   ├── components/
│   │   ├── Column.jsx
│   │   └── TaskCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
└── package.json

````

---

## ⚙️ Running Locally

### Prerequisites
- Node.js (v18+)
- MongoDB (local) OR MongoDB Atlas
- npm

---

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Manit-Suthar/kanban-task-manager.git
cd kanban-task-manager
````

---

### 2️⃣ Start Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

### 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/kanban_db
```

---

## 💡 Key Technical Decisions

* **Drag & Drop** implemented using native HTML5 Drag & Drop API for simplicity and performance.
* **Dark mode** implemented by toggling a CSS class on the `document.body` to ensure full-viewport background coverage.
* **Deployment separation**: frontend and backend are deployed independently for scalability and cleaner architecture.
* Environment variables are used to separate development and production configurations.

---

## 🎥 Demo Video

A short 2–3 minute demo video demonstrates:

* Creating and editing tasks
* Drag & drop between columns
* Light / dark mode toggle
* Data persistence after refresh

*(Demo video link provided separately in submission.)*

---

## 📈 Evaluation Criteria Coverage

* ✅ Correctness & completeness
* ✅ Full-stack implementation
* ✅ Persistent backend storage
* ✅ Drag & drop interaction
* ✅ Clean and readable code
* ✅ Cloud deployment (bonus)
* ✅ Effort beyond bare minimum

---

## 📌 Future Improvements

* User authentication (JWT)
* Task filters and search
* Role-based access
* CI/CD pipeline

---

## 👤 Author

**Manit Suthar**
Full-Stack Developer (Student Project)

```

---

## ✅ WHAT TO DO NEXT (IMPORTANT)

1. Paste this into `README.md`
2. Replace:
```

https://<your-vercel-url>.vercel.app

````
with your **actual Vercel URL**
3. Commit & push:
```bash
git add README.md
git commit -m "Update README with deployment details"
git push origin main
````

---

