import { View, Text, TouchableOpacity, Image, StatusBar, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { DashboardStyle } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={DashboardStyle.container}>
            <StatusBar
                backgroundColor="#61dafb"
                barStyle={'light-content'}
                translucent={false}
            />
            <View style={DashboardStyle.headBgStyle}>
                <Text style={DashboardStyle.mainHeadingText} >Dashboard</Text>
            </View>
            <LinearGradient
                colors={['rgba(10,25,82,1)', 'rgba(153,51,204,1)', 'rgba(132,255,222,1)']}
                style={DashboardStyle.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            />
            <View style={DashboardStyle.dasboardCard}>
                <ScrollView style={DashboardStyle.scrollViewStyle}>
                    <View style={DashboardStyle.secContainer}>
                        <Text style={DashboardStyle.headingText} >Your details:</Text>
                        <View style={DashboardStyle.mainSubCard} >
                            <View style={DashboardStyle.subCard}>
                                <Image
                                    style={DashboardStyle.cardImg}
                                    source={require('../assets/AccountBlue.png')}
                                />
                                <Text style={DashboardStyle.subCardText}> My Account</Text>
                            </View>
                        </View>
                    </View>
                    <View style={DashboardStyle.secContainer}>
                        <Text style={DashboardStyle.headingText} >Your progress:</Text>
                        <View style={DashboardStyle.mainSubCard} >
                            <View style={DashboardStyle.subCard}>
                                <Image
                                    style={DashboardStyle.cardImg}
                                    source={require('../assets/DebtBlue.png')}
                                />
                                <Text style={[DashboardStyle.subCardText, DashboardStyle.flex]}> Your Debts</Text>
                                <TouchableOpacity style={{ direction: 'rtl' }}>
                                    <Image
                                        style={DashboardStyle.cardImg}
                                        source={require('../assets/CheckboxTick.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[DashboardStyle.mainSubCard,]} >
                            <View style={DashboardStyle.subCard}>
                                <Image
                                    style={DashboardStyle.cardImg}
                                    source={require('../assets/InExBlue.png')}
                                />
                                <Text style={[DashboardStyle.subCardText, DashboardStyle.flex]}>Income & Expenditure</Text>
                                <TouchableOpacity style={{ direction: 'rtl' }}>
                                    <Image
                                        style={DashboardStyle.cardImg}
                                        source={require('../assets/CheckboxGrey.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={DashboardStyle.mainSubCard} >
                            <View style={DashboardStyle.subCard}>
                                <Image
                                    style={DashboardStyle.cardImg}
                                    source={require('../assets/AssetsGrey.png')}
                                />
                                <Text style={[DashboardStyle.subCardText, DashboardStyle.flex,{color:'#92919A'}]}>Your Assets</Text>
                                <TouchableOpacity style={{ direction: 'rtl' }}>
                                    <Image
                                        style={DashboardStyle.cardImg}
                                        source={require('../assets/CheckboxGrey.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={DashboardStyle.paddingBottom}>
                        <Text style={DashboardStyle.headingText} >Your solutions:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={DashboardStyle.subFootercon} >
                                <View style={DashboardStyle.subFooter1TextCon} >
                                    <Text style={DashboardStyle.subFooter1Text}> Compare solutions side by side and choose the one that works for you.</Text>
                                </View>
                                <View style={DashboardStyle.subFooter2TextCon} >
                                    <Text style={DashboardStyle.subFooter2Text}>Debt Solutions</Text>
                                    <Image
                                        style={DashboardStyle.lockImg}
                                        source={require('../assets/Padlock.png')}
                                    />
                                </View>
                            </View>

                            <View style={DashboardStyle.subFootercon} >
                                <View style={DashboardStyle.subFooter1TextCon} >
                                    <Text style={DashboardStyle.subFooter1Text}>Upload our documents and start processing your solution.</Text>
                                </View>
                                <View style={DashboardStyle.subFooter2TextCon} >
                                    <Text style={DashboardStyle.subFooter2Text}>Documents</Text>
                                    <Image
                                        style={DashboardStyle.lockImg}
                                        source={require('../assets/Padlock.png')}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>
            <View style={DashboardStyle.footercon}>
                <TouchableOpacity onPress={() => { navigation.navigate('OtpScreen') }}>
                    <Image
                        style={DashboardStyle.footerImg}
                        source={require('../assets/BackBlue.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={DashboardStyle.footerImg}
                        source={require('../assets/HomeBlue.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={DashboardStyle.footerImg}
                        source={require('../assets/ChatBlue.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// email: 'testpracticaluser001@mailinator.com',
// password: 'Test@123'