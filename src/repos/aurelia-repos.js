import breeze from 'breeze';
import {createEntityManager} from '../github';

export class AureliaRepos {
  constructor() {
    var entityManager = createEntityManager(),
        query = breeze.EntityQuery.from('orgs/aurelia/repos').toType('Repository');

    this.repos = [];

    this.ready = entityManager.executeQuery(query)
      .then(queryResult => {
        this.repos = queryResult.results;
      });
  }
}
