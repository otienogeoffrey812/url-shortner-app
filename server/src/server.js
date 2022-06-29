import app from "./app";
require('dotenv').config();

const port = process.env.APP_PORT || 5002;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});