const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

app.get('/', (req, res) => {
  axios
    .post(
      'https://id.twitch.tv/oauth2/token?client_id=o7kflhhv6ikrjj2kyen20bdolvgmug&client_secret=1ioao8r9eypfkb4i0x369qhfuhg1s1&grant_type=client_credentials'
    )
    .then((token) => {
      // Fetch access token
      const headers = {
        'client-id': 'o7kflhhv6ikrjj2kyen20bdolvgmug',
        Authorization: `Bearer ${token.data.access_token}`,
      };
      axios
        .get('https://api.twitch.tv/helix/games/top', {
          headers,
        })
        .then((response) => {
          const filteredStreamers = [];

          // Fitler data
          response.data.data.some((e) => {
            // Setting width and height so size is consistent on images
            const startStrRemoval = e.box_art_url.length - 20;
            const endStrRemoval = e.box_art_url.length - 4;
            e.box_art_url = e.box_art_url.replace(
              e.box_art_url.slice(startStrRemoval, endStrRemoval),
              '600x800'
            );
            const checkRepeatedGame = filteredStreamers.every((value) => {
              return value.id != e.id;
            });
            if (checkRepeatedGame) {
              filteredStreamers.push(e);
            }
            return filteredStreamers.length > 9;
          });
          res.send(filteredStreamers);
        })
        .catch((error) => {
          res.send(error.data);
        });
    });
});

app.listen(port);
