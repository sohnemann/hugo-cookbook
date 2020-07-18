'use strict';

var lunr = require('lunr');
require("lunr-languages/lunr.stemmer.support")(lunr);
require('lunr-languages/lunr.multi')(lunr);
require("lunr-languages/lunr.de")(lunr);

const responseLunr = await fetch('/js/lunr-index.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
    },
    mode: 'cors'
});

let preBuilt = await responseLunr.json();
let lunrIndex = lunr.Index.load(preBuilt);
