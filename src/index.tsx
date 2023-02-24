import * as React from "react";

import "./translationService/index";
import AuthNavigator from "./AuthNavigator";
import ApiClientProvider from "./APIServices/Client";
import LoginProvider from "./contexts/loginContext/loginProvider";
import ErrorBoundary from "./component/ErrorBoundries/ErrorBoundries";
import { Spinner } from "@chakra-ui/react";

export default function App() {
  return (
    <ErrorBoundary>
      <ApiClientProvider>
        <LoginProvider>
          <AuthNavigator />
        </LoginProvider>
        {/* <Spinner /> */}
      </ApiClientProvider>
    </ErrorBoundary>
  );
}
