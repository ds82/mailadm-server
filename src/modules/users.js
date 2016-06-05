'use strict';

usersRoute.$inject = ['app', 'models/users'];
export default function usersRoute(app, Users) {

  app.get('/users', (req, res) => {
    Users.findAll().then(data => res.send(data));
  });

}
