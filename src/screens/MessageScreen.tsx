import * as React from 'react';
import { View,Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native"
import { Bubble, Composer, GiftedChat, Send } from 'react-native-gifted-chat'
import { centerAlign } from '../themes/AppStyles';
export default function MessageScreen() {
        const [messages, setMessages] = React.useState([]);
      
        React.useEffect(() => {
          setMessages([
            {
              _id: 1,
              text: 'I think top two are',
              user: {
                _id: 2,
                name: 'React Native',
              },
            },
            {
              _id: 2,
              text: 'What is the most popular healthy meal in United States?',
              user: {
                _id: 3,
                name: 'React Native',
              },
            },
          ])
        },[])
      
        const onSend = React.useCallback((messages = []) => {
          setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        }, [])
        
  return (
    <View style={{backgroundColor:'#FFFFFF',flex:1}}>
      <View style={{backgroundColor:'#D9D9D94D',flexDirection: 'row',padding:10,paddingLeft:20,borderRadius:8,gap:5,display:'flex',marginTop:10,marginBottom:10,marginLeft:10,marginRight:10}}>
      <Image source={require('../../src/assets/logo/notification.png')}  style={{ backgroundColor:'#D6D6D6',borderRadius:100,width:24}} />
       <Text style={{ color: '#020D0B', fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 15, lineHeight: 21,fontWeight:'800',borderRadius:8 }}>
      ap-physics new course available for enrollment
      </Text> 
      </View>
          <GiftedChat
      messages={messages}
      
      onSend={messages => onSend(messages)}
      placeholder="Write your message here...."
      renderAvatar={() => null}
            listViewProps={{
              style: {
                backgroundColor: '#FFFFFF',
              },
            }}
            user={{
              _id: 2,
           }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#F0F0F0',
                borderRadius: 15,
                flexDirection: 'row',
              },
              right: {
                backgroundColor: '#20A023',
                borderTopRightRadius: 15,
                flexDirection: 'row',
                marginBottom:15
              },
            }}
            textStyle={{
              right: { fontStyle: 'normal', fontFamily: 'Poppins', fontSize: 17,fontWeight:'400',lineHeight:26 },
              left: { fontStyle: 'normal', fontFamily: 'Poppins', fontSize: 17, fontWeight: '400',lineHeight:26 }
            }}
          />
        );
      }}
      renderComposer={(props) => <Composer textInputStyle={{ backgroundColor: '#F4F4F4', borderRadius: 22.5,marginTop:10,marginBottom:10,marginLeft:10,marginRight:10,color:"#000" }} {...props} />}
      renderSend={(props) =>
        <TouchableOpacity >
          <Image style={{ width: 45, height: 45,marginBottom:10,marginRight:10 }} source={require('../../src/assets/logo/Group271.png')} />
          </TouchableOpacity>
      }
      />
    </View>
    )
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})