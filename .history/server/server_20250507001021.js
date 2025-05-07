const express = require("express")
const cors = require('cors');
const authRoutes = require('../routes/')
const app = express()
const PORT = 5000


app.use(express.json())
app.use(cors());



app.use('/auth', authRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});