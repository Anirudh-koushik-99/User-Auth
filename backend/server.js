 import express from 'express'
 import dotenv from 'dotenv'
 dotenv.config();
 const port = process.env.PORT || 5000


 const app = express();

 app.get('/', (req,res) => res.send('Server is ready'))

 app.listen(port, () => console.log(`Server started on ${port}`))

 // - **POST /api/users** - REGISTER A USER
 // - **POST /api/users/auth** - AUTHENTIC A USER AND GET TOKEN
 // - **POST /api/users/logout** - LOGOUT A USER AND CLEAR COOKIE
 // - **GET /api/users/profile** - GET USER PROFILE
 // - **PUT /api/users/profile** - UPDATE PROFILE