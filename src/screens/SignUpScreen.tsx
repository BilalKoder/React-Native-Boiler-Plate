import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Metrics from '../utility/Metrics';
import { useTranslation } from 'react-i18next';
import InputField from '../component/InputField';
import LoginLogo from '../assets/logo/mainLogo.svg';
import AppButton from '../component/Buttons/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSignupContainer from '../containers/signupContainer/SignupContainer';

console.log("helll")

export default function SignUpScreen() {
    const { t } = useTranslation(["common"])
    const { control, handleSubmit } = useSignupContainer()
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} bounces={false}>
          <View style={styles.logoContainer}>
            <LoginLogo />
          </View>
          <InputField control={control} name="Email" label={t("email")} />
          <InputField control={control} name="Password" label={t("password")} />
          <InputField control={control} name="ConfirmPassword" label={t("confirmPassword")} />
          <AppButton title={t('signUp')} onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginHorizontal: Metrics.scale(16),
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Metrics.verticalScale(50),
    }
})