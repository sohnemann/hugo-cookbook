var gulp = require('gulp');

var lunr = require('lunr');
require("lunr-languages/lunr.stemmer.support")(lunr);
require('lunr-languages/lunr.multi')(lunr);
require("lunr-languages/lunr.de")(lunr);

gulp.task('lunr-index', () => {
  const documents = JSON.parse(fs.readFileSync('public/search/index.json'));

  let lunrIndex = lunr(function() {
        this.use(lunr.multiLanguage('en', 'de'));

        this.field("title", {
            boost: 10
        });
        this.field("tags", {
            boost: 5
        });
        this.field("content");
        this.ref("uri");

        documents.forEach(function(doc) {
            this.add(doc);
        }, this);
    });

  fs.writeFileSync('static/js/lunr-index.json', JSON.stringify(lunrIndex));
});
