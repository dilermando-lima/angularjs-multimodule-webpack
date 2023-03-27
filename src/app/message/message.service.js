import { MessageModule } from "./message.module";


import messageViewHtml from "./message.view.html";

MessageModule
    .service(MessageService.name,[MessageService])
    .controller(MessageController.name,[MessageService.name,"$scope",MessageController])
    .component("messageComp",{
        template: messageViewHtml,
        controller: MessageController.name,
        controllerAs: "c"
    });


/**
 * @description service in charge to show alerts in html declaring component as `<message><message>`
 * 
 * @example 
 *
 *  import { MenuModule } from "./menu/menu.module";
 *  import { MessageService } from "../message/message.service";
 * 
 *   var appModule = angular.module("AppModule",[MessageModule.name])
 *   appModule.controller("MyController",
 *       [
 *           MessageService.name,
 *           "$scope",
 *           function MyController(messageService,$scope){
 *                   messageService.bindScope($scope);
 *                   return {
 *                       showOk: function(){
 *                           messageService.showOk();
 *                       }
 *                   };
 *           }
 *       ]
 *   );
 * 
 * @returns 
 */
export function MessageService(){
    var svc = {};
    console.debug("MessageService : Init");

    svc.bindScope = function($scope){
        $scope.messageService = svc;
    }

    svc.ok = {
        isOn: false,
        msg: null
    }

    svc.error = {
        isOn: false,
        msg: null
    }

    svc.warn = {
        isOn: false,
        msg: null
    }

    svc.confirm = {
        isOn: false,
        question: null,
        callbackNo: function(){},
        callbackYes: function(){},
        callbackNoAndReset: function(){
            console.debug("MessageService.confirm() : callbackNO has been called");
            svc.confirm.callbackNo();
            svc.confirm.callbackNo = function(){};
            svc.confirm.isOn = false;
            svc.confirm.question = null;
        },
        callbackYesAndReset: function(){
            console.debug("MessageService.confirm() : callbackYES has been called");
            svc.confirm.callbackYes();
            svc.confirm.callbackYes = function(){};
            svc.confirm.isOn = false;
            svc.confirm.question = null;
        }
    }

    svc.showOk = function (message){
        console.debug("MessageService.showSuccess() : message = message");
        svc.ok.isOn = true;
        svc.ok.msg = message;
    };

    svc.showError = function (message){
        console.debug("MessageService.showError() : message = message");
        svc.error.isOn = true;
        svc.error.msg = message;
    };

    svc.showWarn = function (message){
        console.debug("MessageService.showWarn() : message = message");
        svc.warn.isOn = true;
        svc.warn.msg = message;
    };

    svc.showConfirm = function(question,callbackYes,callbackNo){
        svc.confirm.question = question;
        svc.confirm.callbackYes = callbackYes;
        if( callbackNo != null ) svc.confirm.callbackNo = callbackNo;
        svc.confirm.isOn = true;
    }

    svc.closeOk = function(){
        console.debug("MessageService.closeOk() : Called");
        svc.ok.isOn = false;
        svc.ok.msg = null;
    };

    svc.closeError = function(){
        console.debug("MessageService.closeError() : Called");
        svc.error.isOn = false;
        svc.error.msg = null;
    };

    svc.closeWarn = function(){
        console.debug("MessageService.closeWarn() : Called");
        svc.warn.isOn = false;
        svc.warn.msg = null;
    };

    return svc;
};

/**
 * 
 * @param {MessageService} service 
 */
function MessageController(service,$scope){
    console.debug("MessageController : Init");
    service.bindScope($scope);
};