# React Employee Directory

## Description
Employee directory built with React, using components, state management, and responsive events. Users are able to sort and filter employees based on properties and categories.


## Table of Contents 

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Collaborators](#collaborators)

* [Contributing](#contributing)
​
* [Questions](#questions)


## Prerequisites

Should you want to create your own replica of the application, I recommend doing the following:

1. Read up on the React Docs [here](https://https://reactjs.org/docs/getting-started.html). They're super helpful and informative, especially if you're just getting started.
2. Create a React app in your editor
```
npx create-react-app <projectname>
```


## Installation

To review the repository of the project, you can clone the repo remotely with the following command line in your terminal

```
git clone https://github.com/alexastef/react-employees.git
```

If you'd like to install the app locally, you can navigate to the 'react-app' directory and then follow the next steps:

Install the necessary and relevant dependencies by running the following command:

```
npm install
```
We're primarily concerned with Axios for this, so you can also just install axios.

The below command will start the app and React will open the browser automatically. It will even put you on a new port if the standard 3000 is being used elsewhere.
```
npm start
```

## Usage

The app is still missing some functionality, primarily sorting, but you should be able to find your way around without much hassle. I've written my code using functional components and hooks. If this is new territory for you, the React docs are extremely helpful! 

App.js is the highest level, then the code flows down to the table row which is lowest level. The axios call retrieves all the data we use in this app and it's is made from the TableContainer.js in the useEffect hook. Once the data is returned, make sure to manipulate it from the component. I tried mapping it in the promise and for some reason it made the data inaccessable from my components. Still not entirely sure why this happened, but mapping the data in the component itself fixed this problem. I'll go into more detail on the three major funcationalities of the app below:

### Get & Render Data
The call itself is a pretty basic API call - no dynamic queries or anything like that - but as I mentioned above, mapping the data in the promise instead of the compoenent for some reason affected my ability to access and utilize the data in the rest of my code. It was frustrating for a while but once I figured it out the rendering was straight-forward. I used Bootstrap for quick, clean styling for the table. The functionality for the rendering is executed primarily in the EmployeeRow component.

### Searching Employees
The search input needs to be initialized with a state that we can set on change events. Changing the state tells the DOM to re-render. This functionality filters to create a new array where the employee first name, last name, or state matches what the user types into the search field and then renders that array instead of the original array of all the employees.

### Sorting Employees
The filter functionality was the toughest for me and I didn't quite get it finished. My employees sort alpahabetically by last name on original render and then I was able to get them to sort by first name alphabetically on a button click, but I could not get the other button clicks to trigger their event handler functions. The user should be able to sort employee first name, last name, and state ascending and descending.  


## Challenges

This is my first React project and it was a bigger challenge than I originally thought it would be! The biggest challenge for me was figuring out the flow of data and where the logic for each functionality should live. I'm still having some trouble with the sorting, but I definitely have a better understanding of the flow now. I took it one chunk at a time, started from the top down, and managed to get just about all the functionality working, so I'm pretty happy with the final outcome. There are still some things I'd like to play around with and improve - refactors, functionality, styling. I'm new to the useReducer hook, but I might play around with it on this app because there are some actions tied to state. Excited to do more React! :) 


## Questions

Questions or feedback-- we welcome them all! Feel free to reach out for any questions about the repo, open an issue or contact any of the collaborators above and we'll get back to you as soon as possible. 
### ![Alexa Stefankiewicz](https://avatars.githubusercontent.com/alexastef?size=200)
* ### [Alexa Stefankiewicz](https://github.com/alexastef)
