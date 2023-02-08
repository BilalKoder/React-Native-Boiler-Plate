import React, { useState } from 'react';
import { View,Text, StyleSheet, SafeAreaView } from "react-native"
import { GiftedChat,InputToolbar,Bubble,Send  } from 'react-native-gifted-chat'


export default function MessageScreen() {

    function renderSend(props) {
        return (
          <Send {...props}>
            <View style={styles.sendingContainer}>
          
            </View>
          </Send>
        );
      }

    // Step 2: add a helper method

  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

    // Step 3: add a helper method

   
    const [messages, setMessages] = useState([
        /**
         * Mock message data
         */
        // example of system message
        // {
        //   _id: 0,
        //   text: 'New room created.',
        //   createdAt: new Date().getTime(),
        //   system: true
        // },
        // example of chat message
        {
          _id: 1,
          text: 'Henlo!',
          createdAt: new Date().getTime(),
          user: {
            _id: 2,
            name: 'Test User'
          }
        }
      ]);
    
      // helper method that is sends a message
      function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
      }
    
      return (
        <GiftedChat
          messages={messages}
          onSend={newMessage => handleSend(newMessage)}
          user={{ _id: 1 }}
          renderBubble={renderBubble}
          placeholder='Write your message here...'
          alwaysShowSend
        // renderSend={renderSend}
        />
      );
    }

    // Step 5: add corresponding styles
const styles = StyleSheet.create({
    sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });