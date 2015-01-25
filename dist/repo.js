System.register(["./github-repos"], function (_export) {
  "use strict";

  var GitHubRepos, _prototypeProperties, Repository;
  return {
    setters: [function (_githubRepos) {
      GitHubRepos = _githubRepos.GitHubRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Repository = (function () {
        function Repository(github) {
          this.github = github;
          this.repo = null;
        }

        _prototypeProperties(Repository, {
          inject: {
            value: function inject() {
              return [GitHubRepos];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          submit: {
            value: function submit() {
              alert("you submitted");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          activate: {
            value: function activate(routeInfo) {
              if (routeInfo.id) {
                this.repo = this.github.repos.find(function (r) {
                  return r.name === routeInfo.id;
                });
              } else {
                this.repo = this.github.repos[0];
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Repository;
      })();
      _export("Repository", Repository);
    }
  };
});