## Contact  

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://www.linkedin.com/in/max-bregman-216063203/) [![GitHub](https://img.shields.io/badge/GitHub-black.svg?&style=flat-square&logo=github&logoColor=white)](https://github.com/Max9545) - Max Bregman


## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Set-up Instructions](#set-up-instructions)
- [Learning Goals](#learning-goals)
- [Challenges](#challenges)
- [Wins](#wins)
- [Functionality](#functionality)
- [Future Iterations](#future-iterations)
- [Contributors](#contributors)


## About The Project

This project utilizes Create React App to build an application which allows users to see lists of quotes on the topics of Hope, Leadership, Inspiration, Comedy, or any topic of the user's choosing. Throughout the project, learning goals included:

- Architect an application structure using functional components and hooks
- Solidify competency with React fundamentals and state management 
- Working with React components & asynchronous JS using Cypress testing
- Create a multi-page UX using Router
- Using the FavQ's API.
- Deployment using Heroku

- [Deployed app](https://inspire-finder.herokuapp.com/favorites)
- [Project Brief and Rubric](https://frontend.turing.edu/projects/module-3/niche-audience.html)


#### Built With:

- React
- React Router
- Javascript
- HTML5
- CSS
- Cypress
- FavQ's api


## Set-up Instructions

visit deployed site [here]()

1. Additionally you can clone down the repo [here](https://github.com/Max9545/gallery-time)
2. Move into the gallery-time directory in your terminal.
3. To see the code itself locally, run `<name of text editor> .`
- Run `npm install`
- Run `npm start`
- visit http://localhost:3000/
- will need a google api key
- make .env file in root directory and paste this in there:
- REACT_APP_API_KEY=Your_KEY_HERE
- Torun Cypress testing add cypress.json needs this:
{
  "env": {
    "API_KEY": "process.env.REACT_APP_API_KEY"
  }
}

## Learning Goals

- Deeper understanding of React fundamentals including components, props, state, JSX, hooks.
- E2E (end to end) testing using Cypress
- Refactoring an application to utilize React Router
- Deploying an application
- Utilize PWA to run application offline.


## Challenges

1. Planning: intentionally planning an overall strategy before writing code. This included component structures and state if applicable
2. Using Cypress testing, to implement E2E testing and throughly test all user flows including stubbing api calls
3. Using the Google Api with CORS and keys.
4. Implement PWA features. Service worker and cache.  


## Wins

1. Implementing the MVP in a timely and efficient manner
2. Improvement of Cypress testing methodologies 
3. Mobile first design.
4. Dynamic rendering of components on multiple levels 


## Functionality


#### Home Page
![Site Use]()


#### Can choose a topic and see the subsequent quotes 
![Site Use]()

#### Can choose and see favorites
![Site Use]()


## Contributers

* [Max Bregman](https://github.com/Max9545) - Application Creator
* [Leta](https://github.com/letakeane) - Project Manager
* [Scott Ertmer](https://github.com/sertmer) - Project Manager
