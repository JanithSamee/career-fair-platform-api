const admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://eespire-2b2e2-default-rtdb.firebaseio.com",
});
const db = admin.firestore();

module.exports = { admin, db };
