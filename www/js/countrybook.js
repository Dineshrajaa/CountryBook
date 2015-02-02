$(document).ready(function(){
	var webserviceFile="http://services.groupkt.com/country/get/all";
	var countryNames=[];
	

			/**Country Methods**/
	function readCountries(){
		//Read the CountryNames from Webservice using AJAX Call			
		$.ajax({
		type:"GET",
		url:webserviceFile,
		dataType:"json",
		success:function(loadedData){
			
			var noCountries=loadedData.RestResponse.result.length;
			for(var i=0;i<noCountries;i++){
				countryNames.push(loadedData.RestResponse.result[i].name);
			} 
			listCountries();
		},
		error:function(){
			alert("Couldn't Read JSON File");
		}
	//End of AJAX Call
});	
	}

	function listCountries(){
		//Lists the CountryNames from Webservice with Pagination
		
		for(var j=0;j<countryNames.length;j++){
			$("#countryList").append("<li id='"+j+"'><a href='#'>"+countryNames[j]+"</a></li>");
		}
		$("#countryList").listview("refresh");	
		$("ul.pagination3").quickPagination({pagerLocation:"both",pageSize:"20"});
		
	}

	function infoShow(){
			//Displays App Info
			alert("CountryBook"+"\n"+"Version-0.0.1"+"\n"+"Author-Dinesh Raja");
		}

		$("#infopgbtn").tap(infoShow);

	readCountries();
	//Loaded all DOM elements
});