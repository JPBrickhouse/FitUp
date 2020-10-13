# FitUp - Customizable Workout Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deployed Website:
[http://project-two-2020.herokuapp.com/](http://project-two-2020.herokuapp.com/)

## DESCRIPTION
Regardless of where you are, it's easy to keep up with your workout goals, all thanks to **FitUp**! Based on your location and desired muscle group(s), FitUp provides recommendations for nearby parks and gyms, along with possible exercises for your next workout. Build, store, and recall your workouts, all from the comfort of your home, or on-the-go! **FitUp**, the easy way to live your healthy lifestyle!

## SCREENSHOTS

### Login and Signup Pages
![Login and Signup Pages](./public/img/screenshots/LoginSignup.png)

### Selection: Exercise Category and Location
![Selection: Exercise Category and Location](./public/img/screenshots/Selection1.png)

### Selection: Individual Exercises - Indoor, Gyms
![Selection: Individual Exercises - Indoor, Gyms](./public/img/screenshots/IndoorGyms.png)

### Selection: Individual Exercises - Outdoor, Parks
![Selection: Individual Exercises - Outdoor, Parks](./public/img/screenshots/OutdoorParks.png)

### Built Workout (Collection of Exercises)
![Built Workout (Collection of Exercises)](./public/img/screenshots/BuiltWorkout.png)

### Recalling Saved Workouts
![Recalling Saved Workouts](./public/img/screenshots/SavedWorkouts.png)

## TABLE OF CONTENTS
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
* [Notes](#notes)
* [Retrospective](#retrospective)

## INSTALLATION
- No installation is required, as the user can simply visit the deployed application link: [http://project-two-2020.herokuapp.com/](http://project-two-2020.herokuapp.com/)
- However, if the user wishes to investigate the code locally, the following steps should be performed:
    - Clone the repo for use on your local machine
    - Use the command line to locate the cloned repo and make it your current directory
    - Type `npm install` in the command line
    - This will install the necessary node module packages and dependencies

## USAGE
- To run the application locally...
    - Use the command line to locate the cloned repo and make it your current directory
    - Simply type `node server.js` in the command line
    - Executed correctly, the command line should respond with `Server listening on http://localhost:####`
    - Open your preferred browswer and visit `http://localhost:####/`
    - In both instances above, replace `####` with the corresponding PORT number as noted in the server.js file
    - To end the server instance, simply type "ctrl" + "c"
- To run the application online, please visit the deployed link: [http://project-two-2020.herokuapp.com/](http://project-two-2020.herokuapp.com/)
- Application functionality is identical whether you are running the server locally or visiting the deployed link:
    - After arriving at the landing page, new users have the ability to sign-up and log-in, and existing users have the ability to simply log-in
    - Following logon, the user is taken to the main page of the application, where they can choose to generate a new workout or view their previously saved workouts
    - When generating a new workout:
        - The user selects a location (indoor or outdoor), which yields nearby gyms or parks, respectively
        - The user selects a muscle group
        - Based on the previously selected inputs (location and muscle group), the returned results are a randomly generated list of possible exercises
        - Each of the exercises can be added to comprise a complete workout
        - Once the workout is built, it can be saved to the database
    - When recalling a saved workout:
        - The user is simply presented with all of their previously built workouts
        - The user can choose to remove a workout, if they so choose

## TESTS
PLACEHOLDER





## LICENSE
License: MIT License<br>
[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

## CONTRIBUTING
- [https://github.com/JPBrickhouse](https://github.com/JPBrickhouse)
- [https://github.com/JonMisner](https://github.com/JonMisner)
- [https://github.com/Mariafcc](https://github.com/Mariafcc)
- [https://github.com/kbaur775](https://github.com/kbaur775)

## QUESTIONS
PLACEHOLDER

## NOTES
PLACEHOLDER

## RETROSPECTIVE
PLACEHOLDER