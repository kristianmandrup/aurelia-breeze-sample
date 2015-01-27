System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "repos"], moduleId: "repos/repos", nav: true, title: "Repositories" }, { route: "members", moduleId: "members/members", nav: true, title: "Members" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});