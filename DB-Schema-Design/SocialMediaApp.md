# SOCIAL MEDIA APP (INSTAGRAM)

**User:**
```
user_id (PK)
username
email
```

**Post:**
```
post_id (PK)
user_id (FK)
content
image_url
created_at
```

**Like:**
```
like_id (PK)
user_id (FK)
post_id (FK)
```

**Comment**:
```
comment_id (PK)
user_id (FK)
post_id (FK)
comment_text
```

**Follow:**

```
follower_id (FK → User)
following_id (FK → User)
created_at
```


## How to explain ? <br>

“User is the main entity. <br>
A user can create posts, like posts, comment on posts, and follow other users. <br>
The Follow table represents a self-referencing many-to-many relationship between users.” <br>

 

## Q1. What is self-referencing relationship? <br>
ans: When a table references itself using foreign keys.

## Q2. Can user follow himself? <br>
ans: No, we can prevent that using constraints.

## Q3. Can user like same post twice? <br>
ans: No, unique(user_id, post_id).