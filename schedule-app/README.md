Trevor Bednarek and Caleb Henstein

FEATURES COMPLETED:
- All functional requirements requested in project document
- Groups are also able to include faculty members
- Viewing different students schedules with checkboxes on the groups page
- Filtering by the year or by all for students who have or haven't taken a course
- Searching for coursees
- Protecting advisee's list for faculty members (only allow faculty members to see advisee list)
- Page that shows all of the course's the signed in student has taken

FEATURES CURRENTLY UNDER DEVELOPMENT:
- Ability to search for a list of students at once (back-end completed, front-end not implemented)

FEATURES NOT STARTED:
- Change creating group members to just be members instead of having a client and students
- Adding Banner Web & Schedule Lookup links to sidenav bar


KNOWN BUGS:
- Some of the pages that have to deal with retrieving the advisor information returns a 500 response
 as it times out before the data is finished. We may need just to add an advisor field to the student to make life easier.




# ScheduleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
