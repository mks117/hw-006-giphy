$(function(){
	generateButtons(topics, "btn btn-primary topicButton" , "#buttons");
	console.log("Page Loaded");
});

var topics = ["nope", "sorry", "thanks"];

function generateButtons(topics, newClass, newDiv){
	$(newDiv).empty();
	for (var i = 0; i < topics.length; i++) {
		var btn = $("<button>");
		btn.addClass(newClass);
		btn.attr("data-type", topics[i]);
		btn.text(topics[i]);
		$(newDiv).append(btn);
	}
}

$(document).on("click", ".topicButton", function(){
	var type = $(this).data("type");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=fd2958b66fb44fd48acaebe070ebea07&limit=10";
	$.ajax({url:queryURL, method:"GET"})
		.done(function(response){
			for (var i = 0; i < response.data.length; i++) {
				var topicDiv = $("<div class='search-item'>");
				var rating = response.data[i].rating;
				var pText = $("<p>").text("Rating: "+rating);
				var animated = response.data[i].images.fixed_height.url;
				var still = response.data[i].images.fixed_height_still.url;
				var image = $("<img>");
				image.attr("src", still);
				image.attr("data-still", still)
				image.attr("data-animated", animated);
				image.attr("data-state", "still");
				image.addClass("topicGif");
				topicDiv.append(pText);
				topicDiv.append(image);
				$("#gifs").append(topicDiv);
			}
		})
})

$(document).on("click", ".topicGif", function(){
	var state = $(this).attr("data-state");
	if(state =="still") {
		$(this).attr("src", $(this).data("animated"));
		$(this).attr("data-state", "animated");
	} else {
		console.log("still");
		$(this).attr("src", $(this).data("still"));
		$(this).attr("data-state", "still");
	}
})

$("#add-gif").on("click", function(){
	var newTopic = $("input").eq(0).val();
	topics.push(newTopic);
	generateButtons(topics, "btn btn-primary topicButton" , "#buttons");
	return false;
})