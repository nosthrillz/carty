# Carty

Carty is a simple React + Redux Toolkit project. It presents users with a list of products that they can add to the cart and then affect quantities and cart contents.

To keep it simple, it uses a mock object 'database' as an initial state for the app and it doesn't have any checkout behavior.

# Check it out
## Live demo

Head to [carty.vercel.app](https://carty.vercel.app) to play around with the latest production deployment.

## See the code

Explore the code here or on your machine.

### Get the repo

Clone the code:

```bash
git clone https://github.com/nosthrillz/carty.git
cd carty
```

### Install and run

Make sure you have npm installed, then run the following command inside the project folder:

```bash
npm i && npm start
```
# Project structure

The project is structured as follows:

- `index.js` - the store provider for the app
- `App.js` - root component with react-router, displaying pages depending on route
- `store/` - Redux store
- `features/` - the reducer slices
- `styles/` - global styles and scss mixins/variables
- `components/ui` - the "atoms" - low-level components
- `components/layout` - the "molecules" - components that reuse the UI components
- `pages/` - the "organisms" - high level pages which use layouts.
# Features under construction

The following features are still under construction:

- [ ] Memoization for 'expensive' operations
- [ ] Preview cart on CartIcon hover
- [ ] Save store to localStorage
- [ ] Connect to an api for data fetching + refactor to accomodate api specs
- [ ] Write tests

# Tech stack

Tech stack laundry list:

- React.js
- Redux, React Redux, Redux Toolkit
- FontAwesome
- Sass
