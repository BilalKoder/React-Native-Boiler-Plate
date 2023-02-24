import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { request } from '../actions/ServiceAction';
import { API_CONFIG, PAGE_SIZE } from '../constants/api';
import { SERVICE_CONFIG_URLS } from '../constants/api_urls';
import STORAGE_CONST from '../constants/storage';
import { getItem } from '../services/storageService';
import Utils from '../utility/Utils';
import { LogBox } from 'react-native';

export function userGetNotifications(
  options?: {},
  params?: Object
) {
  return useInfiniteQuery(
    ["NOTIFICATION_DATA"],
    async ({ pageParam = 1 }) => {
      console.log("pageParam: " + pageParam);
      
      const { data, metadata } = await request({
        url:SERVICE_CONFIG_URLS.APP.NOTIFCATIONS ,
        method: API_CONFIG.GET,
        params: {
          ...params,
          page: pageParam
        },
        showLoader: true,
      });

  
      
      return {
        data,
        metadata
      };
    },
    {...options, cacheTime : 0, staleTime : 0}
  );
}
