const protectedRoute = async (req, res) => {

    try{
        const user = req.user
        res.status(200).json({message})
    }




}

module.exports = {protectedRoute}