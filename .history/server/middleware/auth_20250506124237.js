const admin = require('../firebase/firebaseAdmin')

const authenticateFirebaseToken = async (req, res, next) => {

    const authHeader = req.header.authorization;

    if ( !authHeader || authHeader.startsWith('Bearer '))









}