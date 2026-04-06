# BLOG APPLICATION:
 

**User:**
```
user_id (PK)
name
```

**Post:**
```
post_id (PK)
user_id (FK)
title
content
created_at
```

**Comment:**
```
comment_id (PK)
user_id (FK)
post_id (FK)
comment_text
```

## How to explain: 

“A user can write multiple posts. <br>
Each post can have multiple comments. <br>
Comments are linked to both user and post.” <br>

## Q1. Can comments be nested? <br>
ans: **Yes,** by adding **parent_comment_id.**