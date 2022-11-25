


const scriptsInEvents = {

	async EventSheet1_Event43(runtime, localVars)
	{
		var lines = document.getElementsByClassName("Line");
		var currentLine = lines[lines.length-1];
		var pair = runtime.layout.getLayer(0).cssPxToLayer(0,currentLine.scrollHeight)
		localVars.TextHeight = pair[1];
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

