import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { request } from '../actions/ServiceAction';
import { API_CONFIG, PAGE_SIZE } from '../constants/api';
import { SERVICE_CONFIG_URLS } from '../constants/api_urls';
import STORAGE_CONST from '../constants/storage';
import { getItem } from '../services/storageService';
import Utils from '../utility/Utils';

const token = getItem(STORAGE_CONST.TOKEN)

export async function updateNotifications(
  receivedData?:any,
  userId?:number
) {
     try {
      const data = await request({
        url:`${SERVICE_CONFIG_URLS.APP.NOTIFCATIONS_UPDATE}/${userId}`,
        method: API_CONFIG.PATCH,
        params: receivedData,
        showLoader: true,
      });
      console.log("in query................", data)

      return data;
     } catch (error) {
      return error;
     }
  
}
