'use strict';

blockedRoute.$inject = ['app', 'models/blocked'];
export default function blockedRoute(app, Blocked) {

  app.get('/blocked', (req, res) => {
    Blocked.findAll().then(data => res.send(data));
  });

}
