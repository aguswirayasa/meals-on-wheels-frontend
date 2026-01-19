

***

# 🍱 Meals on Wheels (MerryMeal)

**A Full-Stack Charity Food Delivery Platform**

### 🔗 Repositories
*   **Frontend:** [https://github.com/aguswirayasa/meals-on-wheels-frontend](https://github.com/aguswirayasa/meals-on-wheels-frontend)
*   **Backend:** [https://github.com/aguswirayasa/meals-on-wheels-backend](https://github.com/aguswirayasa/meals-on-wheels-backend)

---

## 📖 Project Overview

**Meals on Wheels** is a web-based application designed to bridge the gap between charitable organizations, food partners, volunteers, and members (beneficiaries). The platform's primary goal is to ensure that qualified adults who cannot cook for themselves receive hot, nutritious meals delivered to their doorsteps.

The system automates the workflow of meal planning, ordering, preparation, and delivery, while also managing donations and volunteer resources.

---

## 🚀 Key Features by Role

The application features a secure **Role-Based Access Control (RBAC)** system with the following distinct user roles:

### 1. 👤 Member (Beneficiary)
*   **Registration:** Sign up with proof of eligibility (age/disability/financial status).
*   **Meal Ordering:** Browse the daily menu provided by partners and request meals.
*   **Order History:** View past orders and current delivery status.
*   **Profile Management:** Update dietary restrictions and address details.

### 2. 🏪 Partner (Kitchen/Restaurant)
*   **Menu Management:** Create, update, and delete meal options available for members.
*   **Order Processing:** Receive incoming meal requests from members.
*   **Food Safety:** ensure meals meet nutritional and safety standards.

### 3. 🚚 Volunteer (Driver/Rider)
*   **Delivery Management:** View assigned meal deliveries.
*   **Status Updates:** Update the status of a delivery (e.g., "Picked Up", "Delivered") in real-time.
*   **Route Information:** Access member address details for delivery.

### 4. 🛠️ Administrator
*   **User Management:** Approve or reject new Member and Partner registrations.
*   **Oversight:** Monitor all orders, deliveries, and donations.
*   **Reporting:** Generate reports on donations and meal distributions.

### 5. 💰 Donor (Public)
*   **Donations:** Securely donate funds to support the organization (integrated with payment gateway sandbox).

---

## 💻 Technologies Used

This project utilizes a decoupled architecture with a React frontend and a Java Spring Boot backend.

### Frontend
*   **Framework:** React.js
*   **State Management:** React Hooks / Context API
*   **Routing:** React Router DOM
*   **HTTP Client:** Axios
*   **Styling:** CSS3 / Bootstrap (or Tailwind/MUI based on your specific implementation)

### Backend
*   **Framework:** Java Spring Boot
*   **Security:** Spring Security with JWT (JSON Web Tokens) for authentication and authorization.
*   **Database:** MySQL
*   **ORM:** Hibernate / Spring Data JPA
*   **API:** RESTful API architecture

### Tools
*   **Version Control:** Git & GitHub
*   **API Testing:** Postman
*   **IDE:** IntelliJ IDEA / VS Code

---

## 📸 Screen Captures

### 1. Registration
<img src="https://github.com/aguswirayasa/meals-on-wheels-frontend/blob/master/mow-screen-capture/register.png?raw=true" alt="Registration Page" width="800">

### 2. Login
<img src="https://github.com/aguswirayasa/meals-on-wheels-frontend/blob/master/mow-screen-capture/login.png?raw=true" alt="Login Page" width="800">

### 3. User Profile
<img src="https://github.com/aguswirayasa/meals-on-wheels-frontend/blob/master/mow-screen-capture/profile.png?raw=true" alt="Profile Page" width="800">

### 4. Partnership Dashboard
<img src="https://github.com/aguswirayasa/meals-on-wheels-frontend/blob/master/mow-screen-capture/parthership.png?raw=true" alt="Partnership Page" width="800">

---
