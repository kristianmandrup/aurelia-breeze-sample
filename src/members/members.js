import {Router} from 'aurelia-router';
import {AureliaMembers} from './aurelia-members';

export class Members {
  static inject() { return [Router, AureliaMembers]; }

  constructor(router, aureliaMembers) {
    this.router = router;

    router.configure(config => {
      config.map([
        { route: ['', ':id'], moduleId: 'members/member' },
      ]);
    });

    this.aureliaMembers = aureliaMembers;
  }

  activate() {
    return this.aureliaMembers.ready;
  }
}