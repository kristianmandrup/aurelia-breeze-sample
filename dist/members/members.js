System.register(["aurelia-router", "./aurelia-members"], function (_export) {
  "use strict";

  var Router, AureliaMembers, _prototypeProperties, _classCallCheck, Members;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaMembers) {
      AureliaMembers = _aureliaMembers.AureliaMembers;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Members = _export("Members", (function () {
        function Members(router, aureliaMembers) {
          _classCallCheck(this, Members);

          this.router = router;

          router.configure(function (config) {
            config.map([{ route: ["", ":id"], moduleId: "members/member" }]);
          });

          this.aureliaMembers = aureliaMembers;
        }

        _prototypeProperties(Members, {
          inject: {
            value: function inject() {
              return [Router, AureliaMembers];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.aureliaMembers.ready;
            },
            writable: true,
            configurable: true
          }
        });

        return Members;
      })());
    }
  };
});