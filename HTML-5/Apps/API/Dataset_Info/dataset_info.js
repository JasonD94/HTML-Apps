function submitter()
{
	var ID = document.getElementById("dataset_name").value;
	var URL = "http://isenseproject.org/api/v1/projects/"+ID;
	var USER_URL_TEXT = "Click here to view project #" + ID + "!";

<<<<<<< HEAD:HTML-5/Apps/CS_WebAccount/HTML_WebApps/API/dataset_info.js
	// Get dataset info from iSENSE
=======
>>>>>>> b41c603f1d78667302de0fdb745599dcf7c9c4a8:HTML-5/Apps/API/Dataset_Info/dataset_info.js
	var response = $.ajax({ type: "GET",
							url: URL,
							async: false,
							dataType: "JSON"
							}).responseText;
	console.log(response);

<<<<<<< HEAD:HTML-5/Apps/CS_WebAccount/HTML_WebApps/API/dataset_info.js
	// When response is NULL that means we found nothing for the project.
=======
>>>>>>> b41c603f1d78667302de0fdb745599dcf7c9c4a8:HTML-5/Apps/API/Dataset_Info/dataset_info.js
	if(response === undefined)
	{
		rev.innerHTML = "That project ID could not be found!";
	}
	else{

	// Now we should have some information about the project.
	var arg = JSON.parse(response);
	var array = [];
	array[0] = arg['name'];
	array[1] = arg['createdAt'];
	array[2] = arg['ownerName'];
	array[3] = arg['url'];

	rev.innerHTML = "Information about this project: <br/>Name: "+ array[0]
	+ "<br/>Created at: "+ array[1] + "<br/> Owner: "+ array[2]
	+ '<br/>URL: <a href="' + array[3] + '">' + USER_URL_TEXT + '</a>';

	}
}
