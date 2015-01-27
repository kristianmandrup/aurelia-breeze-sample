import {Router} from 'aurelia-router';
import {AureliaRepos} from './aurelia-repos';

export class Repositories {
  static inject() { return [Router, AureliaRepos]; }

	constructor(router, aureliaRepos) {
    this.router = router;

    router.configure(config => {
      config.map([
        { route: ['', ':id'], moduleId: 'repos/repo' },
      ]);
    });

    this.aureliaRepos = aureliaRepos;
	}

  activate() {
    return this.aureliaRepos.ready;
  }
}