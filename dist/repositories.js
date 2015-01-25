System.register(["aurelia-router", "./github-repositories"], function (_export) {
  "use strict";

  var Router, GitHubRepositories, _prototypeProperties, Repositories, UpperValueConverter;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_githubRepositories) {
      GitHubRepositories = _githubRepositories.GitHubRepositories;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Repositories = (function () {
        function Repositories(router, repo) {
          this.router = router;

          router.configure(function (config) {
            config.map([{ route: "", moduleId: "repository" }]);
          });

          this.repo = repo;
          this.repositories = repo.repositories;
        }

        _prototypeProperties(Repositories, {
          inject: {
            value: function inject() {
              return [Router, GitHubRepositories];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return this.repo.ready;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Repositories;
      })();
      _export("Repositories", Repositories);

      UpperValueConverter = (function () {
        function UpperValueConverter() {}

        _prototypeProperties(UpperValueConverter, null, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return UpperValueConverter;
      })();
      _export("UpperValueConverter", UpperValueConverter);
    }
  };
});