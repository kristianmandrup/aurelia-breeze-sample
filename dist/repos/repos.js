System.register(["aurelia-router", "./aurelia-repos"], function (_export) {
  "use strict";

  var Router, AureliaRepos, _prototypeProperties, _classCallCheck, Repositories;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaRepos) {
      AureliaRepos = _aureliaRepos.AureliaRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Repositories = _export("Repositories", (function () {
        function Repositories(router, aureliaRepos) {
          _classCallCheck(this, Repositories);

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
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.aureliaRepos.ready;
            },
            writable: true,
            configurable: true
          }
        });

        return Repositories;
      })());
    }
  };
});