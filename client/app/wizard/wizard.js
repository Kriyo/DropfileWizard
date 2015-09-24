'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard', {
        url: '/wizard',
        templateUrl: 'app/wizard/wizard.html',
        controller: 'WizardCtrl'
      });
  });