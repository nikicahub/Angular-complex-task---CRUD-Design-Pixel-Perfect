# ContactsApp
# driveMyBox Interview Assignment
# Nikica Kovacevic
# start date 27.01.23
# end date 31.01.23


## Local DB with json server used
  ## Installation:
-npm install -g json-server
  ## Start command:
- json-server --watch db.json


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.



*ADDED FUNCTIONALITY:*
- for table and mobile view added a button to popover to view details since some were removed so the table could be viewed properly when screen size is smaller 
- unfavorite button which removes the favorite
- remove button to remove additional phone

---------------------------------------------------------------------------------------
*CSS faults:*
# Modal Add/Edit
- modal background color (box-shadow) should be blueish not gray default
- arrows of selects should be blue
- dropdown hover should be light blue
# Modal Delete
- shadow on red X and two lines inside (one full opacity second 0.5opacity) instead of icon 
# Table
- border-radius on table rows
# POPOVER
- icons for edit and delete are not the same as design

---------------------------------------------------------------------------------------

*NOT WORKING PROPERLY:*
# SEARCH
    -not working 100% (shows items on some words which are not in table like eafer - shows 2 items) - probably because it searches the database which might contain that, not sure actually

# POPOVER
- does not close on clicking anywhere on screen (which it should for better UX), but on button click only

# MODALS ADD-EDIT
- add aditional phone (dynamically add), I have managed to implement the looks but I was not sure how to implement the logic,
on when dynamic elements are added and how to catch and store their data in the database

---------------------------------------------------------------------------------------



**Resources:**
https://angular.io - mother of all
https://github.com/typicode/json-server
CRUD angular- 
https://www.youtube.com/watch?v=I9mtyLg32nQ&t=70s
search functionality - 
https://www.npmjs.com/package/ng2-search-filter
mdbootstrap-
https://mdbootstrap.com/docs/standard/forms/search/
dynamically add elements angular - angular dynamic
https://zoaibkhan.com/blog/create-dynamic-form-controls-in-angular-with-formarray/
https://angular.io/guide/reactive-forms#creating-dynamic-forms
https://www.elite-corner.com/2020/03/dynamically-adding-and-removing-form-fields-to-formarray.html
chatgpt helped with some logic and styling 
and numerous other reference sites which I forgot to save




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
