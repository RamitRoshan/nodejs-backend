# TASK MANAGEMENT (TODO / TRELLO)

**User:**
```
user_id (PK)
```

**Task:**
```
task_id (PK)
title
status
user_id (FK)
```


## How to explain ? <br>

“Each user can create multiple tasks.”



## Q1. How assign multiple users? <br>
- Use TaskAssignment table.