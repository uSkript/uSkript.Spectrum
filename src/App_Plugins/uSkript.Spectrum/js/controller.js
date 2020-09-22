function uSkriptSpectrumController($scope,assetsService,$timeout){

	assetsService.load([
		
		"~/App_Plugins/uSkript.Spectrum/vendor/spectrum.js",
		
	]).then(function(){
		
		$timeout(function(){
			
			$('.uskript-spectrum').each(function(){

				let uskriptsp = $scope.model.config;
				
				const flat					= uskriptsp.flat				=== '1' ? true : false;
				const showPalette			= uskriptsp.showPalette			=== '1' ? true : false;
				const showPaletteOnly		= uskriptsp.showPaletteOnly		=== '1' ? true : false;
				const togglePaletteOnly		= uskriptsp.togglePaletteOnly	=== '1' ? true : false;
				const showSelectionPalette	= uskriptsp.showSelectionPalette=== '1' ? true : false;
				const showInput				= uskriptsp.showInput			=== '1' ? true : false;
				const allowEmpty			= uskriptsp.allowEmpty			=== '1' ? true : false;
				const showAlpha				= uskriptsp.showAlpha			=== '1' ? true : false;
				const addDefaultPalette		= uskriptsp.addDefaultPalette	=== '1' ? true : false;
				const defaultPalette		= new Array(
					"#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff",
					"#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f",
					"#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc",
					"#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd",
					"#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0",
					"#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79",
					"#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47",
					"#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"
				);
				const palette				= uskriptsp.palette !== undefined ? uskriptsp.palette.split(',') : null;
				const fullPalette			= addDefaultPalette !== false && palette!==null ? palette.concat(defaultPalette) : addDefaultPalette !== false && palette===null ? defaultPalette : addDefaultPalette === false && palette !== null ? palette : '';

				uskriptsp.showUmbInput === '1' ? $(this).parent().addClass('show-umb-field') : $(this).parent().removeClass('show-umb-field');

				$(this).spectrum({
					
					flat					: flat,
					showPalette				: showPalette,
					showPaletteOnly			: showPaletteOnly,
					togglePaletteOnly		: togglePaletteOnly,
					showSelectionPalette	: showSelectionPalette,
					showInput				: showInput,
					allowEmpty				: allowEmpty,
					showAlpha				: showAlpha,
					preferredFormat			: uskriptsp.preferredFormat,
					showInitial				: true,
					clickoutFiresChange		: true,
					hideAfterPaletteSelect	: true,
				    cancelText				: 'Cancel',
				    chooseText				: 'Choose',
				    togglePaletteMoreText	: 'Color Box',
				    togglePaletteLessText	: 'Close Color Box',
				    containerClassName		: 'uskriptsp-container',
				    replacerClassName		: 'uskriptsp-toggle',
				    appendTo				: '.umb-pane',
				    palette					: fullPalette
				    
				})
				
			})
			
		})
		
	});
	
	assetsService.loadCss("~/App_Plugins/uSkript.Spectrum/vendor/spectrum.css");
	assetsService.loadCss("~/App_Plugins/uSkript.Spectrum/css/app.css");
	
}
angular.module('umbraco').controller('uSkriptSpectrumController',uSkriptSpectrumController);