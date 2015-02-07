System.register(["breeze-client", "../github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, AureliaMembers;
  return {
    setters: [function (_breezeClient) {
      breeze = _breezeClient["default"];
    }, function (_github) {
      createEntityManager = _github.createEntityManager;
    }],
    execute: function () {
      AureliaMembers = function AureliaMembers() {
        var _this = this;
        var entityManager = createEntityManager(),
            query = breeze.EntityQuery.from("orgs/aurelia/members").toType("Member");

        this.members = [];

        this.ready = entityManager.executeQuery(query).then(function (queryResult) {
          _this.members = queryResult.results;
        });
      };

      _export("AureliaMembers", AureliaMembers);
    }
  };
});