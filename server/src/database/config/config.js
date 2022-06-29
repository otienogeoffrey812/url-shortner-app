require('dotenv').config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  APP_ID,
} = process.env;

export default {
    port: PORT,
    host: HOST,
    hostUrl: HOST_URL,
    firebaseConfig: {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      appId: APP_ID,
    },
  };