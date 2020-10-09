
// Switching or updating the data attribute of the div containing the new workout
$(".nbtn").on("click", function (event) {
    event.preventDefault();

    $("#newWorkoutDiv").show();
    $("#savedWorkoutDiv").hide();

})

// Switching or updating the data attribute of the div containing the saved workout
$(".sbtn").on("click", function (event) {
    event.preventDefault();

    $("#newWorkoutDiv").hide();
    $("#savedWorkoutDiv").show();

})

// --------------------------------------

// Making the variables global for use in the functions
var indoorOutdoorVar = 0;
var categoryVar = 0;

// Event listener for when the indoorOutdoor dropdown is selected
$("#indoorOutdoorSelect").change(function (event) {
    event.preventDefault();

    // Get the value from the indoorOutdoor dropdown
    indoorOutdoorVar = document.getElementById("indoorOutdoorSelect").value

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

// Getting the exercises function
function gettingTheExercises() {
    console.log("function was called");
    console.log(indoorOutdoorVar, categoryVar);

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
    }).then(
        function (response) {
            console.log(response)

            // CONTINUE FROM HERE
            // GENERATE THE EXERCISE CARDS
            // HANDLEBARS TEMPLATING

        }
    )
}