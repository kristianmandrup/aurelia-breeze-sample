System.register(["q", "jquery", "breeze.js"], function (_export) {
  "use strict";

  var Q, jQuery, breeze;
  return {
    setters: [function (_q) {
      Q = _q["default"];
    }, function (_jquery) {
      jQuery = _jquery["default"];
    }, function (_breezeJs) {
      breeze = _breezeJs["default"];
    }],
    execute: function () {
      breeze.config.setQ(Q);

      _export("default", breeze);
    }
  };
});