import { MessageService } from "../message/message.service";
import { MenuModule } from "./menu.module";
import {MenuService} from "./menu.service";
import menuViewHtml from "./menu.view.html";

MenuModule
    .controller(
        MenuController.name,
        [
            MenuService.name, 
            MessageService.name,
            "$scope",
            MenuController
        ]
    )
    .component("menuComp",{
        template: menuViewHtml,
        controller: MenuController.name,
        controllerAs: "c"
    });

/**
 * @param {MenuService} menuService 
 * @param {MessageService} messageService
 * @returns 
 */
function MenuController(menuService, messageService,$scope){

    console.debug("MenuController : Init");

    var ctrl = {};
    messageService.bindScope($scope);

    ctrl.title = "ISSO é um MENU";
    ctrl.listMenu = menuService.listMenu();

    ctrl.clickMenuItemOk = function(){
        console.debug("MenuController.clickMenuItemOk() : clicked");
        messageService.showOk("Item created successfully");
    };

    ctrl.clickMenuItemError = function(){
        console.debug("MenuController.clickMenuItemOk() : clicked");
        messageService.showError("Item created with error");
    };

    ctrl.clickMenuItemWarning = function(){
        console.debug("MenuController.clickMenuItemOk() : clicked");
        messageService.showWarn("Item created successfully");
    };

    ctrl.clickMenuItemConfirm = function(){
        console.debug("MenuController.clickMenuItemOk() : clicked");
        messageService.showConfirm(
            "do you reallu need d fed fd?",
           // function(){console.debug("Noo")},
            function(){console.debug("Yess")},
        
        );
    };



    
    return ctrl;
};







