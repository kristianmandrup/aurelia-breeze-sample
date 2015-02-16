System.register(["aurelia-router", "breeze/adapters/breeze.ajax.jQuery"], function (_export) {
  "use strict";

  var Router, test, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_breezeAdaptersBreezeAjaxJQuery) {
      test = _breezeAdaptersBreezeAjaxJQuery["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

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
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});