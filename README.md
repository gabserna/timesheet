***Timesheet***
# Walkthrough
https://github.com/MountainlandWEB/angular/tree/master/timesheet_app_walkthrough


ng add @angular/material
npm install firebase @angular/fire --save


# removed from package.json
    "prebuild": "npm i --legacy-peer-deps && npm i --save @angular/core @angular/cli && npm i --save @angular/material @angular/cdk @angular/animations && npm i --save firebase",

    "prod": "ng build --configuration production"