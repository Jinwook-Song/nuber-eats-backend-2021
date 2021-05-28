# Nuber Eats

The Backend of Nuber Eats Clone

## User Model:

- id
- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)

## User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email

## Restaurant Model:

- name
- category
- address
- coverImage

## Restaurant CRUD:

- See Categories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)
- See Restaurant

- Edit Restaurant
- Delete Restaurant

- Search Restaurant

## Dish CRUD

- Create Dish
- Edit Dish
- Delete Dish

## Orders CRUD:

- Orders Subscription:

  - Pending Orders

    - listen: newOrder,
    - trigger: createOrder(new Order)

  - Order Status

    - listen: orderUpdate
    - trigger: editOrder(orderUpdate)

  - Pending Pickup Order

    - listen: orderUpdate
    - trigger: editOrder(orderUpdate)

## Payments (CRON)
