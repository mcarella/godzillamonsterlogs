/*
	Godzillamonsterlogs: console logs in a funny way. 
	Version 1.0.0
	Matt Carella - 2014
*/

(function() {

	/* 	===========================================================
		GODZILLAMONSTERLOGS BASIC SETTINGS : customize and have fun!
	===============================================================- */

	var settings = {

		prefix: 'GODZILLA ~ ',
		disableConsoleLog: false,
		
		fontSize : {
			normal: '12pt',
			warn: '12pt',
			error: '12pt',
			success: '12pt',
			debug: '12pt'
		},

		colors : {
			normal: 'black',
			warn: 'coral',
			error: 'white',
			success: 'white',
			debug: 'white'
		},

		bgColors : {
			normal: 'white',
			warn: 'yellow',
			error: 'red',
			success: 'green',
			debug: 'gray'
		}
	}

	/* ------------------------------------------
	/* Global pollution infos
	------------------------------------------ */

	var outerspace = {
		beforePollution : [],
		afterPollution: [],
		libObjects : [],
		pollution : []
	}

	/* ------------------------------------------
	/* Init function, self invoked
	------------------------------------------ */

	var godzilla_init = function() {

		// Disable native console log

		if(settings.disableConsoleLog) {
			window.console.log = function() {}
		}

		outerspace.beforePollution = Object.getOwnPropertyNames(window);

		// Do stuff before other scripts starts here:
	}

	/* ------------------------------------------
	/* 	Regular console log
	------------------------------------------ */

	var godzilla = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.normal + '; color: ' + settings.colors.normal + '; font-size: ' + settings.fontSize.normal;
		console.info("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Warning
	------------------------------------------ */

	var godzilla_warn = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.warn + '; color: ' + settings.colors.warn + '; font-size: ' + settings.fontSize.warn;
		console.warn("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Error
	------------------------------------------ */

	var godzilla_error = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.error + '; color: ' + settings.colors.error + '; font-size: ' + settings.fontSize.error;
		console.error("%c" + message, style ,value);
	}

	/* ------------------------------------------
	/* 	Success
	------------------------------------------ */

	var godzilla_success = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.success + '; color: ' + settings.colors.success + '; font-size: ' + settings.fontSize.error;
		console.log("%c" + message, style, value);
	}
		
	/* ------------------------------------------
	/* 	Debug
	------------------------------------------ */

	var godzilla_debug = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.debug + '; color: ' + settings.colors.debug + '; font-size: ' + settings.fontSize.debug;
		console.log("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Flush
	------------------------------------------ */

	var godzilla_flush = function() {
		console.clear();
	}

	/* ------------------------------------------
	/* 	Function profiler
	------------------------------------------ */

	var godzilla_profiler = function(message,myFunction) {
		console.time(settings.prefix + ' ' + message);
		console.profile(settings.prefix + ' ' + message);
		console.timeline(settings.prefix + ' ' + message);
		console.timeStamp(settings.prefix + ' TIMESTAMP ~ ' + message);
		myFunction();
		console.profileEnd(settings.prefix + ' ' + message);
		console.timelineEnd(settings.prefix + ' ' + message);
		console.timeEnd(settings.prefix + ' ' + message);
	}

	/* ------------------------------------------
	/* 	Check for global pollution
	------------------------------------------ */

	var godzilla_pollution = function() {

		var filter = function(afterPollution,beforePollution) { 
			return afterPollution.filter(function(i) {
				return !(beforePollution.indexOf(i) > -1);
			});
		}
            
        outerspace.afterPollution = Object.getOwnPropertyNames(window);
		outerspace.libObjects = filter(outerspace.afterPollution, outerspace.beforePollution);	

		godzilla('BEFORE POLLUTION: '+outerspace.beforePollution.length+' objects.');
		godzilla('AFTER POLLUTION: '+outerspace.afterPollution.length+' objects.');
		godzilla('OBJECTS IN THE OUTER SPACE ('+outerspace.libObjects.length+'): ',outerspace.libObjects);

	}

	/* ------------------------------------------
	/* 	Check styles
	------------------------------------------ */

	var godzilla_checkStyles = function() {
		this.godzilla('this a regular console log');
		this.godzilla_warn('this a warning');
		this.godzilla_error('this an error');
		this.godzilla_debug('this a debug message');
		this.godzilla_success('this a success message');
	}

	/* ------------------------------------------
	/* Self invoking init
	------------------------------------------ */

	godzilla_init();

	/* ------------------------------------------
	/* Exposing functions
	------------------------------------------ */

	window.godzilla = godzilla,
	window.godzilla_warn  = godzilla_warn,
	window.godzilla_error  = godzilla_error,
	window.godzilla_success = godzilla_success,
	window.godzilla_debug = godzilla_debug,
	window.godzilla_flush = godzilla_flush,
	window.godzilla_profiler = godzilla_profiler,
	window.godzilla_pollution  = godzilla_pollution,
	window.godzilla_checkStyles = godzilla_checkStyles

})();
