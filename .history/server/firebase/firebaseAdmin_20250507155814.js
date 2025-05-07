import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);

const serviceAccount = require('C:\\Users\\netha\\DevSync.io\\devsync-7ff55-firebase-adminsdk-fbsvc-ce89ec3899.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;
