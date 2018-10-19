# Project 3
## Todo Manager
A simple app for managing todos with motivation and scores to keep track of tasks completed and tasks closed.

This readme contains information on how to install and run the app as well as some information on technologies that have been used.

## Prerequisites
### Before you can install and run the app:
- Install NodeJS
- Install Expo command line tools
- `npm install expo-cli --global`

### Installing
```
git clone https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-20.git
cd it2810-webutvikling-h18-prosjekt-3-53
npm install
expo start
```

## Expo
We have used Expo for this project. Expo is a free tool built around React Native to make app-creation even easier with JavaScript and React.

## Redux and AsyncStorage
Redux have been used for state management. This makes it easier to load and manipulate tasks from different screens. We are also using Redux Persist (link: https://github.com/rt2zz/redux-persist) to persist the state. Redux Persist uses AsyncStorage by default for React Native. It also gives the ability to blacklist / whitelist parts of the state to be persistes, which is nice.

## React Navigation
For easy navigation between screens, we used React Navigation. This package made it really easy to setup a tab navigator with icons and text.
## Testing
Jest and Enzyme have been installed to be used for testing components. Jest is a JavaScript testing framework and Enzyme is a utility that makes it easier to manipulate and traverse React Components’ output.

## Sources:
Profile icon was taken from: https://icons8.com

Code for pedometer taken from : https://docs.expo.io

