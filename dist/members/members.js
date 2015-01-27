System.register(["aurelia-router", "./aurelia-members"], function (_export) {
  "use strict";

  var Router, AureliaMembers, _prototypeProperties, Members;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaMembers) {
      AureliaMembers = _aureliaMembers.AureliaMembers;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Members = (function () {
        function Members(router, aureliaMembers) {
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
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.aureliaMembers.ready;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Members;
      })();
      _export("Members", Members);
    }
  };
});