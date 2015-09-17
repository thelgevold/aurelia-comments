System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, TreeNode;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      TreeNode = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(TreeNode, [{
          key: 'current',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function TreeNode() {
          _classCallCheck(this, TreeNode);

          _defineDecoratedPropertyDescriptor(this, 'current', _instanceInitializers);

          this.replying = false;
        }

        _createDecoratedClass(TreeNode, [{
          key: 'created',
          value: function created(date) {
            return new Date(date).toDateString();
          }
        }, {
          key: 'reply',
          value: function reply() {
            this.replying = true;
          }
        }], null, _instanceInitializers);

        return TreeNode;
      })();

      _export('TreeNode', TreeNode);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzL3RyZWUtbm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsUUFBUTs7Ozs7Ozs7OzttQ0FGYixRQUFROzs7QUFFSCxjQUFROzs7OzhCQUFSLFFBQVE7O3VCQUVsQixRQUFROzs7OztBQUVFLGlCQUpBLFFBQVEsR0FJTjtnQ0FKRixRQUFROzs7O0FBS2pCLGNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCOzs4QkFOVSxRQUFROztpQkFRWixpQkFBQyxJQUFJLEVBQUM7QUFDWCxtQkFBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztXQUN0Qzs7O2lCQUVJLGlCQUFFO0FBQ0wsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1dBQ3RCOzs7ZUFkVSxRQUFRIiwiZmlsZSI6ImNvbW1lbnRzL3RyZWUtbm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIHtcblxuICBAYmluZGFibGUgY3VycmVudDtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucmVwbHlpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZWQoZGF0ZSl7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgcmVwbHkoKXtcbiAgICB0aGlzLnJlcGx5aW5nID0gdHJ1ZTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=