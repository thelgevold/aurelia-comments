System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, bindable, HttpClient, AddComment;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      AddComment = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AddComment, [{
          key: 'parent',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AddComment(http) {
          _classCallCheck(this, _AddComment);

          _defineDecoratedPropertyDescriptor(this, 'parent', _instanceInitializers);

          this.author = '';
          this.commentText = '';
          this.saved = false;
          this.error = false;
          this.errorMessage = '';

          http.configure(function (x) {
            x.withBaseUrl('/');
            x.withHeader('Content-Type', 'application/json');
          });

          this.http = http;
        }

        _createDecoratedClass(AddComment, [{
          key: 'save',
          value: function save() {
            var _this = this;

            var parentId = null;

            if (!this.author || !this.commentText) {
              this.errorMessage = 'All fields are required';
              this.error = true;
              return;
            }

            if (this.parent) {
              parentId = this.parent.id;
            }

            this.error = false;

            this.http.post('comment', { parentId: parentId, articleId: articleId, author: this.author, text: this.commentText }).then(function () {
              return _this.saved = true;
            })['catch'](function () {
              _this.error = true;
              _this.errorMessage = 'I am sorry, but there was an error saving your comment';
            });
          }
        }], null, _instanceInitializers);

        var _AddComment = AddComment;
        AddComment = inject(HttpClient)(AddComment) || AddComment;
        return AddComment;
      })();

      _export('AddComment', AddComment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzL2FkZC1jb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FJYSxVQUFVOzs7Ozs7Ozs7O2lDQUpmLE1BQU07bUNBQUMsUUFBUTs7c0NBQ2YsVUFBVTs7O0FBR0wsZ0JBQVU7Ozs7OEJBQVYsVUFBVTs7dUJBRXBCLFFBQVE7O21CQUFVLElBQUk7Ozs7O0FBUVosaUJBVkEsVUFBVSxDQVVULElBQUksRUFBQzs7Ozs7ZUFOakIsTUFBTSxHQUFHLEVBQUU7ZUFDWCxXQUFXLEdBQUcsRUFBRTtlQUNoQixLQUFLLEdBQUcsS0FBSztlQUNiLEtBQUssR0FBRyxLQUFLO2VBQ2IsWUFBWSxHQUFHLEVBQUU7O0FBSWYsY0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNoQixhQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLGFBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDcEQsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs4QkFsQlUsVUFBVTs7aUJBb0JqQixnQkFBRTs7O0FBQ0osZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQzs7QUFFcEIsZ0JBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQztBQUNuQyxrQkFBSSxDQUFDLFlBQVksR0FBRyx5QkFBeUIsQ0FBQztBQUM5QyxrQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIscUJBQU87YUFDUjs7QUFFRCxnQkFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO0FBQ2Isc0JBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUMzQjs7QUFFRCxnQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRW5CLGdCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUNoRyxJQUFJLENBQUM7cUJBQU0sTUFBSyxLQUFLLEdBQUcsSUFBSTthQUFBLENBQUMsU0FDeEIsQ0FBQyxZQUFNO0FBQ0Msb0JBQUssS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixvQkFBSyxZQUFZLEdBQUcsd0RBQXdELENBQUM7YUFDMUYsQ0FBQyxDQUFDO1dBQ2Q7OzswQkF6Q1UsVUFBVTtBQUFWLGtCQUFVLEdBRHRCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiY29tbWVudHMvYWRkLWNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCxiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIEFkZENvbW1lbnR7XG5cbiAgQGJpbmRhYmxlIHBhcmVudCA9IG51bGw7XG5cbiAgYXV0aG9yID0gJyc7XG4gIGNvbW1lbnRUZXh0ID0gJyc7XG4gIHNhdmVkID0gZmFsc2U7XG4gIGVycm9yID0gZmFsc2U7XG4gIGVycm9yTWVzc2FnZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xuXG4gICAgaHR0cC5jb25maWd1cmUoeCA9PiB7XG4gICAgICAgIHgud2l0aEJhc2VVcmwoJy8nKTtcbiAgICAgICAgeC53aXRoSGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIHNhdmUoKXtcbiAgICB2YXIgcGFyZW50SWQgPSBudWxsO1xuXG4gICAgaWYoIXRoaXMuYXV0aG9yIHx8ICF0aGlzLmNvbW1lbnRUZXh0KXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJztcbiAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHRoaXMucGFyZW50KXtcbiAgICAgIHBhcmVudElkID0gdGhpcy5wYXJlbnQuaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuXG4gICAgdGhpcy5odHRwLnBvc3QoJ2NvbW1lbnQnLCB7cGFyZW50SWQ6cGFyZW50SWQsYXJ0aWNsZUlkOmFydGljbGVJZCxhdXRob3I6dGhpcy5hdXRob3IsdGV4dDp0aGlzLmNvbW1lbnRUZXh0fSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zYXZlZCA9IHRydWUpXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSSBhbSBzb3JyeSwgYnV0IHRoZXJlIHdhcyBhbiBlcnJvciBzYXZpbmcgeW91ciBjb21tZW50JztcbiAgICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9