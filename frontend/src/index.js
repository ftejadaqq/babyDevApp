import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { getDefaultNormalizer } from "@testing-library/dom";

// define state (starting point)
const initialState = {
  liveUrl: "https://api.montessoribymonth.com",
  // liveUrl: "http://localhost:6002", //if debugging use this
  screenMode: 0, // 0 home; 1 account(either login or signup); 2 timeline;  3 profile; 4 info icon; 5 glossaryButtons; 6 glossary; 7 noLoginInfo (bc I do not need a login)
  accountMode: 1, // 0 login; 1 signup; 2 password reset
  glossaryMode: 0, // 1 for 1-3 months; 2 - 4-6 months etc.
  signupPopupActive: false,
  passwordResetPopupActive: false,
  daysOld: 183, // placeholder
  timelinePopupActive: false,
  timelineData: [
    {
      minAge: 0,
      maxAge: 3,
      timelineImage: "timeline_upto90",
      cardClass: "card upto90",
    }, // card upto90 means upto90 days
    {
      minAge: 4,
      maxAge: 6,
      timelineImage: "timeline_upto180",
      cardClass: "card upto180",
    },
    {
      minAge: 7,
      maxAge: 9,
      timelineImage: "timeline_upto270",
      cardClass: "card upto270",
    },
    {
      minAge: 10,
      maxAge: 12,
      timelineImage: "timeline_upto360",
      cardClass: "card upto360",
    },
    {
      minAge: 13,
      maxAge: 15,
      timelineImage: "timeline_upto450",
      cardClass: "card upto450",
    },
    {
      minAge: 16,
      maxAge: 18,
      timelineImage: "timeline_upto540",
      cardClass: "card upto540",
    },
    {
      minAge: 19,
      maxAge: 21,
      timelineImage: "timeline_upto630",
      cardClass: "card upto630",
    },
    {
      minAge: 22,
      maxAge: 24,
      timelineImage: "timeline_upto720",
      cardClass: "card upto720",
    },
  ],
  // timeline cards
  timelineDescriptionData: [
    {
      minAge: 0,
      maxAge: 3,
      title: "0-3 Months",
      description1: "Rotating to holding head up to slithering",
      description2: "Instinctive to intentional hand grasping & observing",
      description3:
        "Tip: Black & white colours to start for eye muscle focus/development",
      cardClass: "card-description upto90",
    },
    {
      minAge: 4,
      maxAge: 6,
      title: "4-6 Months",
      description1: "Turning to slithering to sitting with support",
      description2: "Increased hand grasping to manipulating",
      description3:
        "Tip: Introduce more complex shapes/colours as eyes/hands develop",
      toyImage: "toy_upto180",
      cardClass: "card-description upto180",
    },
    {
      minAge: 7,
      maxAge: 9,
      title: "7-9 Months",
      description1: "Sitting to crawling to pulling up",
      description2:
        "Hand transferring to more precise finger movement to releasing",
      description3:
        "Tip: Have fun with an array of musical instruments to encourage hand/finger precision",
      cardClass: "card-description upto270",
    },
    {
      minAge: 10,
      maxAge: 12,
      title: "10-12 Months",
      description1: "Standing to walking with help to walking alone",
      description2: "Simultaneous hand movement to fine pincer movement",
      description3:
        "Tip: A walker wagon is great for practising walking, pushing & object placement",
      cardClass: "card-description upto360",
    },
    {
      minAge: 13,
      maxAge: 15,
      title: "13-15 Months",
      description1:
        "Walking up & down steps to carrying objects to categorising",
      description2:
        "Tip: Add more advanced vertical stacking & horizontal stacking",
      description3:
        "Tip: Learn about animals through a card/object matching activity",
      cardClass: "card-description upto450",
    },
    {
      minAge: 16,
      maxAge: 18,
      title: "16-18 Months",
      description1: "Pouring water to dressing self to drawing/painting",
      description2: "Tip: Start with easy to pull on boots",
      description3:
        "Tip: Reading about new practical life activities helps understanding",
      cardClass: "card-description upto540",
    },
    {
      minAge: 19,
      maxAge: 21,
      title: "19-21 Months",
      description1: "Climbing to brushing teeth to starting potty training",
      description2: "Tip: Climbing is great for gross motor skill practice",
      description3:
        "Tip: Learn about the body and toilet time using factual names",
      cardClass: "card-description upto630",
    },
    {
      minAge: 22,
      maxAge: 24,
      title: "22-24 Months",
      description1: "Using cleavers to cut to washing to putting jacket on",
      description2: "Tip: Locks & keys help improve fine pincer movement",
      description3: "Tip: Writing in sand is a useful exercise in pre-writing",
      cardClass: "card-description upto720",
    },
  ],
  // timeline card descriptions
  popupContent: [
    // *decided against having a popup for now
    // development tip and toy recommendation per month but I may change this later
    // to a tip every couple of months - therefore leaving just the 10 placeholder objects for now
    {
      daysOld: 30,
      title: "title",
      text: "this is a tip about a baby around 30 days old",
      link: "link",
    },
    {
      daysOld: 60,
      title: "title",
      text: "this is a tip about a baby around 60 days old",
      link: "link",
    },
    {
      daysOld: 90,
      title: "title",
      text: "this is a tip about a baby around 90 days old",
      link: "link",
    },
    {
      daysOld: 120,
      title: "title",
      text: "this is a tip about a baby around 120 days old",
      link: "link",
    },
    {
      daysOld: 150,
      title: "title",
      text: "this is a tip about a baby around 150 days old",
      link: "link",
    },
    {
      daysOld: 180,
      title: "title",
      text: "this is a tip about a baby around 180 days old",
      link: "link",
    },
    {
      daysOld: 210,
      title: "title",
      text: "this is a tip about a baby around 210 days old",
      link: "link",
    },
    {
      daysOld: 240,
      title: "title",
      text: "this is a tip about a baby around 240 days old",
      link: "link",
    },
    {
      daysOld: 270,
      title: "title",
      text: "this is a tip about a baby around 270 days old",
      link: "link",
    },
    {
      daysOld: 300,
      title: "title",
      text: "this is a tip about a baby around 300 days old",
      link: "link",
    },
  ],
};

// calcuates days old
const calculateDaysOld = (year, month, day) => {
  const date1 = new Date(); // date now
  const date2 = new Date(year, month - 1, day); // DOB // -1 because months start at 0

  const milliSecondsDiff = Math.abs(date1.getTime() - date2.getTime());

  const daysOld = Math.floor(milliSecondsDiff / (1000 * 60 * 60 * 24));
  return daysOld;
};

// gives daysOld and what you get back is an answer to if you should show the popup
// should I show the popup?
const setPopupActiveStatus = (daysOld) => {
  if (daysOld !== 0 && daysOld % 30 === 0) {
    // child must not be 0 days old and their days old must be divisible by 30
    // since the popup will be monthly or every 30 days
    return true;
  } else return false;
};

// when the programme is reopended, it reads the data off the disc/local storage so it can set the state back up
const discData = JSON.parse(localStorage.getItem("accountData")); // turn back to an object // local storage only takes strings so you have to parse/turn it back
// checks that there is data on the disc before it tries to use it

if (discData != null) {
  // we have data on the disc so we need to send the user straight to the timeline
  initialState.screenMode = 2;
  // we need to calculate how many days old the child is because the time might have changed from when the user last used the app
  const daysOld = calculateDaysOld(discData.year, discData.month, discData.day);

  // read the data from the disc that contains dob
  // daysOld is no longer accurate, so you then recalculate the daysOld using the
  // calculateDaysOld function
  initialState.daysOld = daysOld;

  initialState.dOB = discData.year + "/" + discData.month + "/" + discData.day;

  initialState.babyName = discData.babyName;
  // initialState.babyNameInitial = discData.babyName.charAt(0); -- not using now

  // gets answer from if you should show the popup and stores it in the initial state
  initialState.timelinePopupActive = setPopupActiveStatus(daysOld);
}

// reducer function which manipulates the state
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SCREEN_MODE":
      return { ...state, screenMode: action.screenMode };
    case "SET_ACCOUNT_MODE":
      return { ...state, accountMode: action.accountMode };
    case "SET_GLOSSARY_MODE":
      return { ...state, glossaryMode: action.glossaryMode };
    case "SET_SIGNUP_POPUP_ACTIVE":
      return { ...state, signupPopupActive: !state.signupPopupActive };
    case "SET_PASSWORD_RESET_POPUP_ACTIVE":
      return {
        ...state,
        passwordResetPopupActive: !state.passwordResetPopupActive,
      };
    // case "SET_TIMELINE_POPUP_ACTIVE":
    //   return { ...state, timelinePopupActive: !state.timelinePopupActive };
    case "SET_NEW_ACCOUNT":
      // sets profile intial icon to first letter of babyName
      // sets profile info
      // calculates days old from DOB in signup component
      // const babyNameInitial = action.babyName.charAt(0); -- not using now
      const babyName = action.babyName;

      const daysOld = calculateDaysOld(action.year, action.month, action.day);

      const dOB = action.year + "/" + action.month + "/" + action.day;

      console.log(daysOld);
      const accountData = action; // comment
      accountData.daysOld = daysOld;

      // once the user signs up it stores the data on the disc
      localStorage.setItem("accountData", JSON.stringify(accountData)); // data collected gets turned into a string and put on the local storage disc

      return {
        ...state,
        daysOld: daysOld,
        screenMode: 2,
        // babyNameInitial: babyNameInitial, -- not using now
        babyName: babyName,
        dOB: dOB,
        timelinePopupActive: setPopupActiveStatus(daysOld),
      };
    default:
      return state;
  }
}

// create store by calling on redux using createStore
const store = createStore(reducer);

// so our components can access the store we wrap the entire app
// in Provider, as we'd do for reuter with BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
