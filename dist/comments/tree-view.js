System.register(['./node-model', 'aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var NodeModel, bindable, inject, HttpClient, TreeView;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_nodeModel) {
      NodeModel = _nodeModel.NodeModel;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      TreeView = (function () {
        var _instanceInitializers = {};

        function TreeView() {
          _classCallCheck(this, _TreeView);

          _defineDecoratedPropertyDescriptor(this, 'comments', _instanceInitializers);
        }

        _createDecoratedClass(TreeView, [{
          key: 'comments',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _TreeView = TreeView;
        TreeView = inject(HttpClient)(TreeView) || TreeView;
        return TreeView;
      })();

      _export('TreeView', TreeView);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzL3RyZWUtdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0NBUWEsUUFBUTs7Ozs7Ozs7Ozs2QkFSYixTQUFTOzttQ0FDVCxRQUFRO2lDQUVSLE1BQU07O3VDQUNOLFVBQVU7OztBQUlMLGNBQVE7OztpQkFBUixRQUFROzs7Ozs7OEJBQVIsUUFBUTs7dUJBRWxCLFFBQVE7Ozs7O3dCQUZFLFFBQVE7QUFBUixnQkFBUSxHQUZwQixNQUFNLENBQUMsVUFBVSxDQUFDLENBRU4sUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFRIiwiZmlsZSI6ImNvbW1lbnRzL3RyZWUtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tm9kZU1vZGVsfSBmcm9tICcuL25vZGUtbW9kZWwnO1xuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cbkBpbmplY3QoSHR0cENsaWVudClcblxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3e1xuXG4gIEBiaW5kYWJsZSBjb21tZW50cztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=