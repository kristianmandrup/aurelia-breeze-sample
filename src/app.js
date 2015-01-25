import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','repos'], moduleId: 'repos', nav: true, title: 'Repositories' },
        { route: 'users', moduleId: 'users', nav: true, title: 'Users' },
      ]);
    });
  }
}