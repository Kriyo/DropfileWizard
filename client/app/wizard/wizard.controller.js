'use strict';

angular.module('dropfileWizardApp')
  .controller('WizardCtrl', function ($scope, $location) {

    // Form data stored in this object
    $scope.formData = {
      installAgreement: false,
      licenseAgreement: false,
      installSpazio: false,
      installLocation: '/home/dropfile/installations',
      centralNodeHostIp: 'localhost',
      spazioMFTConfig: '/home/dropfile/installations/spazio',
      httpPortSpHttp: 8001,
      masterPortSpHttp: 9001,
      sslSpHttp: false,
      certPathSpHttp: '/home/dropfile/installations/spazio/http/cert/primeur.pem',
      keyPathSpHttp: '/home/dropfile/installations/spazio/http/cert/primeur.pem',
      fileSpHttp: '/home/dropfile/installations/spazio/http/mime.type',
      dispositionType: 'attachment',
      spazioUserName: 'dropfile',
      spazioPassword: 'dropfile',
      mailSMTPHostName: 'smtp.primeur.com',
      mailSMTPPort: 465,
      mailSmtpPopProtocol: 'SSL',
      mailSSLEnabled: false,
      mailTSLEnabled: false,
      mailSMTPUserName: 'dropfile.dv',
      mailSMTPPassword: '8ehi2xzg',
      mailSMTPFrom: 'dropfile.dv@primeur.com',
      mailSMTPFromPersonal: 'PrimeurDropFile',
      mailServerPop3HostName: 'pop.primeur.com',
      mailServerPop3Port: 995,
      mailServerPop3User: 'dropfile.dv',
      mailServerPop3Password: '8ehi2xzg',
      mailServerPopSSLEnabled: false,
      mailServerPopTSLEnabled: false,
      mailWebAppSecureLinkFormatIP: '127.0.0.1',
      mailWebAppSecureLinkFormatPort: 9443,
      mailWebAppSecureLinkFormatSenderIP: '127.0.0.1',
      mailWebAppSecureLinkFormatSenderPort: 9443,
      mailWebAppPublicLinkFormatSenderIP: '127.0.0.1',
      mailWebAppPublicLinkFormatSenderPort: 9443,
      mailInvitationReplyFormatIP: '127.0.0.1',
      mailInvitationReplyFormatPort: 9443,
      mailUserRequestApproveFormatIP: '127.0.0.1',
      mailUserRequestApproveFormatPort: 9443,
      mailUnauthenticatedRequesetFormatIP: '127.0.0.1',
      mailUnauthenticatedRequesetFormatPort: 9443,
      fileBoxURIIP: 'localhost',
      fileBoxURIPort: 61613,
      fsrWebServiceEndPoint: 'http://localhost:8080/FileboxWEB/FileboxService',
      a3ServerEndPointUrlIp: 'localhost',
      a3ServerEndPointUrlPort: 8080,
      dropfileBrokerAmqUrlIp: 'localhost',
      dropfileBrokenAmqUrlPort: 61616,
      dropfileReportsUsersWhiteList: '/home/dropfile/dropfile/mobile',
      dropfileMobileApkFileName: ''
    };

    $scope.isActive = function(route){
      return route === $location.path();
    };

    // Function to process the form
    // It will be replaced by a post function
    $scope.processForm = function(){
      console.log('Posted: Awesome!');
    };
  });
