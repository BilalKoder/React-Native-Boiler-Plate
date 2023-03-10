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
import useResetContainer from "../containers/resetContainer/ResetContainer";

export default function ResetPassword() {
    const { t } = useTranslation(["common"])
    const [titleText, setTitleText] = React.useState("Reset Password");
    // const { control, handleSubmit, handleOnSignUp } = useLoginContainer();
    const { control, handleSubmit} = useResetContainer();
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} bounces={false}>
          <View style={styles.logoContainer}>
            <LoginLogo />
          </View>
            <Text style={styles.titleText} >
              {titleText}
            </Text>
          <InputField control={control} placeholder="New Password" name="NewPassword" wrapperStyle={styles.inputStyle}  LeftIcon={PasswordIcon}  />
          <InputField control={control} placeholder="Confirm New Password" name="ConfirmNewPassword" wrapperStyle={styles.inputStyle}  LeftIcon={PasswordIcon}  />
          <AppButton title={t('updatePassword')} onPress={handleSubmit} style={{marginVertical:10,borderRadius: 8,height:Metrics.verticalScale(58)}}  textStyle={{fontSize:18,fontWeight:600,lineHeight:22}}/>
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
        marginVertical: Metrics.verticalScale(50),
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