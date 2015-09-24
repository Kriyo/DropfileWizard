'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard.dropfile2', {
        url: '/dropfile2',
        templateUrl: 'app/subviews/dropfile2/dropfile2.html',
        controller: 'Dropfile2Ctrl'
      });
  });
