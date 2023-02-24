import React, { useState } from "react";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  View,
} from "react-native";

import EmptyComponent from "../EmptyView";
import SpinnerLoader from "../SmallLoader";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { APP_PRIMARY_COLOR, Colors } from '../../themes/Colors';

function defaultKeyExtractor(item: any) {
  return `${item?.id}`;
}

type FlatListHandlerPropType = {
  data: Array<any>;
  loading: boolean;
  isLoading: boolean;
  listEmptyText?: string;
  shouldFetchMore?: boolean;
  meta: UseInfiniteQueryResult;
  renderItem: ListRenderItem<any>;
  HeaderComponent?: React.ReactNode;
  footerLoadingCondition?: boolean;
  keyExtractor?: (a: any) => string;
};

export default function FlatListHandler(props: FlatListHandlerPropType) {
  const {
    data,
    meta,
    isLoading,
    renderItem,
    listEmptyText,
    shouldFetchMore = true,
    footerLoadingCondition = false,
    keyExtractor = defaultKeyExtractor,
  } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchMore = () => {
    const { hasNextPage, isFetchingNextPage, fetchNextPage } = meta;
    if (shouldFetchMore && hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  function onRefresh() {
    setIsRefreshing(true);
    meta.refetch().finally(() => {
      setIsRefreshing(false);
    });
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      extraData={isRefreshing}
      keyExtractor={keyExtractor}
      {...(listEmptyText && {
        ListEmptyComponent: () =>
          isLoading ? (
            <SpinnerLoader size="large" />
          ) : (
            <EmptyComponent title={listEmptyText} />
          ),
      })}
      {...(meta && {
        refreshControl: (
          <RefreshControl
            title=""
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            tintColor={APP_PRIMARY_COLOR}
          />
        ),
        
        onRefresh: onRefresh,
        refreshing: isRefreshing,
        onEndReached: fetchMore,
        onEndReachedThreshold: 0.2,
        ListFooterComponent: () =>
          footerLoadingCondition || meta.isFetchingNextPage ? (
            <SpinnerLoader size="small" />
          ) : null,
      })}
    />
  );
}
