import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Debug: Log the current directory and .env path
const envPath = join(__dirname, '../../.env');
console.log('Current directory:', __dirname);
console.log('Looking for .env at:', envPath);

// Load environment variables with explicit path
const result = dotenv.config({ path: envPath });
console.log('Dotenv config result:', result);

const require = createRequire(import.meta.url);

// Get the service account path from environment variables
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;
console.log('Service Account Path:', serviceAccountPath);

if (!serviceAccountPath) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not set');
}

try {
    const serviceAccount = require(serviceAccountPath);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
} catch (error) {
    console.error('Error initializing Firebase Admin:', error.message);
    throw error;
}

export default admin;
