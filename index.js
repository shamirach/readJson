
$(function (){
	$("#item").autocomplete({
		source: function (request, response) {
			 $.ajax({
				source: "pod_nutrition_us.json",
				dataType: "jsonp",
				success: function (data) {
                    response( data.destinations);
					console.log("success!");
                    var suggestions = [];
                    $.each(data.fields.gln_nm, function (i, val) {
                        console.log("suggestion: " + val.Text);
                        suggestions.push(val.Text);
                    });
                    response(suggestions);
					}
			 });
		}
    });
            
});
/*
$("#item").autocomplete({
    url: "index.json",
    minLength: 2,
    select: function (event, ui) {
        event.preventDefault();
    }
});

 $.getJSON('pod_nutrition_us.json', function(data){
  console.log(data);
 });
 */



/*
$(function () {
    $("#item").autocomplete({
        source: function (request, response) {
            console.log("source");
            $.ajax({
                url: "http://api.bing.net/qson.aspx?Query=" + encodeURIComponent(request.term) + "&JsonType=callback&JsonCallback=?",
                dataType: "jsonp",
                /*data: {
                "Query": request.term,
                "JsonType": "callback",
                "JsonCallback" : "?"
            },*/

/*
                success: function (data) {
                    console.log("success!");
                    var suggestions = [];
                    $.each(data.SearchSuggestion.Section, function (i, val) {
                        console.log("suggestion: " + val.Text);
                        suggestions.push(val.Text);
                    });
                    response(suggestions);

                }
            });
        }
    });
});
*/