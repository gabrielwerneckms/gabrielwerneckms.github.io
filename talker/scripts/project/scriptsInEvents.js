


const scriptsInEvents = {

	async EventSheet1_Event42(runtime, localVars)
	{
		var line = runtime.objects.Line.getPickedInstances()[0].getElement();
		localVars.TextHeight = runtime.layout.getLayer(0).cssPxToLayer(0,line.scrollHeight)[1]
		
	},

	async EventSheet1_Event46(runtime, localVars)
	{
		var line = runtime.objects.Line.getPickedInstances()[0].getElement();
		localVars.TextHeight = runtime.layout.getLayer(0).cssPxToLayer(0,line.scrollHeight)[1]
		
	},

	async EventSheet1_Event95(runtime, localVars)
	{
		var lines = document.getElementsByClassName("Line");
		var currentLine = lines[lines.length-1];
		var pair = runtime.layout.getLayer(0).cssPxToLayer(0,currentLine.scrollHeight)
		localVars.TextHeight = pair[1];
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

