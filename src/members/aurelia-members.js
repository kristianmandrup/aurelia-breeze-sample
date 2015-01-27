import breeze from '../breeze-shim';
import {createEntityManager} from '../github';

export class AureliaMembers {
  constructor() {
    var entityManager = createEntityManager(),
        query = breeze.EntityQuery.from('orgs/aurelia/members').toType('Member');

    this.members = [];
    
    this.ready = entityManager.executeQuery(query)
      .then(queryResult => {
        this.members = queryResult.results;
      });
  }
}
