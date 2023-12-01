# Booking API

command to run the docker app

```shell
docker-compose build && docker-compose up -d
```

## 1. Admin Responsibilities:
- Add new grocery items to the system
    ```shell
    curl -X POST -H 'Content-Type: application/json' http://localhost:3000/api/admin/products --data '{
      "name": "Item Name",
      "price": 10.99,
      "quantity": 100
    }'
    ```
- View existing grocery items
    ```shell
    curl -X GET http://localhost:3000/api/admin/products
    ```
- Remove grocery items from the system
    ```shell
    curl -X DELETE http://localhost:3000/api/admin/products/1
    ```
- Update details (e.g., name, price) of existing grocery items
    ```shell
    curl -X PUT -H 'Content-Type: application/json' http://localhost:3000/api/admin/products/3 --data '{
        "name": "New Item Name"
    }'
    ```
- Manage inventory levels of grocery items
    ```shell
    curl -X PATCH -H 'Content-Type: application/json' http://localhost:3000/api/admin/products/3/inventory --data '{
       "quantity": 20
   }'
    ```
## 2. User Responsibilities:
- View the list of available grocery items
    ```shell
    curl -X GET http://localhost:3000/api/user/products
    ```
- Ability to book multiple grocery items in a single order
    ```shell
    curl -X POST -H 'Content-Type: application/json' http://localhost:3000/api/user/order --data '{
      "products": [
        {
          "productId": 1,
          "quantity": 3
        },
        {
          "productId": 2,
          "quantity": 2
        }
      ]
    }'
    ```
