System.register(["./breeze-shim", "./github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, GitHubRepos;


  function stringComparisonOrdinalIgnoreCase(a, b) {
    if (a === null) a = "";
    if (b === null) b = "";
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }


  return {
    setters: [function (_breezeShim) {
      breeze = _breezeShim["default"];
    }, function (_github) {
      createEntityManager = _github.createEntityManager;
    }],
    execute: function () {
      GitHubRepos = function GitHubRepos() {
        var _this = this;
        var entityManager = createEntityManager(),
            query = breeze.EntityQuery.from("orgs/aurelia/repos").toType("Repository");

        this.repos = [];

        this.ready = entityManager.executeQuery(query).then(function (queryResult) {
          _this.repos = queryResult.results.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
          });
        });
      };

      _export("GitHubRepos", GitHubRepos);
    }
  };
});