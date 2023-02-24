import Metrics from '../../utility/Metrics';
import moment from 'moment';
import {InputProps} from '@chakra-ui/react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Image, Text} from 'react-native-svg';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import {navigate} from '../../services/navigationService';

enum Status {
  SEEN = 'SEEN',
  UNSEEN = 'UNSEEN',
}

interface INotification {
  id: number;
  attributes: {
    body: any;
    status: Status;
    createdAt: string;
  };
}

interface INotificationCardProps {
  notification: INotification;
}
const NotificationCard = (props: INotificationCardProps) => {
  const {notification} = props;

  return (
    <Pressable
      key={notification.id}
      onPress={() => navigate(NavigationRoutes.APP_STACK.CHAT_SCREENS)}
      style={styles.innerContainer}>
      <View
        style={{
          padding: Metrics.scale(10),
        }}>
        <View
          style={{
            backgroundColor: '#F4F4F4',
            borderRadius: Metrics.scale(100),
            width: Metrics.scale(50),
            height: Metrics.scale(50),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../src/assets/logo/notification.png')} />
        </View>
      </View>
      <View
        style={{padding: Metrics.scale(10), paddingBottom: Metrics.scale(15)}}>
        <Text style={styles.item}>{notification?.attributes?.body}</Text>
        <Text style={styles.itemTwo}>{'Kindly recheck the calendar'}</Text>
        <Text style={styles.itemTwoDate}>
          {notification?.attributes?.createdAt
            ? moment(notification?.attributes?.createdAt).format(
                'MMMM Do YYYY, h:mm:ss a',
              )
            : ''}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: Metrics.scale(50),
          paddingBottom: Metrics.scale(25),
          paddingRight: Metrics.scale(15),
        }}>
        {notification?.attributes?.status == 'UNSEEN' && (
          <View
            style={{
              backgroundColor: '#1FA022',
              borderRadius: Metrics.scale(100),
              width: Metrics.scale(12),
              height: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
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
    alignItems: 'center',
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
  emptyData: {
    top: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: Metrics.scale(20),
    color: '#000000',
    opacity: 0.5,
    justifyContent: 'center',
  },
  itemTwoDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: Metrics.scale(20),
    color: '#00000080',
    paddingTop: Metrics.scale(5),
  },

  itemThree: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: Metrics.scale(24),
    color: '#20A023',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
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
    textTransform: 'capitalize',
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


export default NotificationCard;