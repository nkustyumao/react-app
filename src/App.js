import "./App.css";
import Profile from "./components/Profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./store/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
