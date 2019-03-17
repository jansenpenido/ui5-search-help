sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function (Controller, Filter) {
	"use strict";

	return Controller.extend("com.jp.ui5-search-help.controller.ViewMain", {
		onProductValueHelp: function (oEvent) {
			this.inputId = oEvent.getSource().getId();
			
			// Create value help dialog
			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment(
					"com.jp.ui5-search-help.view.F4ProductDialog",
					this
				);
				this.getView().addDependent(this._valueHelpDialog);
			}
			
			// Open the dialog
			this._valueHelpDialog.open();
		},
		
		onValueHelpSearch : function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter(
				"ProductName",
				sap.ui.model.FilterOperator.Contains, sValue
			);
			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		ValueHelpClose : function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId(this.inputId);
				productInput.setValue(oSelectedItem.getTitle());
			}
			oEvent.getSource().getBinding("items").filter([]);
		}
		
	});
});