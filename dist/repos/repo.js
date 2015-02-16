System.register(["./aurelia-repos"], function (_export) {
  "use strict";

  var AureliaRepos, _prototypeProperties, _classCallCheck, Repository;
  return {
    setters: [function (_aureliaRepos) {
      AureliaRepos = _aureliaRepos.AureliaRepos;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Repository = _export("Repository", (function () {
        function Repository(aureliaRepos) {
          _classCallCheck(this, Repository);

          this.aureliaRepos = aureliaRepos;
          this.repo = null;
        }

        _prototypeProperties(Repository, {
          inject: {
            value: function inject() {
              return [AureliaRepos];
            },
            writable: true,
            configurable: true
          }
        }, {
          submit: {
            value: function submit() {
              alert("you submitted");
            },
            writable: true,
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
            configurable: true
          }
        });

        return Repository;
      })());
    }
  };
});