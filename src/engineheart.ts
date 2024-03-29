/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { RobotActorSheet } from './module/actor/sheets/RobotActorSheet.js';
import { ComponentItemSheet } from './module/item/sheets/ComponentItemSheet.js';
import { RobotActor } from './module/actor/RobotActor.js';
import { ComponentItem } from './module/item/ComponentItem.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('engineheart | Initializing engineheart');

	await preloadTemplates();

	// Assign custom classes and constants here
	CONFIG.Actor.entityClass = RobotActor;
	CONFIG.Item.entityClass = ComponentItem;
	
	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
	Actors.unregisterSheet('core', ActorSheet);
	Actors.registerSheet('engineheart', RobotActorSheet, { types: ['robot'], makeDefault: true });

	Items.unregisterSheet('core', ItemSheet);
	Items.registerSheet('engineheart', ComponentItemSheet, { types: ["component"], makeDefault: true });
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary
