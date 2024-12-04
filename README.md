# invoice-management

# **Node.js API with PostgreSQL**

This repository contains a **Node.js API** built using **Express** and **PostgreSQL**, designed for managing areas, cities, clients, periods, lift types, and states. It provides robust CRUD operations for each resource and is well-documented with **Swagger UI**.

---

## **Features**

- **CRUD Operations**: Fully functional endpoints to manage areas, cities, clients, periods, lift types, and states.
- **Database**: PostgreSQL integration with structured relationships and foreign key constraints.
- **Swagger Documentation**: Interactive API documentation available at `/docs`.
- **Error Handling**: Centralized error handling for consistent responses.
- **Soft Deletion**: Resources can be deactivated instead of permanent deletion (`is_active` flag).
- **Environment Configuration**: `.env` for sensitive configurations.

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/shashi-ojha/invoice-management.git
cd invoice-management
