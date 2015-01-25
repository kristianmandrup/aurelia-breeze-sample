System.register(["./breeze-shim", "./github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, GitHubRepos;
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
          _this.repos = queryResult.results;
        });
      };

      _export("GitHubRepos", GitHubRepos);
    }
  };
});