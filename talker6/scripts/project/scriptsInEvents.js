


const scriptsInEvents = {

	async EventSheet1_Event58(runtime, localVars)
	{
		var line = runtime.objects.LineDiv.getPickedInstances()[0].getElement();
		localVars.TextHeight = runtime.layout.getLayer(0).cssPxToLayer(0,line.offsetHeight)[1]
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

