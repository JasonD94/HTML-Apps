function submitter() 
{
/*	
	Things to add:
	Timestamps
	Choose table "A", "B" or "C"
	Allow uploading with specific table in the title - ie Table A, Table B, Table C, etc
*/

	var formData = [];

	formData.push(document.boathouse.tp.value);
	formData.push(document.boathouse.ph.value);
	formData.push(document.boathouse.o2.value);
	formData.push(document.boathouse.phos.value);
	
	var letter = document.getElementById("table_val").value;
	console.log(letter);
	var temp = formData[0];
	var ph = formData[1];
	var dox = formData[2];
	var phos = formData[3];

	/*	FOR SOME REASON, PUT VARIABLES BETWEEN []S	*/
	
	// rSENSE
	var upload = {
		'email': 'j@j.j',
		'password': 'j',
		'title': [],
		'data':
	  	{
			'2308': [temp],
			'2309': [ph],
			'2310': [dox],
			'2311': [phos]
	 	}
	}
	
	// Modify the title depending on which number is selected.
	upload.title = "Table " + [letter];
	
	// iSENSE
	var upload2 = {
		'email': 'j@j.j',
		'password': 'j',
		'title': [],
		'data':
	  	{
			'2640': [temp],
			'2641': [ph],
			'2642': [dox],
			'2643': [phos]
	 	}
	}
	
	// Modify this title to be either A, B or C
	upload2.title = "Table " + [letter];
	
	$('#myResults').html(upload.formData);
	
	// Post to RSENSE-DEV
	$.post(
		'http://rsense-dev.cs.uml.edu/api/v1/projects/511/jsonDataUpload', 
		upload
	);
	
	// Post to iSENSEPROJECT
	$.post(
		'http://isenseproject.org/api/v1/projects/556/jsonDataUpload',
		upload2
	);
	
	alert("Thanks for submitting your data!");
	
	/*
		This is what the "data" portion of the post should look like.
	{
		'email': 'j@j.j',
		'password': 'j',
		'title': 'Table B Data',
		'data':
	  		{
				'2642': [5, 5, 5, 5]
	 	 	}
	 }
		This is a correct & working jQuery post
	$.post('http://isenseproject.org/api/v1/projects/556/jsonDataUpload', 
	{
		'email': 'j@j.j',
		'password': 'j',
		'title': 'Table C Data',
		'data':
	  		{
				'2642': [5, 5, 5, 5]
	 	 	}
	});
	*/
}
