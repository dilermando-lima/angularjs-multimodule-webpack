import angular from "angular";
import { MenuModule } from "./menu/menu.module";
import { MessageModule } from "./message/message.module";

export const AppModule = angular.module(
        "AppModule",
        [
            MenuModule.name,
            MessageModule.name
        ]
    ).config(function($locationProvider) {
        configureLogLevel();

        console.debug("AppModule.config : Init");

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
});


function configureLogLevel(){

    var isLogLevelNotNull = typeof process !== "undefined" && process != null && process.env != null && process.env.LOG_LEVEL != null;
    var level = isLogLevelNotNull ? process.env.LOG_LEVEL.toLowerCase() : "info";

    console.log(`set LOG_LEVEL = ${level}`);

    switch (level) {
        case "info":
            console.warn    =  function() {};
            console.debug   =  function() {};
            console.log     =  function() {};
            break;
        case "warn":
            console.debug   = function() {};
            break;
        case "debug":
            console.log     =  function() {};
            console.info    =  function() {};
            break;
        case "log":
            console.debug   = function() {};
            console.info    = function() {};
            break;
        case "all":
            break;
      }

   
}