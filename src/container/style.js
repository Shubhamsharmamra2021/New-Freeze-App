import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const RegistrationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headBgStyle: {
        alignItems: "center",
        width: width * 1,
        height: height * 0.25,
        backgroundColor: '#0A1952',
    },
    linearGradient: {
        height: 10,
        width: width * 1
    },
    headingText: {
        color: '#fff',
        fontSize: 36,
        paddingTop: 80
    },
    screenDotCon: {
        flexDirection: 'row',
        paddingTop: 10
    },
    dotActive: {
        width: 11,
        height: 11,
        borderRadius: 50,
        backgroundColor: '#84ffde',
        marginLeft: 7
    },
    dosInActive: {
        width: 11,
        height: 11,
        borderRadius: 50,
        backgroundColor: '#cdd1d3',
        marginLeft: 7
    },
    card: {
        width: "100%",
        height: height * 0.70,
        alignItems: "center",
        backgroundColor: "#f6f8fa",
        overflow: "hidden",
    },
    cardHeadCon: {
        marginBottom: 10
    },
    cardHeading: {
        fontSize: 18,
        color: '#9933cc'
    },
    cardText: {
        fontSize: 14,
        color: '#0A1952',
        marginTop: 5
    },
    inputIcon: {
        width: "100%",
        marginBottom: 35,
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    inputField: {
        marginTop: 10,
        marginBottom: 5,
        padding: 20,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 0,
        borderColor: "#cccccc",
        backgroundColor: "#ffffff",
        color: "#0A1952",
        borderStyle: "solid",
        borderRadius: 27,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.02,
        shadowRadius: 5,
        paddingHorizontal: 25
    },
    mainButtonCon: {
        paddingBottom: height * 0.10
    },
    mainButton: {
        borderRadius: 8,
        backgroundColor: "#cdd1d3",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500',

    },
    footercon: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 40
    },
    footerImg: {
        width: 30,
        height: 30
    }

})

export const OtpStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headBgStyle: {
        alignItems: "center",
        width: width * 1,
        height: height * 0.25,
        backgroundColor: '#0A1952',
    },
    linearGradient: {
        height: 10,
        width: width * 1
    },
    headingText: {
        color: '#fff',
        fontSize: 36,
        paddingTop: 80
    },
    screenDotCon: {
        flexDirection: 'row',
        paddingTop: 10
    },
    dotActive: {
        width: 11,
        height: 11,
        borderRadius: 50,
        backgroundColor: '#84ffde',
        marginLeft: 7
    },
    dosInActive: {
        width: 11,
        height: 11,
        borderRadius: 50,
        backgroundColor: '#cdd1d3',
        marginLeft: 7
    },
    card: {
        width: "100%",
        height: height * 0.70,
        alignItems: "center",
        backgroundColor: "#f6f8fa",
        overflow: "hidden",
    },
    inputOtpIcon: {
        width: "100%",
        marginVertical: 60,
        textAlign: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },
    inputOtpField: {
        width: 34,
        height: 34,
        fontSize: 16,
        marginHorizontal: 4.5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#CDD1D3",
        backgroundColor: "#ffffff",
        color: "#9933cc",
        borderStyle: "solid",
        borderRadius: 27,
        elevation: 0,
    },
    mainButton: {
        borderRadius: 8,
        backgroundColor: "#cdd1d3",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500',

    },
    didNotGetOtpCon: {
        alignItems: 'center'
    },
    didNotText: {
        fontSize: 14,
        color: '#0A1952',
        marginTop: 5
    },
    resendCodeText: {
        fontSize: 18,
        color: '#9933cc',
        marginTop: 10
    },
    mainButtonCon: {
        paddingTop: height * 0.10,
        paddingBottom: height * 0.10
    },
    footercon: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 40
    },
    footerImg: {
        width: 30,
        height: 30
    }
})

export const DashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headBgStyle: {
        alignItems: "center",
        width: width * 1,
        height: height * 0.25,
        backgroundColor: '#0A1952',
    },
    linearGradient: {
        height: 10,
        width: width * 1
    },
    dasboardCard: {
        width: "100%",
        height: height * 0.70,
        backgroundColor: "#f6f8fa",
        overflow: "hidden",
    },
    mainHeadingText: {
        color: '#fff',
        fontSize: 36,
        paddingTop: 90
    },
    scrollViewStyle: {
        padding: 25
    },
    secContainer: {
        marginBottom: 10
    },
    headingText: {
        fontSize: 18,
        color: '#9933cc'
    },
    mainSubCard: {
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 35,
        padding: 10,
        marginVertical: 10
    },
    subCard: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subCardText: {
        textAlign: 'left',
        color: '#0A1952',
        fontSize: 16,
        marginLeft: 10
    },
    selectedCard: {
        borderColor: '#71FFD9',
        borderWidth: 2
    },
    flex: {
        flex: 1
    },
    cardImg: {
        width: 50,
        height: 50
    },
    paddingBottom: {
        paddingBottom: 40
    },

    subFootercon: {
        flex: 1,
    },

    subFooter1TextCon: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 7,
        paddingVertical: 19
    },

    subFooter1Text: {
        textAlign: 'center',
        color: '#0A1952',
        fontSize: 12,
    },

    subFooter2TextCon: {
        backgroundColor: '#CDD1D3',
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: Platform.OS === 'ios' ? width * 0.04 : width * 0.03
    },

    subFooter2Text: {
        fontSize: 14,
        textAlign: 'left',
        color: '#0A1952',
        paddingRight: 17
    },

    lockImg: {
        width: 10.4,
        height: 13.6
    },

    footercon: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 40
    },
    footerImg: {
        width: 30,
        height: 30
    }

})