# 🍽️ MealMaate

MealMaate is a full-stack food ordering web application that allows users to browse meals, add them to a cart, and place orders. The app features a modern React frontend powered by Vite, and a RESTful backend built with Express.js.

---

## 📌 SDLC (Software Development Life Cycle)

### 1. Requirement Analysis
- Users can **browse meals**, **add to cart**, and **place orders**.  
- Sellers can **upload new meals** with image, price, and description.  
- Authentication system using **JWT**.  
- Database stores **users, meals, and orders**.  

### 2. Project Planning
- Tech stack: **MERN (MongoDB, Express.js, React, Node.js)**.  
- Database design:  
  - `Users` → name, email, password, role  
  - `Meals` → title, description, price, image URL  
  - `Orders` → userId, mealId, status, payment  
- Timeline divided into **Frontend**, **Backend**, and **Integration** phases.
- 

### 3. Design
# UI/UX
<img width="475" height="775" alt="image" src="https://github.com/user-attachments/assets/61f0ed8c-50ff-4c12-ad43-83a747b938f5" />
# High Level and Low Level Design
<img width="1700" height="2200" alt="Team-05(zillionAL)CLP_01 drawio" src="https://github.com/user-attachments/assets/1843fbf0-e943-4b6b-aa47-efe6a9fec176" />
# Database Design
 <img width="877" height="608" alt="image" src="https://github.com/user-attachments/assets/ca2e6a18-3fb8-4c2e-a986-72d43f228b59" />
 # System Design(It's not completed)
 <img width="724" height="613" alt="image" src="https://github.com/user-attachments/assets/85836cac-552e-4101-b225-4b559dae3e2d" />



 

### 4. Implementation
- Built reusable React components for meals, cart, and orders.  
- Integrated Axios for API communication.  
- Backend routes: **/meals, /orders, /auth**.  
- Middleware for authentication & error handling.  

### 5. Testing
# Manual Testing
<img width="1720" height="452" alt="image" src="https://github.com/user-attachments/assets/9ed415ad-8814-4494-a6ed-39e9f78ea33b" />
# Test Link : https://docs.google.com/spreadsheets/d/13ceN6kER4Hc7ashSo4w1YFQ_J5WLnMXcMBbFBr7BM8k/edit?gid=0#gid=0


### 6. Deployment
- Backend deployed on **Render**.  
- Frontend deployed on **Render**.  
- Environment variables managed with `.env`.  

### 7. Maintenance
- Continuous bug fixing and optimization.  
- Planned features: **payment integration** and **real-time order tracking**.  
- Monitoring logs and database performance.  

---

## 🧱 Tech Stack

### Frontend
- ⚛️ React (with Vite)  
- 🎨 Tailwind CSS  
- 🔁 React Router  
- 📦 Axios  

### Backend
- 🚀 Node.js + Express.js  
- 🗃️ MongoDB (via Mongoose)  
- 🔐 JWT Authentication  
- 🌐 CORS, dotenv  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mealmate.git
cd mealmate
