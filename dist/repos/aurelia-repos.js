System.register(["breeze", "../github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, _classCallCheck, AureliaRepos;
  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }, function (_github) {
      createEntityManager = _github.createEntityManager;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AureliaRepos = _export("AureliaRepos", function AureliaRepos() {
        var _this = this;
        _classCallCheck(this, AureliaRepos);

        var entityManager = createEntityManager(),
            query = breeze.EntityQuery.from("orgs/aurelia/repos").toType("Repository");

        this.repos = [];

        this.ready = entityManager.executeQuery(query).then(function (queryResult) {
          _this.repos = queryResult.results;
        });
      });
    }
  };
});