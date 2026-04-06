# E-COMMERCE SYSTEM

**User:**
```
user_id (PK)
name
email
```

**Product:**
```
product_id (PK)
name
price
category_id (FK)
```

**Category:**
```
category_id (PK)
category_name
```

**Order:**
```
order_id (PK)
user_id (FK)
order_date
status
total_amount
```

**OrderItem:**
```
order_item_id (PK)
order_id (FK)
product_id (FK)
quantity
price
```

**Payment:**
```
payment_id (PK)
order_id (FK)
payment_status
payment_mode
```

----
## How to explain ? <br>
“User places an order. <br>
An order can have multiple products, so I use an OrderItem table to resolve the <br> many-to-many relationship between Order and Product.” <br>

- **Say “many-to-many” confidently**.

 

## Q1. Why OrderItem table? <br>
ans: One order has many products, one product appears in many orders.

## Q2. Why store price again in OrderItem? <br>
ans: Product price may change later.