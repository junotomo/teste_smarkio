const express = require('express');
const router = express.Router();
const connection = require('../connection');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const wav = require('wav');
const Speaker = require('speaker');
const fs = require('fs');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: '{API_KEY}',
  }),
  url: '{CREDENTIAL_URL}',
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from comentarios',  (error, rows, fields) => {
    if (!error) {
        res.render('index', {data: rows});
    } else {
      console.log('error:', error);
    }
  })
});

/* `POST  comentarios`*/
router.post('/save', (req, res) => {
  let data = {comentario: req.body.comentario};
  let sql = 'INSERT INTO comentarios SET ?';
  let query = connection.query(sql, data, (error, response) =>{
    if (error) {
      console.log('error post: ', error);
      throw error;
    } else {
      res.redirect('/');
    }
  })
})

/*POST audio*/
router.post('/play',(req,res) =>{
  let reader = new wav.Reader();
  reader.on('format', function(format) {
    reader.pipe(new Speaker(format));
  });
  let synthesizeParams = {
    text: req.body.texto,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
  };

  textToSpeech.synthesize(synthesizeParams)
  .then(res => {
      res.result.pipe(reader);
    })
    .catch(err => {
      console.log(err);
    });

})
module.exports = router;
