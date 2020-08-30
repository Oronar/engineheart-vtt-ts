export const preloadTemplates = async function() {
	const templatePaths = [
		"systems/engineheart/templates/actor/robot-actor-sheet.html"
	];

	return loadTemplates(templatePaths);
}
