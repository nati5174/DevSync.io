const admin = require('../firebase/firebaseAdmin')

const authenticateFirebaseToken = async (req, res, next) => {

    const authHeader = req.header.authorization;

    if ( !authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error: 'Unauthorized - No token provided'})
    }

    const token = authHeader.split('Bearer ')[1]

    try {

        const decodedToken = await admin.auth(token)


    }


    catch(error){

    }









}