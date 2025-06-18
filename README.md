# 🎓 Student Manager (Fullstack App)

This is a simple fullstack web application using **Django REST Framework** as the backend and **React** as the frontend. It helps you add, view, and delete students with their **Name, Email, and Roll Number**.

---

## 🌐 Features

- 📥 Add new student
- 📄 View list of students
- ❌ Delete student
- 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Styling**: CSS
- **Extras**: corsheaders

---

## 📁 Folder Structure

student-manager/  
├── backend/  
│   ├── backend/  
│   │   ├── settings.py  
│   │   └── urls.py  
│   └── students/  
│       ├── models.py  
│       ├── serializers.py  
│       ├── views.py  
│       ├── urls.py  
│       └── migrations/  
│           └── __init__.py  
│   └── manage.py  
├── student-manager-frontend/  
│   ├── public/  
│   └── src/  
│       ├── App.js  
│       ├── StudentForm.js  
│       ├── StudentList.js  
│       ├── App.css  
│       └── index.js  

---

## 🧪 Installation and Setup

### ✅ Backend Setup (Django)

cd backend  
python -m venv venv  
venv\Scripts\activate   (on Windows)  
OR  
source venv/bin/activate   (on Mac/Linux)  
pip install django djangorestframework corsheaders  
python manage.py makemigrations  
python manage.py migrate  
python manage.py runserver  

Now, backend runs at: **http://localhost:8000/api/students/**

---

### ✅ Frontend Setup (React)

cd student-manager-frontend  
npm install axios  
npm start  

Now, frontend runs at: **http://localhost:3000/**

---

## 🔌 Required Installations

**Backend**:  
pip install django djangorestframework corsheaders  

**Frontend**:  
npm install axios  

---

## 🧹 Delete These Unused Files (Optional)

In `student-manager-frontend/src/`, delete:  
- App.test.js  
- logo.svg  
- reportWebVitals.js  
- setupTests.js  

Also, don’t push `node_modules/` or `venv/` to GitHub. They can be recreated anytime.

---

## 💡 What the App Does

- User sees a form with **Name, Email, Roll Number**
- On submit, student is added and displayed
- Each student can be deleted
- Connected to Django backend via REST API
- Styled neatly with CSS

---


