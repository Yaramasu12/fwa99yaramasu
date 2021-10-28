var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        pow = search_params.get("y")
        if(value === null)
        {
            value=Math.round(Math.random()*900)
        }
        if(pow===null)
        {
            pow=Math.round(Math.random()*10)
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.pow() applied to ' + value + 'and pow value '+pow+' is ' + Math.pow(value,pow))
        res.write('<br/>Math.sign() applied to ' + value + ' is ' + Math.sign(value))
        res.write('<br/>Math.tanh() applied to ' + value + ' is ' + Math.tanh(value))
        res.write('<br/>Math.trunc() applied to ' + value + ' is ' + Math.trunc(value))
        res.end()
    }
});

module.exports = router;