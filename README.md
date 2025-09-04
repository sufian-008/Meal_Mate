# 🍽️ MealMaate

MealMaate is a full-stack food ordering web application that allows users to browse meals, add them to a cart, and place orders. The app features a modern React frontend powered by Vite, and a RESTful backend built with Express.js.

---

## 🧱 Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 🎨 Tailwind CSS (optional)
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
cd server
npm install


# Run the server
npm run dev           # Uses nodemon (if installed)

3. Set up the frontend
# Start the dev server
npm run dev


📬 API Endpoint
GET    /api/meals          # Get all meals
POST   /api/orders         # Place a new order
GET    /api/orders/:id     # Get order details
POST   /api/auth/register  # Register new user
POST   /api/auth/login     # Login
