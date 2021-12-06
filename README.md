# Uber-Eats-Backend with NestJS

## 🖥 Preview

| Feature |                                                                                                                                                                                                                                                                                        Views                                                                                                                                                                                                                                                                                         |
| :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Page   | <img widtH="300" height="300" src="https://user-images.githubusercontent.com/78011042/143002726-f92677ec-a00e-4ef3-b886-f85fbf2964f6.png"/> <img widtH="300" height="300" src="https://user-images.githubusercontent.com/78011042/143003085-9aee7b6d-b61e-4c3f-aeaf-6f3d137be887.png"/> <br> <img widtH="300" height="300" src="https://user-images.githubusercontent.com/78011042/143004603-6b2cfad5-c483-4cb0-a2c3-751cbb80e17a.png"/> <img widtH="300" height="300" src="https://user-images.githubusercontent.com/78011042/143007174-070e78cd-a9cf-4dc4-8623-b9b010237690.png"/> |

## 🛠 Stack

### Frontend

<img height="30" src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=React&logoColor=#61DAFB"/> <img height="30" src="https://img.shields.io/badge/Typescript-black?style=for-the-badge&logo=Typescript&logoColor=3178C6"/>
<img height="30" src="https://img.shields.io/badge/TailwindCSS-black?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4"/>
<img height="30" src="https://img.shields.io/badge/Netlify-black?style=for-the-badge&logo=Netlify&logoColor=00C7B7"/>

### Backend

<img height="30" src="https://img.shields.io/badge/Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white"/> <img height="30" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white"/>
<img height="30" src="https://img.shields.io/badge/GraphQL-E434AA?style=for-the-badge&logo=GraphQL&logoColor=white"/>
<img height="30" src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=for-the-badge&logo=ApolloGraphQL&logoColor=white"/>
<img height="30" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
<img height="30" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white"/>

### Testing

<img height="30" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white"/> 
<img height="30" src="https://img.shields.io/badge/Testing Library-E33332?style=for-the-badge&logo=Testing Library&logoColor=white"/>

## 📦 Packages

- [x] React
- [x] Typescript
- [x] Apollo
- [x] TailwindCSS
- [x] NodeJS
- [x] NestJS
- [x] GraphQL
- [x] PostgreSQL
- [x] TypeORM
- [x] Jest
- [x] Cypress
- [x] React Testing Library
- [x] Mailgun
- [x] Victory

## 📖 NestJS Concepts

- [x] Module
- [x] Guard
- [x] Middleware
- [x] Decorator

## ⚙ Features

- [x] Online Payment
- [x] Google Map
- [x] Unit Testing
- [x] End to End Testing
- [x] Data Visualization
- [x] JWT Authentication

### 🙎‍♂️ User

- [x] User Authentication
- [x] Email Verification
- [x] Photo Upload
- [x] User, Restaurant Owner, Delivery Man Profile

### 🍕 Restaurant

- [x] Restaurant CRUD
- [x] Dish CRUD
- [x] Realtime Order Notification
- [x] Sales Dashboard (Data Visualization)
- [x] Premium Feature (Online Payment)

## 📰 Data Model & CRUD

### User Model:

- id
- createdAt
- updatedAt
- email
- password
- role(client|owner|delivery)

### User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email

### Restaurant Model:

- name
- category
- address
- coverImage

### Restaurant CRUD:

- See Categories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)
- See Restaurant
- Edit Restaurant
- Delete Restaurant
- Search Restaurant

### Dish CRUD:

- Create Dish
- Edit Dish
- Delete Dish

### Orders CRUD:

- Orders Subscription:
  - Pending Orders
    - listen: newOrder,
    - trigger: createOrder(new Order)
  - Pending Pickup Order
    - listen: orderUpdate
    - trigger: editOrder(orderUpdate)
  - Order Status
    - listen: orderUpdate
    - trigger: editOrder(orderUpdate)

### Payments (CRON)

## 🚀 Deployment

- [x] Frontend_v1: [Netlify](https://focused-shirley-1ba214.netlify.app/)
- [x] Frontend_v2: [Netlify](https://optimistic-mestorf-dbd1fd.netlify.app/)
- [x] Backend: [Heroku](https://nuber-eats-backend-2021.herokuapp.com/graphql)
