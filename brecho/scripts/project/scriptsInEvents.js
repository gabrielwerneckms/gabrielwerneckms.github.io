


const scriptsInEvents = {

		async Uploadsheet_Event9(runtime, localVars)
		{
			var imgfile = await runtime.assets.fetchBlob(localVars.ImageURL);
			
			// var xhr = new XMLHttpRequest();
			// xhr.open("POST", localVars.URL, true);
			// xhr.send(JSON.stringify({
			//     image: localVars.ImageURL
			// }));
			
			
			runtime.callFunction("ShowResponse",await Upload(localVars.URL,imgfile))
			
			async function Upload(url,data) 
			{
			
			 try {
			      let formData = new FormData()
				  formData.append("image", data);
			      var Response = await fetch(url, {method: "POST", body: formData});
				  return await Response.text();
			     } 
					
				catch (error) 
				    { console.log(error); }
			}
			
			
		},

		async Uploadsheet_Event19(runtime, localVars)
		{
			console.log(localVars.iftUrlWithQuery);
			
			fetch(localVars.iftUrlWithQuery, {method: "POST", mode: 'no-cors'});
		},

		async Lojasheet_Event3_Act4(runtime, localVars)
		{
			
			runtime.callFunction("GotData",await Get(localVars.URL))
			
			async function Get(url) 
			{
			
			 try {
			      var Response = await fetch(url, {method: "GET", 'Cache-Control': 'no-cache, must-revalidate'});
				  return await Response.text();
			     } 
					
				catch (error) 
				    { console.log(error); }
			}
			
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

