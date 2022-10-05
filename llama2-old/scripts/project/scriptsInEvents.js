


const scriptsInEvents = {

		async EventSheet1_Event41(runtime, localVars)
		{
			runtime.globalVars.ListofThings = runtime.globalVars.LevelHash.replace(/(\D)/g, ',$&');
			runtime.globalVars.ListofThings = runtime.globalVars.ListofThings.replace(/^,/,'');
			console.log(runtime.globalVars.ListofThings);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

