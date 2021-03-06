var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

function configureEndpoints(app) {
  var api = require('./api');
  app.use(cookieParser()); 
  //Налаштування URL за якими буде відповідати сервер
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/html/index.html'));
  });

  app.get('/api/get-topics-list/', api.getTopicsList);
  app.post('/api/get-room-data/', api.getRoomData);
  app.post('/api/get-questions-by-topic/', api.getQuestionsByTopic);
  app.post('/api/add-topic/', api.addNewTopic);
  app.post('/api/add-room/', api.addRoom);
  app.post('/api/add-question/', api.addNewQuestion);
  
  // app.post('/api/create-user/', api.createUser);

  //Якщо не підійшов жоден url, тоді повертаємо файли з папки frontend
  app.use(express.static(path.join(__dirname, '../frontend/')));
  app.use(express.static(path.join(__dirname, '../frontend/html/')));
}

function startServer(port) {
  //Створюється застосунок
  var app = express();

  //Налаштування виводу в консоль списку запитів до сервера
  app.use(morgan('dev'));

  app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));

  //Розбір POST запитів
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  //Налаштовуємо сторінки
  configureEndpoints(app);

  //Запуск додатка за вказаним портом
  app.listen(port, function () {
    console.log('My Application Running on http://localhost:'+port+'/');
  });
}

exports.startServer = startServer;