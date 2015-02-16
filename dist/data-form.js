System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, DataForm;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DataForm = _export("DataForm", (function () {
        function DataForm() {
          _classCallCheck(this, DataForm);

          this.dataProperties = [];
        }

        _prototypeProperties(DataForm, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("entity", "entityChanged");
            },
            writable: true,
            configurable: true
          }
        }, {
          entityChanged: {
            value: function entityChanged() {
              if (this.entity) {
                this.dataProperties = this.entity.entityType.getProperties().filter(function (p) {
                  return p.isDataProperty;
                });
              } else {
                this.dataProperties = [];
              }
            },
            writable: true,
            configurable: true
          }
        });

        return DataForm;
      })());
    }
  };
});