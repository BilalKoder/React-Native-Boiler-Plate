import React from 'react';
import {View, StyleSheet,ScrollView,FlatList ,Text,Image,ImageBackground} from 'react-native';

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

const persons = [
    {
      id: "1",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
    },
    {
      id: "2",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "3",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "4",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "5",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "6",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "7",
        name: "Class has been reschedule",
        nameTwo:'Kindly recheck the calendar',
      
    },
    {
      id: "8",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "9",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "10",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
  
    {
      id: "11",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "12",
        name: "Class has been reschedule",
        nameTwo: 'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
        
      
    },
    {
      id: "13",
        name: "Class has been reschedule",
        nameTwo:'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
      
    },
    {
      id: "14",
        name: "Class has been reschedule",
        nameTwo:'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
      
    },
    {
      id: "15",
        name: "Class has been reschedule",
        nameTwo:'Kindly recheck the calendar',
        nameThree :'04-Jan-2023 06:00 PM',
      
    },
  ];
export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <View style={styles.innerContainer}>
                    <View style={{
        
        padding: Metrics.scale(10),
      }}>
                        <Image source={require("../../src/assets/logo/Ellipse2309.png")} />
                    </View>
                    <View style={{
        padding: Metrics.scale(10),

        
      }}>
                        <Text style={styles.itemTwoTop}>Good Morning</Text>
                        <Text style={styles.itemTop}>Andrew Parker</Text>
                    </View>
                    <View >
                    <Text style={styles.itemThree}>Mark All as read</Text>

                    </View>
                    
            </View>
          {persons.map((person) => {
            return (
                <Pressable key={person.id} onPress={()=> navigate(NavigationRoutes.AUTH_STACK.CHAT_SCREENS)} style={styles.innerContainer}>
                    <View style={{
                  padding: Metrics.scale(10),
                }}  > 
                  <View style={{ backgroundColor: '#F4F4F4', borderRadius: Metrics.scale(100), width: Metrics.scale(50), height: Metrics.scale(50), display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                  <Image source={require("../../src/assets/logo/notification.png")} />

                </View>
                    </View>
                    <View style={{padding: Metrics.scale(10),paddingBottom: Metrics.scale(15)}}>
                        <Text style={styles.item}>{person.name}</Text>
                        <Text style={styles.itemTwo}>{person.nameTwo}</Text>
                        <Text style={styles.itemTwoDate}>{person.nameThree}</Text>    
                    </View>
                <View style={{
                  display: 'flex',
                alignItems: 'center',flexDirection:'row',paddingLeft:Metrics.scale(50),paddingBottom:Metrics.scale(25)}}>
                  <View style={{ backgroundColor: '#1FA022', borderRadius: Metrics.scale(100), width: Metrics.scale(12), height: 10, display: 'flex', justifyContent: 'center', alignItems:'center'}}></View>
                    </View>
                    
            </Pressable>
            );
          })}
        </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingRight:5,
        // paddingLeft:5,
        // marginVertical: Metrics.verticalScale(40),

    },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    //#FFFFFF
    paddingTop:Metrics.scale(20),


  },
  innerContainer: {
    flexDirection: 'row',
    // display: 'flex',
    height: Metrics.scale(100),
    // display:'flex',
    // justifyContent: 'flex-start',
    // alignItems:'center'
 
        
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
  itemTwoDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: Metrics.scale(20),
    color: '#00000080',
    paddingTop:Metrics.scale(5)
  },
    
  itemThree: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: Metrics.scale(24),
    color: '#20A023',
    marginTop: Metrics.scale(30),
    display: 'flex',
    alignItems: 'center',
    flexDirection:'row',
    paddingLeft:Metrics.scale(20),
    paddingBottom:Metrics.scale(20)
  },
  backImg:{
    paddingLeft: Metrics.scale(70),
    paddingTop:Metrics.scale(70),
    
  },
  itemTop: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: Metrics.scale(22),
    color: '#000000',
    top:10

  },
    
  itemTwoTop: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: Metrics.scale(24),
    color: '#000000',
    top:5

  },
    
});