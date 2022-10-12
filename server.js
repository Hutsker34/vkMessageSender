const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendMessage } = require('./main');
const app = express();
const port = 3006;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(port);

//setInterval(sendMessage, 1000*20)
cron.schedule('20 4 * * *',function(){
    sendMessage()
});
