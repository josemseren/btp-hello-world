sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("sap.btp.helloworldui5.controller.View1", {
            onInit: function () {

            },

            onPress: function () {
                //console.error("error");
                MessageBox.alert("Alerta alerta");
            }


        });
    });
