sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPedidoPasto: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Cliente": "",
				"Cantidad": 0,
				"PrecioTotal": 0,
				"MetodoPago": "",
				"MetodoEntrega": "",
				"___FK_5cdf82d3625f4cf41a1eb908_00008": "",
				"___FK_5b24d88ae6d510cf1a2be531_00002": ""
			};
		},
		getDefaultValuesForPedidoArroz: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Cliente": "",
				"Cantidad": 0,
				"PrecioTotal": 0,
				"MetodoPago": "",
				"MetodoEntrega": "",
				"___FK_83033de29d9f81fe1a1eba16_00001": "",
				"___FK_5b24d88ae6d510cf1a2be531_00004": ""
			};
		}
	};
});
