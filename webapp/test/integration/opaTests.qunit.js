/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/jp/ui5-search-help/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});