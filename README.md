# Mathemtical Foundations Life-Chart
## How to calculate the Point of Financial Freedom (PFF)
The PFF is the point where you could live off of your current wealth.
$$ \[ PFF := \{ x \mid \text{Wealth}(x) = \text{Cost}(x) \} \] $$

## How to calculate the Wealth(x)?
The wealth is the sum of all assets. Important for that is that the wealth increases over time passively and actively.
The passive growth comes from the interest rate of the assets. The active growth comes from investing into the assets using your Free-Cashflow.
The wealth is calculated by the following formula:
$$ The wealth \( V(t) \) at time \( t \) is calculated as the sum of the values of all asset classes. For each asset class \( i \), the value \( V_i(t) \) at time \( t \) is calculated as follows:

\[ V_i(t+1) = V_i(t) \cdot (1 + \alpha_i) + C \cdot \beta_i \]

where
- \( \alpha_i \) is the growth rate of asset class \( i \),
- \( \beta_i \) is the proportion of the annual free cash flow allocated to asset class \( i \),
- \( C \) is the annual free cash flow.

The total wealth \( V(t) \) at time \( t \) is the sum of the values of all asset classes:

\[ V(t+1) = \sum_{i=1}^{n} \left( V_i(t) \cdot (1 + \alpha_i) + C \cdot \beta_i \right) \]

where \( n \) is the number of asset classes.
$$

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
