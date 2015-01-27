import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','repos'], moduleId: 'repos/repos', nav: true, title: 'Repositories' },
        { route: 'members', moduleId: 'members/members', nav: true, title: 'Members' },
      ]);
    });
  }
}