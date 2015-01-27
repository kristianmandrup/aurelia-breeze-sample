System.register(["aurelia-router", "./aurelia-repos"], function (_export) {
  "use strict";

  var Router, AureliaRepos, _prototypeProperties, Repositories;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaRepos) {
      AureliaRepos = _aureliaRepos.AureliaRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Repositories = (function () {
        function Repositories(router, aureliaRepos) {
          this.router = router;

          router.configure(function (config) {
            config.map([{ route: ["", ":id"], moduleId: "repos/repo" }]);
          });

          this.aureliaRepos = aureliaRepos;
        }

        _prototypeProperties(Repositories, {
          inject: {
            value: function inject() {
              return [Router, AureliaRepos];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.aureliaRepos.ready;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Repositories;
      })();
      _export("Repositories", Repositories);
    }
  };
});