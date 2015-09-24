'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard.initial', {
        url: '/initial',
        templateUrl: 'app/subviews/initial/initial.html',
        controller: 'InitialCtrl'
      });
  });
