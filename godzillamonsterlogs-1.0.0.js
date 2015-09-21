/*
	Godzillamonsterlogs: console logs in a funny way. 
	Version 1.0.0
	Matt Carella - 2014
*/

(function() {

	/* 	===========================================================
		LOGZILLA BASIC SETTINGS : customize and have fun!
	===============================================================- */

	var settings = {

		prefix: 'LOGZILLA ~ ',
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

	var logzilla_init = function() {

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

	var logzilla = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.normal + '; color: ' + settings.colors.normal + '; font-size: ' + settings.fontSize.normal;
		console.info("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Warning
	------------------------------------------ */

	var logzilla_warn = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.warn + '; color: ' + settings.colors.warn + '; font-size: ' + settings.fontSize.warn;
		console.warn("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Error
	------------------------------------------ */

	var logzilla_error = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.error + '; color: ' + settings.colors.error + '; font-size: ' + settings.fontSize.error;
		console.error("%c" + message, style ,value);
	}

	/* ------------------------------------------
	/* 	Success
	------------------------------------------ */

	var logzilla_success = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.success + '; color: ' + settings.colors.success + '; font-size: ' + settings.fontSize.error;
		console.log("%c" + message, style, value);
	}
		
	/* ------------------------------------------
	/* 	Debug
	------------------------------------------ */

	var logzilla_debug = function(message,value) {
		var message = settings.prefix + message;
		var style = 'background-color: '+ settings.bgColors.debug + '; color: ' + settings.colors.debug + '; font-size: ' + settings.fontSize.debug;
		console.log("%c" + message, style, value);
	}

	/* ------------------------------------------
	/* 	Flush
	------------------------------------------ */

	var logzilla_flush = function() {
		console.clear();
	}

	/* ------------------------------------------
	/* 	Function profiler
	------------------------------------------ */

	var logzilla_profiler = function(message,myFunction) {
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

	var logzilla_pollution = function() {

		var filter = function(afterPollution,beforePollution) { 
			return afterPollution.filter(function(i) {
				return !(beforePollution.indexOf(i) > -1);
			});
		}
            
        outerspace.afterPollution = Object.getOwnPropertyNames(window);
		outerspace.libObjects = filter(outerspace.afterPollution, outerspace.beforePollution);	

		logzilla('BEFORE POLLUTION: '+outerspace.beforePollution.length+' objects.');
		logzilla('AFTER POLLUTION: '+outerspace.afterPollution.length+' objects.');
		logzilla('OBJECTS IN THE OUTER SPACE ('+outerspace.libObjects.length+'): ',outerspace.libObjects);

	}

	/* ------------------------------------------
	/* 	Check styles
	------------------------------------------ */

	var logzilla_checkStyles = function() {
		this.logzilla('this a regular console log');
		this.logzilla_warn('this a warning');
		this.logzilla_error('this an error');
		this.logzilla_debug('this a debug message');
		this.logzilla_success('this a success message');
	}

	/* ------------------------------------------
	/* Self invoking init
	------------------------------------------ */

	logzilla_init();

	/* ------------------------------------------
	/* Exposing functions
	------------------------------------------ */

	window.logzilla = logzilla,
	window.logzilla_warn  = logzilla_warn,
	window.logzilla_error  = logzilla_error,
	window.logzilla_success = logzilla_success,
	window.logzilla_debug = logzilla_debug,
	window.logzilla_flush = logzilla_flush,
	window.logzilla_profiler = logzilla_profiler,
	window.logzilla_pollution  = logzilla_pollution,
	window.logzilla_checkStyles = logzilla_checkStyles

})();
