import * as React from "react";

import NetInfo from "@react-native-community/netinfo";
import { AppState, AppStateStatus, Platform } from "react-native";
import { CACHE_TIME, PAGE_SIZE, STALE_TIME } from "../constants/api";
import { setItem, getItem, removeItem } from "../services/storageService";
import {
  QueryClient,
  onlineManager,
  focusManager,
  Query,
} from "@tanstack/react-query";

import {
  PersistQueryClientProvider,
  PersistedClient,
  Persister,
} from "@tanstack/react-query-persist-client";
import STORAGE_CONST from "../constants/storage";

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      getNextPageParam: (lastPage: any) => {
        if (lastPage?.filteredCount > lastPage?.offset + PAGE_SIZE) {
          return lastPage.offset + PAGE_SIZE;
        }
      },
      onError: (e) => {
        console.log("api error ", e);
      },
    },
    mutations: {
      onError: (e) => {
        console.log("api mutation error ", e);
      },
    },
  },
});

export default function ApiClientProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const createpersister = React.useCallback((key: string = "reactQuery") => {
    return {
      restoreClient: () => getItem(key),
      removeClient: () => removeItem(key),
      persistClient: (client: PersistedClient) => setItem(key, client),
    } as Persister;
  }, []);

  React.useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(Boolean(state.isInternetReachable));
      });
    });

    const appStateListener = AppState.addEventListener(
      "change",
      onAppStateChange
    );

    return () => appStateListener.remove();
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: createpersister(),
        dehydrateOptions: {
          shouldDehydrateQuery: (query: Query) => {
            return query.state.status === "success" && query.queryKey.includes(STORAGE_CONST.GET_USER);
          },
        },
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
