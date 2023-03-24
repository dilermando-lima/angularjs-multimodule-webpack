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

export function MessageService(){
    var svc = {};

    svc.success = {
        isOn: false,
        msg: null
    }

    svc.showSuccess = function (message){
        console.log(this);
        console.debug("MessageService.showSuccess() : message = message");
        svc.success.isOn = true;
        svc.success.msg = message;
    };
    svc.closeSuccess = function(){
        svc.success.isOn = false;
        svc.success.success.msg = null;
    };
    return svc;
};

function MessageController(service,$scope){
    console.debug("MessageService : Init");
    $scope.messageService = service;
};