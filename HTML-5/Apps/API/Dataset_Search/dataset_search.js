function submitter()
{
	var letter = document.getElementById("dataset_name").value;
	var URL = "http://isenseproject.org/api/v1/projects/?search="+letter+"&sort=updated_at&order=DESC";

	var response = $.ajax({ type: "GET",
							url: URL,
							async: false,
							dataType: "JSON"
							}).responseText;

	// This should be cleaned up at some point.
/*
	var response = $.get(
		'http://isenseproject.org/api/v1/projects/',
		letter,
		function(data)
		{
			//$('#rev').html(data);
		},
		JSON
	);

	var obj = response['responseText'];

	rev.innerHTML = response['responseText'];
	console.log(response);
*/

	// Now that we have the response text from the server, we can show the user
	// a name of a project that matches what they typed. (Hopefully)
	var arg = JSON.parse(response);
	if(arg[0] != undefined)
	{
		var object = arg[0].name;
		rev.innerHTML = "The closest project I have to that name is: <br/>"+ object;
		console.log(arg[0]);
	}
	else{
		rev.innerHMML = "Sorry, couldn't find anything. :(";
	}

	// DEBUG
	//rev.innerHTML = response;
	//console.log(response);

}
