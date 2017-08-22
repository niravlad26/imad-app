var express = require('express');
var morgan = require('morgan');
var path = require('path');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'niravl50',
  host: 'db.imad.hasura-app.io',
  database: 'niravl50',
  password: 'db-niravl50-65702',
  port: 5432,
});

var app = express();

var articles = {
                        'article-one': {
                        title: 'Article One : by Nirav Lad',
                        heading: 'Article Pehla',
                        date: '20-08-2017',
                        content:`<p>
                                    This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>`
                        },
                        'article-two': {
                        title: 'Article Two : by Nirav Lad',
                        heading: 'Article Dusra',
                        date: '28-08-2017',
                        content:`<p>
                                    This is the content of my second article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my second article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my second article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>`
                        },
                        'article-three': {
                        title: 'Article Three : by Nirav Lad',
                        heading: 'Article Teesra',
                        date: '28-08-2017',
                        content:`<p>
                                    This is the content of my third article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my third article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>
                                <p>
                                    This is the content of my third article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                                </p>`
                        },
};

function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = 
            `<html>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>
                ${title}
            </title>
            <Body>
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                ${heading}
                </h3>
                <div>
                ${date}   
                </div>
                <div class="container">
                    <div>
                    ${content}    
                    </div>
                </div>
            </Body>
            </html>`;
return htmlTemplate;
}


app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/test-db', function (req, res) {
    db.query('SELECT * FROM testo WHERE id = $1', [id], (err, res) => {
    if (err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
