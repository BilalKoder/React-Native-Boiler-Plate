import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import Metrics from '../utility/Metrics';
import { useTranslation } from 'react-i18next';
import InputField from '../component/InputField';
import Input from '../component/Input';
import LoginLogo from '../assets/logo/mainLogo.svg';
import EmailIcon from '../assets/logo/email.png';
import PasswordIcon from '../assets/logo/password.png';
import AppButton from '../component/Buttons/AppButton';
import useLoginContainer from '../containers/loginContainer/LoginContainer';
import { Colors, Fonts } from '../themes';
import { navigate } from '../services/navigationService';
import NavigationRoutes from '../navigators/NavigationRoutes';
import AnimatedSplash from "react-native-animated-splash-screen";
import App from '../../App';

export default function SplasScreen() {
    const { t } = useTranslation(["common"])
    const [titleText, setTitleText] = React.useState("Tutor Of Dragon");
    const { control, handleSubmit, handleOnSignUp } = useLoginContainer();
   
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} bounces={false}>
          <View style={styles.logoContainer}>
            <LoginLogo />
          </View>
           
         </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight:5,
        paddingLeft:5,
        marginVertical: Metrics.verticalScale(40),

    },
    content: {
        marginHorizontal: Metrics.scale(16),
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Metrics.verticalScale(320),
    },
    titleText: {
      ...Fonts.Medium(22, "#4E5654"),
      fontWeight: '600',
      textAlign: 'center',
      paddingBottom:20
    },
    inputStyle:{
      paddingVertical:Metrics.verticalScale(4),
      paddingHorizontal:Metrics.scale(6),
      borderRadius: 8, 
      borderWidth: 1,
      borderColor:'#4e56544d',
    }
})