const express = require('express')
const app = express()
const port = 3000

const axios = require('axios')
const path = require('path')

app.get('/ip', async (req, res) => {
    const options = {
        headers: {'User-Agent': 'curl/7.81.0'}
    };
    var ifconfigRes = await axios.get('https://ifconfig.co/', options);
    res.send(ifconfigRes.data);
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
