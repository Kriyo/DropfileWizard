'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard.dropfile1', {
        url: '/dropfile1',
        templateUrl: 'app/subviews/dropfile1/dropfile1.html',
        controller: 'Dropfile1Ctrl'
      });
  });
