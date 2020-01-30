# Random Quote Machine

This project was built as part of the [FreeCodeCamp curriculum](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

https://allymurray.github.io/markdown-previewer

## Objective

Create a web app that allows a user to enter GitHub flavoured markdown in an editor and display a preview of the markdown as the user types. The editor should be preloaded with markdown when the app loads. See the [user stories](#user-stories) for more details.

## Implementation details

...

## Built with

- [React](https://reactjs.org)
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Styled Components](https://styled-components.com)
- [Marked](https://marked.js.org/#/README.md#README.md)

## User stories

1. I can see a textarea element with a corresponding id="editor".
2. I can see an element with a corresponding id="preview".
3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.
5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
