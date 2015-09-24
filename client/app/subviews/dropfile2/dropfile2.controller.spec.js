'use strict';

describe('Controller: Dropfile2Ctrl', function () {

  // load the controller's module
  beforeEach(module('dropfileWizardApp'));

  var Dropfile2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dropfile2Ctrl = $controller('Dropfile2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
