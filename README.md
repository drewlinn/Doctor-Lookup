# Javascript Week 1 Code Review: Doctor Lookup

#### This application allows the user to look up a doctor in their area who specializes in the area of their medical need. 06/30/17

#### By **Andrew Dalton**

## Description

This application is designed to help users find doctors in their area that can assist them with their individualized medical needs.

## Planning

1. Configuration/dependencies
  * In order for the application to function correctly, make certain the following packages are installed via your console or powershell:

    * Node Packages
      * The following were implemented for use in our Development Environment
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * browserify - makes our project browser compatible.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * jshint - analyzes code and warns about parts that don't follow stylistic conventions, or could cause bugs in the future.
        * sass - translates our files into normal CSS .
        * sourcemaps - adds some code which allows us to see which Sass files are responsible for each CSS rule that we see in the browser.
        * bower-files - installs the necessary files on which our front-end package manager depends.

    * Bower Packages
      * The following were implemented in our Production Environment
        * jquery - simplifies HTML document traversing, event handling, animating, and Ajax interactions.
        * bootstrap - provides us with some rudimentary page styling tools.
        * moment.js - allows us to implement time and date related data.

  2. Specifications
  
  | Behavior | Input | Output |
  | :------- | :---- | :------|
  | User inputs location, is provided with a list of doctors | "Portland, OR" | "Dr. Jones, Dr. Grant, Dr. Jekyll" |
  | User inputs ailment, is provided with a list of doctors that specialize in their ailment | "Feel bad" | "Dr. Feelgood, specializes in making people feel good." |
  | Doctors are displayed by location | "Portland, OR, Feel bad" | "Here are the doctors in your area" |

3. Integration


4. UX/UI


5. Polish


## Setup/Installation Requirements

* Go to https://github.com/drewlinn/special-doodle.git
* Clone the repository into your local directory using your console or powershell.
* Enter the folder using your command line
* Perform the npm init and bower init commands to access the necessary packages.
* In the command line, enter the command "gulp build"
* Follow that with the command gulp-serve and that should take you directly to the page.

## Known Bugs

None are currently known.

## Support and contact details

If you discover technical issues with my program please contact me at expandrew@gmail.com

## Technologies Used

* HTML
* Javascript
* jQuery
* CSS
* SCSS
* Bootstrap
* Node
* Node Package Manager
* Bower

### License

This software is licenses under the GPL license.

Copyright (c) 2016 **Andrew Dalton, Epicodus**
