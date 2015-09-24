'use strict';

describe('Controller: Dropfile1Ctrl', function () {

  // load the controller's module
  beforeEach(module('dropfileWizardApp'));

  var Dropfile1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dropfile1Ctrl = $controller('Dropfile1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
