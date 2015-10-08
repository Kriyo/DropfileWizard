'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard.spazio1', {
        url: '/spazio1',
        templateUrl: 'app/subviews/spazio1/spazio1.html',
        controller: 'Spazio1Ctrl'
      });
  });
