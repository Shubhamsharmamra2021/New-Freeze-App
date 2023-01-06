import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { RegistrationStyle } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function RegistrationScreen() {

    const navigation = useNavigation()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');

    return (
        <SafeAreaView style={RegistrationStyle.container}>
            <StatusBar
                backgroundColor="#61dafb"
                barStyle={'light-content'}
                translucent={false}
            />
            <View style={RegistrationStyle.headBgStyle}>
                <Text style={RegistrationStyle.headingText} >Registration</Text>
                <View style={RegistrationStyle.screenDotCon}>
                    <View style={RegistrationStyle.dotActive} ></View>
                    <View style={RegistrationStyle.dosInActive} ></View>
                    <View style={RegistrationStyle.dosInActive} ></View>
                </View>

            </View>
            <LinearGradient
                colors={['rgba(10,25,82,1)', 'rgba(153,51,204,1)', 'rgba(132,255,222,1)']}
                style={RegistrationStyle.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            />
            <View style={RegistrationStyle.card}>
                <View style={RegistrationStyle.cardHeadCon}>
                    <Text style={RegistrationStyle.cardHeading} >Welcome to Freeze Debt!.</Text>
                    <Text style={RegistrationStyle.cardText}>You're now on your wau to a debt free future. Let's get started!</Text>
                    <Text style={RegistrationStyle.cardText}>Don't worry - we keep all of your data safe</Text>
                </View>
                <View style={RegistrationStyle.inputIcon}>
                    <TextInput
                        value={firstName}
                        onChangeText={(e) => setFirstName(e)}
                        placeholder="First name"
                        placeholderTextColor="#9933cc"
                        style={RegistrationStyle.inputField}
                    />
                    <TextInput
                        value={lastName}
                        onChangeText={(e) => setLastName(e)}
                        placeholder="Last name"
                        placeholderTextColor="#9933cc"
                        style={RegistrationStyle.inputField}
                    />
                    <TextInput
                        value={emailAddress}
                        onChangeText={(e) => setEmailAddress(e)}
                        placeholder="Email address"
                        placeholderTextColor="#9933cc"
                        style={RegistrationStyle.inputField}
                    />
                    <TextInput
                        value={mobileNumber}
                        onChangeText={(e) => setMobileNumber(e)}
                        placeholder="Mobile number"
                        placeholderTextColor="#9933cc"
                        style={RegistrationStyle.inputField}
                    />
                    <TextInput
                        value={hearAboutUs}
                        onChangeText={(e) => setHearAboutUs(e)}
                        placeholder="Where did you hear about us?"
                        placeholderTextColor="#9933cc"
                        style={RegistrationStyle.inputField}
                    />
                </View>

                <TouchableOpacity style={RegistrationStyle.mainButton} onPress={() => { navigation.navigate('OtpScreen') }}>
                    <Text style={RegistrationStyle.mainText}  >Next</Text>
                </TouchableOpacity>
            </View>
            <View style={RegistrationStyle.footercon}>
                <TouchableOpacity>
                    <Image
                        style={RegistrationStyle.footerImg}
                        source={require('../assets/BackBlue.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={RegistrationStyle.footerImg}
                        source={require('../assets/ChatBlue.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
