'use strict';

angular.module('dropfileWizardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wizard.dropfile3', {
        url: '/dropfile3',
        templateUrl: 'app/subviews/dropfile3/dropfile3.html',
        controller: 'Dropfile3Ctrl'
      });
  });
