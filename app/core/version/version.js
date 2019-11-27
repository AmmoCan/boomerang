'use strict';

angular.module('boomerang.version', [
  'boomerang.version.interpolate-filter',
  'boomerang.version.version-directive'
])

.value('version', '0.1');
