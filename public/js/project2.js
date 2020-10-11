// Switching or updating the data attribute of the div containing the new workout
$(".nbtn").on("click", function (event) {
    event.preventDefault();
    
    // Showing the newWorkoutDiv and hiding the savedWorkoutDiv
    $("#newWorkoutDiv").show();
    $("#savedWorkoutDiv").hide();
    
    // Calling the scrollToElement function
    scrollToElement("#newWorkoutDiv");
})

// scrollToElement function
// After a user selects new or saved workout
// The page that dynamically moves the user to a specific location
function scrollToElement(selector, callback) {
    var animation = { scrollTop: $(selector).offset().top };
    $('html,body').animate(animation, 'slow', 'swing', function () {
        if (typeof callback == 'function') {
            callback();
        }
        callback = null;
    });
}

// Switching or updating the data attribute of the div containing the saved workout
$(".sbtn").on("click", function (event) {
    event.preventDefault();
   
    // Showing the savedWorkoutDiv and hiding the newWorkoutDiv
    $("#newWorkoutDiv").hide();
    $("#savedWorkoutDiv").show();

    // Calling the scrollToElement function
    scrollToElement("#savedWorkoutDiv");
})

// ---------------------------------------------------------------------------

// Saved workout routed to list 
$("#savebtn").on("click", function () {
    alert("Hi");
});

// ---------------------------------------------------------------------------

// Making the variables global for use in the functions
var indoorOutdoorVar = 0;
var categoryVar = 0;

// Event listener for when the indoorOutdoor dropdown is selected
$("#indoorOutdoorSelect").change(function (event) {
    event.preventDefault();

    // Get the value from the indoorOutdoor dropdown
    indoorOutdoorVar = document.getElementById("indoorOutdoorSelect").value


    // retrieve google api link without the query parameter
    var mapLink = $('#map').attr('src');
    var mapBaseLink = mapLink.split("q=")[0];

    // set the new link based on workout location value selected
    var updatedMapLink = mapBaseLink + (indoorOutdoorVar == "indoor" ? "q=gym" : "q=park");
    $('#map').attr("src", updatedMapLink);

    // If both a location and category have been selected
    // (i.e. the values of the variables is no longer equal to zero)
    // Run the gettingTheExercises function
    if (indoorOutdoorVar != 0 && categoryVar != 0) {
        gettingTheExercises()
    }
})

// Event listener for when the categorySelect dropdown is selected
$("#categorySelect").change(function (event) {
    event.preventDefault();

    // Get the value from the categorySelect dropdown
    categoryVar = document.getElementById("categorySelect").value

    // If both a location and category have been selected
    // (i.e. the values of the variables is no longer equal to zero)
    // Run the gettingTheExercises function
    if (indoorOutdoorVar != 0 && categoryVar != 0) {
        gettingTheExercises()
    }
})

// gettingTheExercises function
// Goes into the database and gets exercises based on user selected dropdown values
function gettingTheExercises() {

    var selectionData = {
        location: indoorOutdoorVar,
        category: categoryVar
    };

    // Making an AJAX call
    // Using the GET method
    // Passing the selectionData
    $.ajax({
        method: "GET",
        url: "/api/exerciselist",
        data: selectionData
    }).then(function (response) {
        // Running a callback function with the response (where response
        // consists of all the exercises that met the selectionData criteria
        // that we passed to the ajax call)

        var exerciseCount = response.length

        // If no exercises are found
        if (exerciseCount === 0) {
            $("#exerciseDisplay").hide();
            $("#noExercisesFound").text("No exercises found, please try again!")
            $("#noExercisesFound").show();
        }
        // Otherwise, display those exercises
        else {
            $("#noExercisesFound").hide();

            var maxLoopLength = Math.min(exerciseCount, 10)

            var miniArrayOfExercises = []
            // var miniObjectOfObjects = {}

            // Looping through the responses and getting a random selection
            for (var i = 0; i < maxLoopLength; i++) {
                // Geting a random number from 0 to (exerciseCount - 1)
                var randomIndex = Math.floor((Math.random() * exerciseCount));
                miniArrayOfExercises.push(response[randomIndex])

                // var exerciseID = response[randomIndex].id;
                // miniObjectOfObjects[exerciseID] = response[randomIndex]
            }

            console.log(miniArrayOfExercises);
            // console.log(miniObjectOfObjects);

            // GENERATE THE EXERCISE CARDS

            // Empty all the cards
            $("#exerciseDisplay").empty();

            // Generate all the new cards
            for (var j = 0; j < miniArrayOfExercises.length; j++) {

                // Building the exercise card
                var newExerciseCard = $("<div>");
                newExerciseCard.addClass("card");
                newExerciseCard.addClass("generatedExercise")
                newExerciseCard.text(miniArrayOfExercises[j].exercise)
                newExerciseCard.attr("data-exerciseID", miniArrayOfExercises[j].id)
                // Building the save to workout button
                var exerciseButton = $("<button>")
                exerciseButton.text("Save to workout")
                exerciseButton.addClass("genExButton")
                exerciseButton.attr("data-exerciseID", miniArrayOfExercises[j].id)
                newExerciseCard.append(exerciseButton)
                // Appending the card to the div
                $("#exerciseDisplay").append(newExerciseCard);
            }

            // Showing the div, now that everything is displayed
            $("#exerciseDisplay").show();

            // $.ajax({
            //     method: "GET",
            //     url: "/api/exDisplay",
            //     data: miniObjectOfObjects // need to pass an object
            // })
            // .then(function () {
            //     console.log("Get made")
            // })

        }

    });
}





// jquery's .on() method DOES NOT bind to future elements by default...
// This code binds the click event to FUTURE elements that are added
// to the DOM with a class of “generatedExercise”
// Sourced from: http://clarkeulmer.com/bind-events-to-future-elements-using-jquerys-on/
$(document).on("click",".generatedExercise",function(){
    var exerciseID = $(this).attr("data-exerciseID")

    alert(exerciseID);



    // CONTINUE FROM HERE


    

})


