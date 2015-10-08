'use strict';

describe('Controller: Dropfile3Ctrl', function () {

  // load the controller's module
  beforeEach(module('dropfileWizardApp'));

  var Dropfile3Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dropfile3Ctrl = $controller('Dropfile3Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
