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

This project uses Create-React-App to build an application which allows users to see lists of quotes on the topics of Hope, Leadership, Inspiration, Comedy, or any topic of the user's choosing in order to set intentions for themselves and those around them for the day. Quotes can be saved to view later and are sorted by styles and colors. Throughout the project, learning goals included:

- Architect an application structure using functional components and Hooks
- Solidify competency with React fundamentals, controlled forms, and state management
- Effiecient time managenemnt on solo made application 
- Working with React Hooks & asynchronous JS using Cypress testing
- Creating a multi-page UX using Router with error handling
- Using the FavQ's API.
- Deployment using Heroku

- [Deployed app](https://inspire-finder.vercel.app/hope)
- [Project Brief and Rubric](https://frontend.turing.edu/projects/module-3/niche-audience.html)


#### Built With:

- React
- React Router
- ES6
- HTML5
- CSS
- Cypress
- FavQ's api

## Set-up Instructions

visit deployed site [here](https://inspire-finder.herokuapp.com)

1. Additionally you can clone down the repo [here](https://github.com/Max9545/inspire-finder)
2. Move into the inspire-finder directory in your terminal.
3. To see the code itself locally, run `<name of text editor> .`
- Run `npm install`
- Run `npm start`
- visit http://localhost:3000/
- will need a FavQ's Authorization Token to insert into the headers object:

```javascript
    {
    method: 'GET',
    headers: {
      'Authorization': 'Token <Your FavQ's API Token here>'    
    }
```

## Learning Goals

- Deeper understanding of React fundamentals including components, props, state, JSX, and Hooks.
- End to End testing using Cypress
- Utilizing React Router
- Deploying an application on Heroku

## Challenges

1. Planning: intentionally planning an overall strategy before writing code. This included component structures and state if applicable
2. Comprehensive colorful wireframes
3. Detailed user stories to drive development  
4. Using Cypress testing to implement E2E testing and throughly test all user flows including stubbing api calls
5. Using the FavQ's Api with an Authorization Token.

## Wins

1. Implementing the MVP in a timely and efficient manner
2. Improvement of Cypress testing methodologies 
3. Mobile first design
4. Dynamic rendering and reuse of components on multiple levels 

## Functionality

#### Hope Page
![Site Use of the Hope Page](https://media.giphy.com/media/Nu99wE2nocJwQ1NyMf/giphy.gif)

#### Leadership Page
![Site Use of the Leadership Page](https://media.giphy.com/media/PZD9f02O5sCLbOqQau/giphy.gif)

#### Inspirational Page
![Site Use of Inspirational Page](https://media.giphy.com/media/XTObAS1k9gRc4KgYxY/giphy.gif)

#### Laughs Page
![Site Use of Laughs Page](https://media.giphy.com/media/VwEgntWUr8WjjMUmgI/giphy.gif)

#### Favorites Page (Can choose and see favorites)
![Site Use of Favorites Page](https://media.giphy.com/media/fgkfwAJAzKPvLOfbmR/giphy.gif)

#### Can choose a topic and see the subsequent quotes 
![Site Use of Searched Quotes Page](https://media.giphy.com/media/KYagOGBdL2ywTmFpeO/giphy.gif)

## Contributers

* [Max Bregman](https://github.com/Max9545) - Application Creator
* [Leta](https://github.com/letakeane) - Project Manager
* [Scott Ertmer](https://github.com/sertmer) - Project Manager
