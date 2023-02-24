import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
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
import { useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import useOtpContainer from '../containers/otpContainer/OtpContainer';

export default function OtpVerification() {
    const { t } = useTranslation(["common"])
    const [titleText, setTitleText] = React.useState("Enter OTP");
    const { control, handleSubmit ,value,
      setValue } = useOtpContainer();
    const CELL_COUNT = 4;


    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} bounces={false}>
          <View style={styles.logoContainer}>
            <LoginLogo />
          </View>
            <Text style={styles.titleText} >
              {titleText}
            </Text>
          {/* <InputField control={control} name="Otp"  containerStyle={{borderRadius: 8,borderBottomWidth: 1, borderWidth: 1,padding:5,opacity:0.8}}  />  */}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <AppButton title={t('submit')} style={{marginVertical:10,borderRadius: 8,height:45}}  textStyle={{fontSize:18,fontWeight:600,lineHeight:22}}  onPress={handleSubmit}  />
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
      ...Fonts.Medium(20, "#4E5654"),
      fontWeight: '600',
      textAlign: 'center',
      paddingBottom:20
    },
    inputStyle:{
      borderWidth: 1,
      borderColor:'#4e5654',
      borderRadius: 6
    },
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      marginTop: 20,
      marginBottom: 20,
      width: 280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: Colors.APP_PRIMARY_COLOR,
      borderBottomWidth: 2,
    },
  
})