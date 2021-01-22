# Event Calendar with Modals

Calendar where when you click on a blank space you can add an event to that day.
You can then click on the event created to see the event and the hours at which occurs.
Has many views (day, week, work week, month and agenda mode).

## Available Scripts

This project has been made with [React Big Calendar](https://github.com/jquense/react-big-calendar/) and [Sweet Alert 2](https://sweetalert2.github.io/).
In the project directory, you can run:

```npm install```

Once installed, run this command to run the app in the development mode

```npm start```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You may also see any lint errors in the console.


## Usage

The calendar will start in *month* mode, but has many options too. You can click in a blank spot in a day to create an event, or click on the number to go to that specific day. You can also drag the cursor to extend the length when creating a new event. This calendar also features many modes, which are:

- *Month Mode*: you will see and be able to create events from there. You **cannot select hours for an event** in this mode, where every event will be created at 24h. If you drag the cursor from one day to another, you will be creating an event which lasts for days instead of hours.
- *Week Mode*: where you can see the events for the following week. There's a grid for days and time, since in this mode you **will be able** to select hours for an event, always following the grid order.
- *Work Week Mode*: currently disabled, it's the same as the week mode, but withouth the weekend days.
- *Day Mode*: you can se every hour and detail about an event in this mode for the entire day.
- *Agenda Mode*: every event specified in a table where you can read hour and event at a quick glance.

This project also features a "*backend*" folder from where the main file (calendar.jsx) will be extracting the events. It's located in `src/backend`.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
