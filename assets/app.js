//
//	Maxwell Schmelling
//	HW #6 - GIPHY API
//	7/20/2017
//

// GLOBAL VARIABLS
var topics = [["animals", ["cat", "kangaroo", "octopus", "dog", "bird"]],
			["cartoons", ["king of the hill", "rick and morty", "adventure time", "spongebob sqaurepants", "the simpsons"]], 
			["reactions", ["sorry", "thank you", "not sure", "nope", "please"]]];
var currentTopic;
var currentTopicTitle;
// END GLOBAL VARIABLES


// MAIN
$( document ).ready(function() {
	// stop or start a gif
	$(".gif").on("click", function() {

		var state = $(this).attr("data-state");

		if(state === "still") {
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate")
		}

		else if(state === "animate") {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
		console.log(state);
	});

	$(".topic").on("click", function() {
		GenerateSubTopics($(this).attr("data-topic"));
	});
});
// END MAIN

// FUNCTIONS
function GenerateSubTopics(topic) {
	// set appropriate global variables
	if(topic === "animals") {
		console.log("animals!")
		currentTopicTitle = topics[0][0];
		currentTopic = topics[0][1];
		LoadScreen(1);
		console.log(currentTopicTitle);
	}

	else if (topic === "cartoons") {
		console.log("cartoons!")
		currentTopicTitle = topics[1][0];
		currentTopic = topics[1][1];
		LoadScreen(1);
		console.log(currentTopicTitle);
	}

	else if (topic ==="reactions") {
		console.log("reactions!")
		currentTopicTitle = topics[2][0];
		currentTopic = topics[2][1];
		LoadScreen(1);
		console.log(currentTopicTitle);
	}

	console.log(currentTopic);
	// generate sub topic buttons inside #sub-buttons\
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	for (var i = 0; i < currentTopic.length; i++) {
		console.log(currentTopic[i]);
	}

}

function SentenceCase (str) {
  if ((str === null) || (str === ''))
       return false;
  else
   str = str.toString();

 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function LoadScreen(screen) {
	// Topics Screen
	if(screen === 0) {
		console.log("Loading Topics!");
		$("#topics").css({"display": "block"})
		$("#sub-topics").css({"display": "none"})

	}

	// Sub Topics Screen
	else if (screen === 1) {
		console.log("Loading Sub Topics!");
		currentTopicTitle = SentenceCase(currentTopicTitle);
		$("#span-topic").text(currentTopicTitle);
		$("#topics").css({"display": "none"})
		$("#sub-topics").css({"display": "block"})
	}
}

// END FUNCTIONS