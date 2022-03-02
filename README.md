# Getting Started with App

Goalsy is a Full Stack App. The Frontend is built using React, Redux and Redux Toolkit. The Backend is built using Node, Express and MongoDB. I've used jsonwebtoken to generate JWT and bcryptjs to hash password in backend. Only Authenticated user is authorized to Add Goal, Delete Goal, View Goals and Update Goal.

## API Endpoints

### User Authentication

1. Register a new user - POST [http://localhost:5000/api/users](http://localhost:5000/api/users)

| Headers      |                  |
| ------------ | :--------------: |
| Content-Type | application/json |

Body

```json
{
    "name": "Khalil Patiwala",
    "email": "khalil@gmail.com",
    "password": "password"
}
```

2. Login a user - POST [http://localhost:5000/api/users/login](http://localhost:5000/api/users/login)

| Headers      |                  |
| ------------ | :--------------: |
| Content-Type | application/json |

Body

```json
{
    "email": "khalil@gmail.com",
    "password": "password"
}
```

3. Get Logged in user - GET [http://localhost:5000/api/users/me](http://localhost:5000/api/users/me)

| Headers       |                    |
| ------------- | :----------------: |
| Content-Type  |  application/json  |
| Authorization | Bearer <JWT_TOKEN> |

### Goals Routes

1. Get users goals - GET [http://localhost:5000/api/goals](http://localhost:5000/api/goals)

| Headers       |                    |
| ------------- | :----------------: |
| Content-Type  |  application/json  |
| Authorization | Bearer <JWT_TOKEN> |

2. Create a new Goal - POST [http://localhost:5000/api/goals](http://localhost:5000/api/goals)

| Headers       |                    |
| ------------- | :----------------: |
| Content-Type  |  application/json  |
| Authorization | Bearer <JWT_TOKEN> |

Body

```json
{
    "text": "Demo Goal Text"
}
```

2. Update a Goal - PATCH [http://localhost:5000/api/goals/<:id>](http://localhost:5000/api/goals/<:id>)

| Headers       |                    |
| ------------- | :----------------: |
| Content-Type  |  application/json  |
| Authorization | Bearer <JWT_TOKEN> |

Body

```json
{
    "text": "Updated Goal Text"
}
```

2. Delete a Goal - DELETE [http://localhost:5000/api/goals/<:id>](http://localhost:5000/api/goals/<:id>)

| Headers       |                    |
| ------------- | :----------------: |
| Content-Type  |  application/json  |
| Authorization | Bearer <JWT_TOKEN> |

## Usage

Install dependencies

```bash
npm install
cd frontend
npm install
```

Run app:

### `npm start server`

This will start the backend API at [http://localhost:5000/api/<endpoint>](http://localhost:5000/api/<endpoint>).

### `npm start client`

This will start the frontend at [http://localhost:3000](http://localhost:3000).
