import {AureliaRepos} from './aurelia-repos';

export class Repository {
  static inject() { return [AureliaRepos]; }

  constructor(aureliaRepos) {
    this.aureliaRepos = aureliaRepos;
    this.repo = null;
  }

  submit() {
    alert('you submitted');
  }

  activate(routeInfo) {
    if (routeInfo.id) {
      this.repo = this.aureliaRepos.repos.find(r => r.name === routeInfo.id);
    } else {
      this.repo = this.aureliaRepos.repos[0];
    }
  }  
}