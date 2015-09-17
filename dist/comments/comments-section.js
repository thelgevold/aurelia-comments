System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, bindable, HttpClient, CommentsSection;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      CommentsSection = (function () {
        var _instanceInitializers = {};

        function CommentsSection() {
          _classCallCheck(this, _CommentsSection);

          _defineDecoratedPropertyDescriptor(this, 'comments', _instanceInitializers);
        }

        _createDecoratedClass(CommentsSection, [{
          key: 'comments',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _CommentsSection = CommentsSection;
        CommentsSection = inject(HttpClient)(CommentsSection) || CommentsSection;
        return CommentsSection;
      })();

      _export('CommentsSection', CommentsSection);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzL2NvbW1lbnRzLXNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQU1hLGVBQWU7Ozs7Ozs7Ozs7aUNBTnBCLE1BQU07bUNBRU4sUUFBUTs7dUNBRFIsVUFBVTs7O0FBS0wscUJBQWU7OztpQkFBZixlQUFlOzs7Ozs7OEJBQWYsZUFBZTs7dUJBRXpCLFFBQVE7Ozs7OytCQUZFLGVBQWU7QUFBZix1QkFBZSxHQUYzQixNQUFNLENBQUMsVUFBVSxDQUFDLENBRU4sZUFBZSxLQUFmLGVBQWU7ZUFBZixlQUFlIiwiZmlsZSI6ImNvbW1lbnRzL2NvbW1lbnRzLXNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoSHR0cENsaWVudClcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRzU2VjdGlvbntcblxuICBAYmluZGFibGUgY29tbWVudHM7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==