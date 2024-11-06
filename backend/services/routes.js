// importing modules
const Url = require('./database');
const { generateID } = require('./utlity');
const express = require('express');

// creating router
const router = express.Router();

// redirect url
router.get('/:key', (request, response, next) => {
  const key = request.params.key;

  Url
    .findOne({ key: key })
    .then(result => {
      if (result) {
        response.redirect(result.url);
      } else {
        response.status(404).end(`shorten url with ID '${key}' not found!`);
      }
    })
    .catch(error => next(error));

});

// add new url
router.post('/new/', (request, response, next) => {
  const url = request.body.url;
  const key = generateID();

  Url
    .findOne({ url: url })
    .then(result => {
      // if url already exist
      if (result) {
        const redirect = `${request.protocol}://${request.get('host')}/${result.key}`;
        response.json({ url: redirect });

        // if its a new url
      } else {
        // creating new url
        const newUrl = new Url({ url: url, key: key });
        newUrl
          .save()
          .then(result => {
            const redirect = `${request.protocol}://${request.get('host')}/${result.key}`;
            response.json({ url: redirect });
          })
          .catch(error => next(error));
      }
    })
    .catch(error => next(error));

});

// exporting routes
module.exports = router;