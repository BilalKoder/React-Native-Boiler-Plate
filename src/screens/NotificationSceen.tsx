import React,{useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView, FlatList, Text, Image, ImageBackground, Alert } from 'react-native';
import Metrics from '../utility/Metrics';
import { useTranslation } from 'react-i18next';
import InputField from '../component/InputField';
import LoginLogo from '../assets/logo/mainLogo.svg';
import AppButton from '../component/Buttons/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSignupContainer from '../containers/signupContainer/SignupContainer';
import NavigationRoutes from '../navigators/NavigationRoutes';
import { navigate } from '../services/navigationService';
import { Pressable } from 'react-native';
import loginContext from '../contexts/loginContext';
import { LoginContext } from '../contexts/loginContext/types';
import { getItem } from '../services/storageService';
import STORAGE_CONST from '../constants/storage';
import DefaultImage from '../../src/assets/logo/Ellipse2309.png';
import { useQuery } from '@tanstack/react-query';
import { Spinner,Progress, Box} from "@chakra-ui/react";
import axios from 'axios';
import { userGetNotifications } from '../apiCalls/getNotifications';
import moment from 'moment'
import FlatListHandler from '../component/FlatlistHandler';
import { APP_PRIMARY_COLOR } from '../themes/Colors';
import { updateNotifications } from '../apiCalls/updateNotifications';

const normalizeArray = (data) => {
  const dump = data?.pages?.flatMap((item) => item?.data);
  return dump;
};

export default function NotificationScreen() {

useEffect (()=> {
  checkUserTime()
},[])

  function checkUserTime(){

    const today = new Date()
    const curHr = today.getHours()
  
    if (curHr < 12) {
      return 'Morning'
    } else if (curHr < 18) {
      return 'Afternoon'
    } else {
     return 'Evening'
    }
  }


  const user = getItem(STORAGE_CONST.GET_USER)
  const params ={
    to_user: user?.id,
    notificationType:"MOBILE",
  }
  const { data = [], isLoading, isSuccess, ...meta } = userGetNotifications(
    // {
    //   select: normalizeArray,
    // },
    params);

  

    const markAllAsRead = async () =>{
      
      const notify = normalizeArray(data)
      if(notify){
        const dataIds = notify?.map(element => element?.id);
        const payload ={
          notification_id :dataIds,
          notificationType: "MOBILE"
        }
  
         const dataT = await updateNotifications(payload,user?.id);

         meta.refetch()

      }
     }
   

  const RenderListItem = React.useCallback(
    ({item}: any, index) => { 
      return (
        <Pressable key={'test-'+index} onPress={() => navigate(NavigationRoutes.APP_STACK.CHAT_SCREENS)} style={styles.innerContainer}>
        <View style={{
          padding: Metrics.scale(10),
        }}  >
          <View style={{ backgroundColor: '#F4F4F4', borderRadius: Metrics.scale(100), width: Metrics.scale(50), height: Metrics.scale(50), display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("../../src/assets/logo/notification.png")} />
          </View>
        </View>
        <View style={{ padding: Metrics.scale(10), paddingBottom: Metrics.scale(15) }}>
          <Text style={styles.item}>{item?.attributes?.body}</Text>
          <Text style={styles.itemTwo}>{item?.attributes?.lastMessage??'No recent chat'}</Text>
          <Text style={styles.itemTwoDate}>{item?.attributes?.createdAt ?  moment(item?.attributes?.createdAt).format("MMMM Do YYYY, h:mm:ss a"): ''}</Text>
        </View>
        <View style={{
          display: 'flex',
          alignItems: 'center', flexDirection: 'row', paddingLeft: Metrics.scale(50), paddingBottom: Metrics.scale(25),paddingRight:Metrics.scale(15)
        }}>
          {item?.attributes?.status == 'UNSEEN' && (
            <View style={{ backgroundColor: '#1FA022', borderRadius: Metrics.scale(100), width: Metrics.scale(12), height: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}></View>
          )}
        </View>
      </Pressable>
      );
    },
    [data],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ ...styles.innerContainerHead }}>
          <View style={styles.innerContainerHead}>
            <View style={{ padding: Metrics.scale(10) }}>
              <Image source={user?.profileImage ? { uri: user?.profileImage } : DefaultImage}
                style={{ width: 52, height: 52, borderRadius: 50 }}
              />
            </View>
            <View>
              <Text style={styles.itemTwoTop}>Good {checkUserTime()}</Text>
              <Text style={styles.itemTop}>{user?.name.toUpperCase()}</Text>
            </View>
          </View>
          <View >
            <AppButton  title={"Mark All as read"} style={styles.itemThree} textStyle={{color:APP_PRIMARY_COLOR,fontSize:15}} onPress={markAllAsRead}/>
          </View>
        </View>
        <FlatListHandler
          data={normalizeArray(data)}
          renderItem={RenderListItem}
          contentContainerStyle={{
            // marginHorizontal: Metrics.scale(22),
          }}
          meta={meta}
          listEmptyText={"No data Found"}
          // meta={meta}
        
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Metrics.scale(0),


  },

  innerContainer: {
    flexDirection: 'row',
    height: Metrics.scale(100),

  },

  innerContainerHead: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    height: Metrics.scale(100),
    alignItems:'center'
  },

  item: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: Metrics.scale(22),
    color: '#000000',
  },

  itemTwo: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: Metrics.scale(20),
    color: '#000000',
    opacity: 0.5,
  },
  emptyData:{
    top:10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: Metrics.scale(20),
    color: '#000000',
    opacity: 0.5,
    justifyContent: 'center'
  },
  itemTwoDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: Metrics.scale(20),
    color: '#00000080',
    paddingTop: Metrics.scale(5)
  },

  itemThree: {
    backgroundColor: 'transparent',
    marginRight: Metrics.scale(20),
  },
  backImg: {
    paddingLeft: Metrics.scale(70),
    paddingTop: Metrics.scale(70),

  },
  itemTop: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: Metrics.scale(22),
    color: '#000000',
    top: 5,
    textTransform: 'capitalize'
  },

  itemTwoTop: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: Metrics.scale(24),
    color: '#757575',
  },

});