System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, DataForm;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      DataForm = (function () {
        function DataForm() {
          this.dataProperties = [];
        }

        _prototypeProperties(DataForm, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("entity", "entityChanged");
            },
            writable: true,
            enumerable: true,
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
            enumerable: true,
            configurable: true
          }
        });

        return DataForm;
      })();
      _export("DataForm", DataForm);
    }
  };
});