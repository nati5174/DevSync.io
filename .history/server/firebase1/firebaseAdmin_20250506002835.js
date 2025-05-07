const admin =  require('firebase-admin')

const serviceAccount = require('C:\Users\netha\DevSync.io\devsync-7ff55-firebase-adminsdk-fbsvc-ce89ec3899.json')// Initialize Firebase Admin SDK

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});