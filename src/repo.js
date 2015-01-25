import {GitHubRepos} from './github-repos';

export class Repository {
  static inject() { return [GitHubRepos]; }

  constructor(github) {
    this.github = github;
    this.repo = null;
  }

  submit() {
    alert('you submitted');
  }

  activate(routeInfo) {
    if (routeInfo.id) {
      this.repo = this.github.repos.find(r => r.name === routeInfo.id);
    } else {
      this.repo = this.github.repos[0];
    }
  }  
}