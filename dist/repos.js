System.register(["aurelia-router", "./github-repos"], function (_export) {
  "use strict";

  var Router, GitHubRepos, _prototypeProperties, Repositories;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_githubRepos) {
      GitHubRepos = _githubRepos.GitHubRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Repositories = (function () {
        function Repositories(router, github) {
          this.router = router;

          router.configure(function (config) {
            config.map([{ route: ["", ":id"], moduleId: "repo" }]);
          });

          this.github = github;
        }

        _prototypeProperties(Repositories, {
          inject: {
            value: function inject() {
              return [Router, GitHubRepos];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.github.ready;
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