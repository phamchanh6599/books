## Structure

- We have core-components, pageComponents to store components that can be reusable
- For images we have images folder to store images
- To share state between component, it is using Context-API for a fast setup
- We have `.env` file for config API url.

## Features

- View list of book
- Search by book name
- Pagination
- Copy link of book for sharing

## Note

- For React 18 version, in development mode the app will render twice times at beginning because of using `React.StrictMode` in `index.ts` file

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
