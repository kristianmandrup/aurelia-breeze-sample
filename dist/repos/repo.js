System.register(["./aurelia-repos"], function (_export) {
  "use strict";

  var AureliaRepos, _prototypeProperties, Repository;
  return {
    setters: [function (_aureliaRepos) {
      AureliaRepos = _aureliaRepos.AureliaRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Repository = (function () {
        function Repository(aureliaRepos) {
          this.aureliaRepos = aureliaRepos;
          this.repo = null;
        }

        _prototypeProperties(Repository, {
          inject: {
            value: function inject() {
              return [AureliaRepos];
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
                this.repo = this.aureliaRepos.repos.find(function (r) {
                  return r.name === routeInfo.id;
                });
              } else {
                this.repo = this.aureliaRepos.repos[0];
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