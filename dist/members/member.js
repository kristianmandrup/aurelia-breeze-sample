System.register(["./aurelia-members"], function (_export) {
  "use strict";

  var AureliaMembers, _prototypeProperties, _classCallCheck, Member;
  return {
    setters: [function (_aureliaMembers) {
      AureliaMembers = _aureliaMembers.AureliaMembers;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Member = _export("Member", (function () {
        function Member(aureliaMembers) {
          _classCallCheck(this, Member);

          this.aureliaMembers = aureliaMembers;
          this.member = null;
        }

        _prototypeProperties(Member, {
          inject: {
            value: function inject() {
              return [AureliaMembers];
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
                this.member = this.aureliaMembers.members.find(function (r) {
                  return r.login === routeInfo.id;
                });
              } else {
                this.member = this.aureliaMembers.members[0];
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Member;
      })());
    }
  };
});