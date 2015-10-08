'use strict';

describe('Controller: InitialCtrl', function () {

  // load the controller's module
  beforeEach(module('dropfileWizardApp'));

  var InitialCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InitialCtrl = $controller('InitialCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
