


const scriptsInEvents = {

	async WebrtcEvents_Event2(runtime, localVars)
	{
		runtime.globalVars.MyUsername = 
		platform.name + " " + platform.os + ".";
	},

	async WebrtcEvents_Event20_Act2(runtime, localVars)
	{
		localVars.BrowserData = JSON.stringify(platform);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

