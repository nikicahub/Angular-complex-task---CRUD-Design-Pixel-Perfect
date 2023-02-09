# ContactsApp
driveMyBox Interview Assignment <br>
by: Nikica Kovacevic<br>
start date 27.01.23<br>
end date 31.01.23<br>

The app was created based of 4 pictures including design from scratch for a job interview,
using: Bootstrap, Sass, Typescript


## Local DB with json server used
Installation & Start command:<br>
- npm install -g json-server<br>
- json-server --watch db.json
- http://localhost:3000/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

*NOT WORKING PROPERLY:*

# POPOVER
- does not close on clicking anywhere on screen (which it should for better UX), but on button click only

# MODALS ADD-EDIT
- add aditional phone (dynamically add), I have managed to implement the looks but I was not sure how to implement the logic,
on when dynamic elements are added and how to catch and store their data in the database

---------------------------------------------------------------------------------------



