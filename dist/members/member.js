System.register(["./aurelia-members"], function (_export) {
  "use strict";

  var AureliaMembers, _prototypeProperties, Member;
  return {
    setters: [function (_aureliaMembers) {
      AureliaMembers = _aureliaMembers.AureliaMembers;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Member = (function () {
        function Member(aureliaMembers) {
          this.aureliaMembers = aureliaMembers;
          this.member = null;
        }

        _prototypeProperties(Member, {
          inject: {
            value: function inject() {
              return [AureliaMembers];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          submit: {
            value: function submit() {
              alert("you submitted");
            },
            writable: true,
            enumerable: true,
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
            enumerable: true,
            configurable: true
          }
        });

        return Member;
      })();
      _export("Member", Member);
    }
  };
});