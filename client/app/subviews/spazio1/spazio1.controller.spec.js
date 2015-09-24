'use strict';

describe('Controller: Spazio1Ctrl', function () {

  // load the controller's module
  beforeEach(module('dropfileWizardApp'));

  var Spazio1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Spazio1Ctrl = $controller('Spazio1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
