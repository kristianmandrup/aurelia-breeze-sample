System.register(["vague-time"], function (_export) {
  "use strict";

  var vagueTime, _prototypeProperties, FuzzyTimeValueConverter;
  return {
    setters: [function (_vagueTime) {
      vagueTime = _vagueTime["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      FuzzyTimeValueConverter = (function () {
        function FuzzyTimeValueConverter() {}

        _prototypeProperties(FuzzyTimeValueConverter, null, {
          toView: {
            value: function toView(value) {
              return vagueTime.get({ to: value });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return FuzzyTimeValueConverter;
      })();
      _export("FuzzyTimeValueConverter", FuzzyTimeValueConverter);
    }
  };
});