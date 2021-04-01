import Darkmode from "darkmode-js";

const options = {
  top: "0px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "4.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#ffff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "click ", // default: ''
  autoMatchOsTheme: true, // default: true
};
const darkmode = new Darkmode(options);

export const initialState = {
  darkJs: darkmode,
  loading: false,
  // AOS: null,
};

const reducer = (state = initialState, action) => {
  console.log("🔫", action);
  // console.log("🕶️", state.darkMode);
  switch (action.type) {
    case "SET_OPTIONS":
      state = {
        ...state,
        darkJs: action.darkJs,
      };
      break;
    case "SET_LOADING":
      state = {
        ...state,
        loading: action.loading,
      };
      break;
    // case "SET_AOS":
    //   state = {
    //     ...state,
    //     AOS: action.AOS,
    //   };
    //   break;
    default:
      break;
  }

  return state;
};

export default reducer;
