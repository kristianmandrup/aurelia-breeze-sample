import {AureliaMembers} from './aurelia-members';

export class Member {
  static inject() { return [AureliaMembers]; }

  constructor(aureliaMembers) {
    this.aureliaMembers = aureliaMembers;
    this.member = null;
  }

  submit() {
    alert('you submitted');
  }

  activate(routeInfo) {
    if (routeInfo.id) {
      this.member = this.aureliaMembers.members.find(r => r.login === routeInfo.id);
    } else {
      this.member = this.aureliaMembers.members[0];
    }
  }  
}