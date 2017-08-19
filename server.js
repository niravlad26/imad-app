var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleOne = {
    Title: "Article One : by Nirav Lad",
    Heading: "Article Pehla",
    Date: "20-08-2017",
    Content:`<p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>`
};

function createTemplate(Data){
var Title = data.Title;
var Date = data.Date;
var Heading = data.Heading;
var Content = data.Content;
var htmlTemplate = 
            `<html>
            <title>
                <Heading>
                ${Title}
               
                </Heading>
            </title>
            <Body>
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                ${Heading}
                </h3>
                <div>
                ${Date}   
                </div>
                <div>
                ${Content}    
                </div>
            </Body>
            </html>`;
    return htmlTemplate;
}


app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
