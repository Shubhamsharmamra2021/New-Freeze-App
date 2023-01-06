import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { OtpStyle } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function OtpScreen() {

    const navigation = useNavigation()

    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const [otp6, setOtp6] = useState('');

    return (
        <SafeAreaView style={OtpStyle.container}>
            <StatusBar
                backgroundColor="#61dafb"
                barStyle={'light-content'}
                translucent={false}
            />
            <View style={OtpStyle.headBgStyle}>
                <Text style={OtpStyle.headingText} >Registration</Text>
                <View style={OtpStyle.screenDotCon}>
                    <View style={OtpStyle.dosInActive} ></View>
                    <View style={OtpStyle.dotActive} ></View>
                    <View style={OtpStyle.dosInActive} ></View>
                </View>

            </View>
            <LinearGradient
                colors={['rgba(10,25,82,1)', 'rgba(153,51,204,1)', 'rgba(132,255,222,1)']}
                style={OtpStyle.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            />
            <View style={OtpStyle.card}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: '#9933cc' }} >Please enter your registration code</Text>
                    <Text style={{ fontSize: 14, color: '#0A1952', marginTop: 5 }}>You should have received a six digit code to the number you provided - this may take a few minutes to come through.</Text>
                    <Text style={{ fontSize: 14, color: '#0A1952', marginTop: 5 }}>We do this to keep the information you provide us with secure.</Text>
                </View>
                <View style={OtpStyle.inputOtpIcon}>
                    <TextInput
                        value={otp1}
                        onChangeText={(e) => setOtp1(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                    <TextInput
                        value={otp2}
                        onChangeText={(e) => setOtp2(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                    <TextInput
                        value={otp3}
                        onChangeText={(e) => setOtp3(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                    <TextInput
                        value={otp4}
                        onChangeText={(e) => setOtp4(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                    <TextInput
                        value={otp5}
                        onChangeText={(e) => setOtp5(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                    <TextInput
                        value={otp6}
                        onChangeText={(e) => setOtp6(e)}
                        style={OtpStyle.inputOtpField}
                        maxLength={1}
                    />
                </View>
                <View style={OtpStyle.didNotGetOtpCon}>
                    <Text style={OtpStyle.didNotText}>Didn't receive a text message?</Text>
                    <TouchableOpacity>
                        <Text style={OtpStyle.resendCodeText} >Resend code</Text>
                    </TouchableOpacity>
                </View>
                <View style={OtpStyle.mainButtonCon}>
                    <TouchableOpacity style={OtpStyle.mainButton} onPress={() => { navigation.navigate('DashboardScreen') }}>
                        <Text style={OtpStyle.mainText}  >Next</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={OtpStyle.footercon}>
                <TouchableOpacity onPress={() => { navigation.navigate('RegistrationScreen') }}>
                    <Image
                        style={OtpStyle.footerImg}
                        source={require('../assets/BackBlue.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={OtpStyle.footerImg}
                        source={require('../assets/ChatBlue.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
