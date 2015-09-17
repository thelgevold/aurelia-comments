System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, HttpClient, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      App = (function () {
        function App(http) {
          _classCallCheck(this, _App);

          http.configure(function (config) {
            config.useStandardConfiguration();
            config.withBaseUrl('/comment/');
          });

          this.http = http;
          this.comments = [];
        }

        _createClass(App, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch(articleId).then(function (response) {
              return response.json();
            }).then(function (comments) {
              return _this.comments = comments;
            });
          }
        }]);

        var _App = App;
        App = inject(HttpClient)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBS2EsR0FBRzs7Ozs7Ozs7aUNBTFIsTUFBTTs7dUNBQ04sVUFBVTs7O0FBSUwsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixJQUFJLEVBQUM7OztBQUNmLGNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDdkIsa0JBQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3BDLGtCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1dBQ2pDLENBQUMsQ0FBQzs7QUFFRCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUN0Qjs7cUJBVlksR0FBRzs7aUJBWU4sb0JBQUU7OztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUM1QixJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFFBQVE7cUJBQUksTUFBSyxRQUFRLEdBQUcsUUFBUTthQUFBLENBQUMsQ0FBQztXQUNqRDs7O21CQWhCVSxHQUFHO0FBQUgsV0FBRyxHQUZmLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFTixHQUFHLEtBQUgsR0FBRztlQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5cbmV4cG9ydCBjbGFzcyBBcHB7XG5cbiAgY29uc3RydWN0b3IoaHR0cCl7XG4gICAgaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZy51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKTtcbiAgICBjb25maWcud2l0aEJhc2VVcmwoJy9jb21tZW50LycpO1xuICB9KTtcblxuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xufVxuXG4gIGFjdGl2YXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaChhcnRpY2xlSWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oY29tbWVudHMgPT4gdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzKTtcbiAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==