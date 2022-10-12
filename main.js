const { token } = require('./config');
const axios = require('axios');
let user_id = '660104973';//которому придет сообщение 
let my_id = '185014513'
let text = 'где ты муза моя ?'

async function sendMessage(){
     await axios.post(`https://api.vk.com/method/messages.send?user_id=${user_id}&random_id=0&peer_id=${my_id}&message=${text}&dont_parse_links=0&disable_mentions=0&intent=default&access_token=${token}&v=5.131`)
    .then((loc)=>{
        console.log(loc.data)
    })
 };

 module.exports={sendMessage}

