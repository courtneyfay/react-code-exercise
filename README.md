# React Code Exercise

## Objective

> The objective is to build a repository search application using the Github repository search API (https://docs.github.com/en/rest/reference/search#search-repositories) that displays the results of a query. The app can query the API directly.

> The list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.

> Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

> Finally, the app should be fully responsive and follow best practices in implementing a responsive website.

## How to setup, run this project locally, and run tests

### To Setup

In the project directory, you can run:

- `yarn`

This will install most of the package dependencies. Must be run before `yarn start` or `yarn test`

Next, you will need to install typescript, by running:

- `yarn add typescript`

Third, you will need to add web vitals, by running:

- `yarn add web-vitals`

Finally, you will need to add some special packages for typescript, by running:

- `yarn add @types/react`
- `yarn add @types/react-dom`

You should run reach of these commands separately in the Terminal

### To Run the Project Locally

- `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### To Run Tests

- `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Requirements

1. Search Input

- An input to type in the text to search github.

2. Search results

- Show the results of the search.

3. Sort results

- By best match (default) - Stars

4. Filter results

- By language

5. Detailed Result Page

- A page that when a result is clicked shows a detailed screen of the repository.

6. Responsive Design

- Should render properly on device sizes. (mobile, tablet, laptop, large desktop)

## Evaluation

The solution will be evaluated against the following criteria:

1. **Was the code able to be built and run locally?**
2. **Code Quality** - is the code clean, simple, commented, modern, well designed?
3. **User Experience** - how simple, intuitive, responsive and clear is the UI?
4. **Error handling** - does the code handle potential errors gracefully?
5. **Clarity** - does the repository have a detailed readme on setup/run/tests?

## Bonus

- Tests that demonstrate the code works correctly and handles anything that might be thrown at it.
