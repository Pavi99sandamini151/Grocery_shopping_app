const express = require('express');
const app = express();

app.use(express.json());
app.use('/', (req, res, next) => {
    return res.status(200).json({"msg":"hello from shopping"});
})
app.listen(8003, () => {
    console.log('shopping is listening to port 8003');
});