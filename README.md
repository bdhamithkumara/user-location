# user-location-finder

[![npm version](https://badgen.net/npm/v/user-location-finder)](https://www.npmjs.com/package/user-location-finder)

### Install

```bash
yarn add user-location-finder
```
or 
```bash
npm i user-location-finder
```
### Sneakpeek
![](https://i.ibb.co/Wc308z4/Rec00531-ezgif-com-video-to-gif-converter.gif)

### Usage

```jsx
import getUserLocation from 'user-location-finder';

getUserLocation()
    .then(location => {
        console.log(`Country: ${location.country}, Town: ${location.town}`);
    })
    .catch(error => {
        console.error('Error fetching location:', error);
    });

```

### About

The user location finder package provides a simple and efficient way to retrieve the user's current location, including the country and town/city, directly from their browser. It utilizes the browser's built-in Geolocation API combined with the BigDataCloud reverse geocoding service to convert geographical coordinates (latitude and longitude) into readable location information.

### Features

* Easy to Use - Simple API that allows you to get the user's country and town with a single function call.
* No API Key Required - Uses BigDataCloud's free reverse geocoding service, so no API key is needed for basic usage.
* Real-Time Location - Retrieves the user's location in real-time using the browser's Geolocation API.
* Lightweight - Minimal dependencies, ensuring fast performance and easy integration into any JavaScript or Node.js project.

### Dependencies 

axios for making HTTP requests to the BigDataCloud API.

### License

MIT


