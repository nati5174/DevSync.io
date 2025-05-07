const protectedRoute = async (req, res) => {

    try{
        const user = req.user
        res.status(200).json({message: 'Access granted to protected route', user})
    }

    catch(error){
        res.status(500).json({ error: 'Server error' });
    }




}

module.exports = {protectedRoute}