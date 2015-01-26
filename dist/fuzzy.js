System.register(["vague-time"], function (_export) {
  "use strict";

  var vagueTime, _prototypeProperties, FuzzyValueConverter;
  return {
    setters: [function (_vagueTime) {
      vagueTime = _vagueTime["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      FuzzyValueConverter = (function () {
        function FuzzyValueConverter() {}

        _prototypeProperties(FuzzyValueConverter, null, {
          toView: {
            value: function toView(value) {
              if (value === undefined || value === null || value === "") return value;
              if (typeof value === "string") value = Date.parse(value);
              return vagueTime.get({ to: value });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return FuzzyValueConverter;
      })();
      _export("FuzzyValueConverter", FuzzyValueConverter);
    }
  };
});