# MERN Stack E-Commerce Platform 🛍️

A full-stack e-commerce application featuring a comprehensive shopping experience for users and a robust dashboard for administrators. Built with React, Redux Toolkit, Tailwind CSS, Node.js, Express, and MongoDB.

> **Note:** This project was built for educational purposes following the comprehensive guide by [Sangam Mukherjee].

## 🚀 Features

### User Features

- **Authentication:** Secure Sign Up/Login using JSON Web Tokens (JWT).
- **Product Browsing:** Filter, sort, and search functionality for products.
- **Cart & Checkout:** seamless shopping cart management and checkout process.
- **Responsive Design:** Fully mobile-friendly UI using Tailwind CSS.

### Admin Panel

- **Dashboard:** Overview of sales and product stats.
- **Product Management:** Create, Read, Update, and Delete (CRUD) products.
- **Order Management:** View and update order statuses.

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux Toolkit (State Management), Tailwind CSS, Lucide React (Icons).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (with Mongoose).
- **Tools:** Vite, Postman (for API testing).

## ⚙️ Installation & Run Locally

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Dependencies**

    - **Root:**
      ```bash
      npm install
      ```
    - **Client:**
      ```bash
      cd Client
      npm install
      cd ..
      ```
    - **Server:**
      ```bash
      cd Server
      npm install
      cd ..
      ```

3.  **Environment Variables**
    Create a `.env` file in the `Server` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Run the App**
    - Open two terminals.
    - **Terminal 1 (Backend):**
      ```bash
      cd Server
      npm run dev
      ```
    - **Terminal 2 (Frontend):**
      ```bash
      cd Client
      npm run dev
      ```

## 👏 Credits

- Tutorial by [Sangam Mukherjee](https://www.youtube.com/@sangammukherjee)
