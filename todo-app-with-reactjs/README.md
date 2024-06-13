# TODO APP

## Description

Reactjs Todo App is developed to play with todo list.

## Views

These are the views for the Todo list

1. **Todo Listing**

    This view is showing list of all Todos and a from input to add new todo Items

## Some technical details for developers

### This is a [react.js] project bootstrapped with [`create-react-app`](https://create-react-app.dev/).

To learn more about reactjs, take a look at the following resources:

-   [Learn reactjs](https://reactjs.org/docs/getting-started.html)
-   [learn create-react-app](https://create-react-app.dev/)

#### To run the Project locally

**Install dependencies**

```bash
npm install
```

**Running the development server**

```bash
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

### Zustand for State Management

[Zustand](https://zustand-demo.pmnd.rs/) Packge is used to handle global state.

### API endpoints

Frontend consumes the following endpoints

| Endpoint | Usage in views |
| -------- | -------------- |

### Models

This app is using [Typescript](https://www.typescriptlang.org/), which has better readability, predictions and more rich IDE support compared to regular JavaScript. It also makes it easy to early identify bugs and refactor faster.

### Styles, UI Library

**Material-UI**
[Material UI](https://mui.com/material-ui/getting-started/overview/) is a library of React UI components that implements Google's Material Design.

**Tailwind Css**
[Tailwind Css](https://mui.com/material-ui/getting-started/overview/) A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

#### Testing

Frontend application should be covered with unit tests and rendering tests. The testing libraries being used are [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library).

Test files are created by adding a `.test.tsx` file, example for component `Buttons.tsx` add a `Button.test.tsx`

Run tests with command `npm run test` or `npm run test:watch` to start local server.

Testing coverage is placed in coverage/jest folder at root of project.
