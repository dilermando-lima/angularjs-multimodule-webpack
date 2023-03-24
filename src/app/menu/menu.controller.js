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
    $scope.messageService = messageService;
    
    ctrl.title = "ISSO é um MENU";
    ctrl.listMenu = menuService.listMenu();

    ctrl.clickMenuItemOk = function(){
        console.debug("MenuController.clickMenuItemOk() : clicked");
        $scope.messageService.showSuccess("some messate");
        $scope.apply();
    };
    
    return ctrl;
};







