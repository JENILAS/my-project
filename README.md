# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Steps to Deploy a React App to GitHub Pages**
Install gh-pages package: This will allow you to easily deploy the built React app to the gh-pages branch.

Run this command in your project:

bash
Copy code
npm install gh-pages --save-dev
Update package.json:

Add a homepage field to point to your GitHub Pages URL, in this format:
json
Copy code
"homepage": "https://<username>.github.io/<repository-name>"
Update your scripts section to include the predeploy and deploy scripts:
json
Copy code
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
Create a Production Build: When you run npm run build, it creates a production-ready version of your app in a build folder. GitHub Pages will serve files from this folder.

Deploy to GitHub Pages: Run the following command to deploy the app:

bash
Copy code
npm run deploy
This will push the build directory to a gh-pages branch on your repository. GitHub Pages will automatically serve your React app from this branch.

Ensure the Correct Branch is Set for GitHub Pages: Go to your repository’s Settings → Pages section and select the gh-pages branch as the source. GitHub Pages will now point to the correct branch containing your built app.

Fix Routing Issues (Optional): If you're using React Router and experience issues, add a 404.html in the public folder to handle routing correctly on GitHub Pages. You can also update package.json with "homepage": "." for local paths.
