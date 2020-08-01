# The Stingy Traveler

[![NPM Version Badge](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)

## Table of Contents
*  [Description](#description)
*  [User Story](#user-story)
*  [Features of the Application](#features-of-the-application)
*  [Preview of The Stingy Traveler](#preview-of-the-stingy-traveler)
*  [Links](#links)
*  [Installation](#installation)
*  [Usage](#usage)
*  [License](#license)
*  [Contributing](#contributing)
*  [Questions](#questions)

## Description

If you've found yourself midway through your tropical vacation, strapped for cash, and wondering where the heck your money went, then The Stingy Traveler is here to help. The Stingy Traveler is a budget application that helps the frequent traveler keep track of their spending. It not only helps you figure out where your money is going - as it gives you the ability to input your expenses and gains - but it will make you conscious of your remaining budget, so that you can thoroughly enjoy your vacation. The Stingy Traveler adds dynamism to the existing budget tracking application by allowing for offline access and functionality, so that the user can add expenses and deposits to their budget regardless of their connectivity. When entering transactions offline, the user can populate the total when brought back online.

This progressive web application uses indexedDB, cached files, service workers, and a web app manifest to render an application that is capable of delivering a web experience with native-like capabilities and reliability, despite the lack of connectivity. The application was also built using Express routing, mongoose, NodeJS, and ChartJS.

## User Story
~~~
AS AN avid traveller  
I WANT to be able to track my withdrawals and deposits with or without a data or internet connection  
SO THAT my account balance is accurate when I am traveling.  
~~~

## Features of the Application
~~~
GIVEN a user is on a budget application without an internet connection  
WHEN the user inputs a withdrawal or deposit  
THEN that will be shown on the page and added to their transaction history when their connection is back online.   
~~~

## Preview of The Stingy Traveler

![The Stingy Traveler Homepage]()

The following animation demonstrates the application manifest, the service worker, and the application functionality without an internet connection:

![The Stingy Traveler Preview]()

## Links

1. [Deployed Application](https://dashboard.heroku.com/apps/the-stingy-traveler)

2. [Github Repository](https://github.com/rh9891/TheStingyTraveler)

## Installation

The application requires the following dependencies and/or package managers:
~~~
$ npm install compression
~~~

~~~
$ npm install express
~~~

~~~
$ npm install lite-server
~~~

~~~
$ npm install mongoose
~~~

~~~
$ npm install morgan
~~~

## Usage

The application can be initiated by inputting `node server.js` into the command line interface and running the application on `localhost: 3000`.

## License

This application does not currently have any licenses.

The user is not permitted to use, modify, or share any parts of it. Though the code for this application is hosted on Github, where you are allowed to view and fork the code, this does not imply that the user is permitted to use, modify, or share the contents of this application for any purpose.

## Contributing

If you would like to contribute to this repository, please contact me via [Github](https://github.com/rh9891).

## Questions

If you have any questions, comments, or issues regarding this application, please do not hesitate to contact me through [Github](https://github.com/rh9891).