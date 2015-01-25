System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, url, Users;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Users = (function () {
        function Users(http) {
          this.heading = "Flickr";
          this.images = [];
          this.http = http;
        }

        _prototypeProperties(Users, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Users;
      })();
      _export("Users", Users);
    }
  };
});