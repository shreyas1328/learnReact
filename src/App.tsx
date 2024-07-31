import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import AppRouter from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/langConfig";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n} >
          <AppRouter />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
