import breeze from 'breeze';
import {createEntityManager} from '../github';

export class AureliaRepos {
  constructor() {
    var entityManager = createEntityManager(),
        query = breeze.EntityQuery.from('orgs/aurelia/repos').toType('Repository');

    this.repos = [];
    
    this.ready = entityManager.executeQuery(query)
      .then(queryResult => {
        this.repos = queryResult.results.sort((a, b) =>  b.stargazers_count - a.stargazers_count);
      });
  }
}


function stringComparisonOrdinalIgnoreCase(a, b) {
    if (a === null)
        a = '';
    if (b === null)
        b = '';
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}