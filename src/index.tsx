import * as React from "react";

import "./translationService/index";
import AuthNavigator from "./AuthNavigator";
import ApiClientProvider from "./APIServices/Client";
import LoginProvider from "./contexts/loginContext/loginProvider";
import ErrorBoundary from "./component/ErrorBoundries/ErrorBoundries";

export default function App() {
  return (
    <ErrorBoundary>
      <ApiClientProvider>
        <LoginProvider>
          <AuthNavigator />
        </LoginProvider>
      </ApiClientProvider>
    </ErrorBoundary>
  );
}
