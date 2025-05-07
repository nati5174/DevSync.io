import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);
const serviceAccount = require(import.meta.env.);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;
