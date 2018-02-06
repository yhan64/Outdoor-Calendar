# Outdoor-Calendar

## Screenshots
### iOS
![alt text](/assets/ios.gif)
### Android
![alt text](/assets/android.gif)
## Tech Stack
- Language: Javascript, (React Native, Node.js)
- Database: PostgreSQL
- Dev platform: Docker

## How to run it locally
1. Terminal: in root folder(oc-all)
```
$ docker-compose up
$ npm install knex -g
$ cd api
$ knex migrate:latest
$ npm run crawler
$ cd ../oc
$ npm install
```
2. Open Xcode/Android Studio.
3. Select `oc-all/oc/ios` or `oc-all/oc/android` accordingly.
4. Run the app locally on iOS simulator or Android emulator.
### trouble shooting
- To run on Android you need to update the ip address pointing to you local machine: https://github.com/yhan64/oc-all/blob/master/oc/js/actions/api-actions.js#L5

## Planned Milestones
- v0.0.0 a brand new repo 
- v0.5.0 (working on this)
  - grab outdoor activities from web
  - view outdoor activities without any choices
- v0.7.0
  - view outdoor activities with choices
    - start location, destination, start date, duration, candidates requirements
- v1.0.0
  - post outdoor activities manually through mobile app
  - edit outdoor activities
- v1.5.0
  - in app queries (temporary conversations between team lead and people who are interested in, no need to jump out of the app to ask one or two questions)
- in the future, maybe
  - personal calendar (activities that are saved)
  - enter activities information on desk web
  - grab personal calendar information from emails and recommend trips fit into their schedules
  - report invalid activities
