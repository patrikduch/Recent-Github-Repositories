This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





# Test task:

- implement a small client app in React / Redux that discovers trending repositories in GitHub.

- your app will show a list of most popular repositories of last week.
 - some basic info about the repo should be displayed, such as: repo name, link to GitHub, description and number of stars
- Level 2 of the implementation: add possibility for the user to star each displayed repository. To make things easy, only store this stars information in the client's browser. Have the ability to filter in the list repos, that user has starred.
Details for implementation:

* GitHub public endpoint is: https://api.github.com/ and the URL to obtain all repositories, created after 1.7.2020, sorted by amount of starts, descending, is https://api.github.com/search/repositories?q=created:%3E2020-07-01&sort=stars&order=desc

* Use some common boilerplate such as create-react-app or your own

* Choice of technologies is up to you (but you have a feeling that you heard client's CTO loves to see React Hooks being used ;-) )
* Do tests as much as possible
* Try to have as much clean, concise code and semantic HTML as possible

* Provide us with some repository (ideally private - bitbucket) that we can review. Use hnz_kkk_ bitbucket ID to share your repository to, when done.
Regards, Jan