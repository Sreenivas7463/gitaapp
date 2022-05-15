var express = require('express')
var router = express.Router()
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/gita/:c/:v', async(req, res) => {
  //res.render('gita', { title: 'Gita' });  :c -chapter :v-Verse
  let chapter = req.params.c;
  let verse = req.params.v;
  try {
    const gitaAPI = await axios.get(`https://gita-api.vercel.app/tel/verse/${chapter}/${verse}`)
    res.render('gita', { articles : [gitaAPI.data] , title: 'Gita'})
    console.log(`https://gita-api.vercel.app/tel/verse/${chapter}/${verse}`);
} catch (err) {
    if(err.response) {
        res.render('gita', { articles : null , title: 'Gita'})
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.request) {
        res.render('gita', { articles : null , title: 'Gita'})
        console.log(err.requiest)
    } else {
        res.render('gita', { articles : null , title: 'Gita'})
        console.error('Error', err.message)
    }
} 
  

})

module.exports = router;
