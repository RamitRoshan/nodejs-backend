# CHAT APPLICATION

**User:**
```
user_id (PK)
name
```

**Chat:**
```
chat_id (PK)
created_at
```

**ChatUser:**
```
chat_id (FK)
user_id (FK)
```

**Message:**
```
message_id (PK)
chat_id (FK)
sender_id (FK)
message_text
created_at
```

## How to explain ? <br>

“Users participate in chats. <br>
Messages belong to a chat and have a sender.” <br>

 

## Q1. Why ChatUser table? <br>
ans: To support group chats.