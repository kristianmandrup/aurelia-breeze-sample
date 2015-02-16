System.register(["breeze", "../github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, _classCallCheck, AureliaMembers;
  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }, function (_github) {
      createEntityManager = _github.createEntityManager;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AureliaMembers = _export("AureliaMembers", function AureliaMembers() {
        var _this = this;
        _classCallCheck(this, AureliaMembers);

        var entityManager = createEntityManager(),
            query = breeze.EntityQuery.from("orgs/aurelia/members").toType("Member");

        this.members = [];

        this.ready = entityManager.executeQuery(query).then(function (queryResult) {
          _this.members = queryResult.results;
        });
      });
    }
  };
});