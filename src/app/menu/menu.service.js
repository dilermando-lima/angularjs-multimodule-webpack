import { MenuModule } from "./menu.module";

MenuModule.factory(MenuService.name,[MenuService]);

export function MenuService(){

    console.debug("MenuService : Init");

    var svc = {};

    svc.listMenu = function(){
        return [
            "showOk",
            "showWarning",
            "showError"
        ]
    };

    return svc;

}