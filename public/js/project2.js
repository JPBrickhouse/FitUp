
// Switching / updating the data attribute of the div containing the new workout
$(".nbtn").on("click", function (event) {
    event.preventDefault();

    $("#newWorkoutDiv").show();
    $("#savedWorkoutDiv").hide();

})

// Switching / updating the data attribute of the div containing the saved workout
$(".sbtn").on("click", function (event) {
    event.preventDefault();

    $("#newWorkoutDiv").hide();
    $("#savedWorkoutDiv").show();

})

$("#indoorOutdoorSelect").change(function(event){
    event.preventDefault();

    var valueSelected = document.getElementById("indoorOutdoorSelect").value
    console.log(valueSelected);
})

$("#categorySelect").change(function(event){
    event.preventDefault();

    var valueSelected = document.getElementById("categorySelect").value
    console.log(valueSelected);
})