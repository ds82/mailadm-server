'use strict';
const tiny   = require('tiny-di').default();
const config = require('../config/config.json');

const express = require('express');
const Sequelize = require('sequelize');

const MODULES = ['modules/users'];

function start() {
  tiny.setResolver(tiny.getDefaultResolver(require));
  tiny.bind('config').to(config);

  const db = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password, 
    {
      host: config.db.host,
      dialect: config.db.dialect
    }
  );
  tiny.bind('db').to(db)
  tiny.bind('Sequelize').to(Sequelize);

  const app = express();
  tiny.bind('app').to(app);

  app.listen(3000, () => {
    loadModules();
    console.log('started');
  });


  function loadModules() {
    tiny.ns('models').to('./models/');
    MODULES.forEach(module => tiny.get(module));

  }
}


start();

