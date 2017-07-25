//
//	Maxwell SChmelling
//	HW #6 - GIPHY API
//	7/20/2017
//

// GLOBAL VARIABLS
var animals = ["cat", "kangaroo", "octopus", "dog", "bird"];
var cartoons = ["king of the hill", "rick and morty", "adventure time", "spongebob sqaurepants", "the simpsons"];
var reactions = ["sorry", "thank you", "not sure", "nope", "please"];
var currentTopic;
// END GLOBAL VARIABLES

	var animal = $(this).attr("data-animal");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" 
		+ animal + "&api_key=dc6zaTOxFJmzC&limit=10";

// MAIN
$( document ).ready(function() {



	// stop or start a gif
	$(".gif").on("click", StartStopGif());

	
});
// END MAIN

// FUNCTIONS
function GenerateGifs(topic) {
	if(topic === "animals") {
		console.log("animals!")
		currentTopic = animals;
		console.log(currentTopic);
	}

	else if (topic === "cartoons") {
		console.log("cartoons!")
		currentTopic = cartoons;
		console.log(currentTopic);
	}

	else {
		console.log("reactions!")
		currentTopic = reactions;
		console.log(currentTopic);
	}

}

function StartStopGif() {

	var state = $(this).attr("data-state");
	console.log(state);

	if(state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate")
	}

	else if(state === "animate") {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
}
// END FUNCTIONS