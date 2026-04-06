# BOOKMYSHOW 

**Movie:**
```
movie_id (PK)
title
```

**Theatre:**
```
theatre_id (PK)
city
```

**Show:**
```
show_id (PK)
movie_id (FK)
theatre_id (FK)
time
```

**Seat:**
```
seat_id (PK)
seat_number
```

**Booking:**
```
booking_id (PK)
user_id (FK)
show_id (FK)
status
```

## How to explain ? <br>

“Shows connect movies and theatres. <br>
Bookings are made for a specific show.”
 

## Q1. How prevent double booking?  <br>
- Seat locking using status.