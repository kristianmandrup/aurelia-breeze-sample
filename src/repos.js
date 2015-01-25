import {Router} from 'aurelia-router';
import {GitHubRepos} from './github-repos';

export class Repositories {
  static inject() { return [Router, GitHubRepos]; }

	constructor(router, github) {
    this.router = router;

    router.configure(config => {
      config.map([
        { route: ['', ':id'], moduleId: 'repo' },
      ]);
    });

    this.github = github;
	}

  activate() {
    return this.github.ready;
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}