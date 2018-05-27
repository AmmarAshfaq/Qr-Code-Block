import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Button, StatusBar, Image, TouchableOpacity, PixelRatio, YellowBox } from 'react-native';
import { Container, Header, Content, Badge, Text, Icon, Form, Item, Input, Label } from 'native-base';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Welcome In Menu',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#212121',
        headerTitleStyle: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Muli-Light',
            fontWeight: '200'
            // fontFamily: "Ionicons",
        },
        headerRight: (<View></View>),
        headerLeft: (<View></View>)
    }
    componentWillMount() {
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
    }
    loadPage = (pages) => {
        let { navigate } = this.props.navigation;
        // console.log(this.props.navigation)
        // this.props.loadQuestion(name, navigate);
        navigate(pages);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5FCFF', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 25, backgroundColor: '#F5FCFF' }}>
                    <Text style={{ fontFamily: 'Muli-Ligth', fontWeight: 'normal' }}>Select An Option</Text>
                </View>

                <View style={styles.container}>
                    <StatusBar
                        // backgroundColor="transparent"
                        // barStyle="light-content"
                        hidden={true}
                    />
                    <View style={styles.row}>

                        <TouchableOpacity style={styles.btn} onPress={() => { this.loadPage('ScanScreen') }}>

                            <Text style={{ alignSelf: 'center' }}>QRCODE Scan</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.loadPage('FormFill') }}>

                            <Text style={{ alignSelf: 'center' }}>Form Fill</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.btn]} onPress={() => { this.loadPage('NfcScan') }}>

                            <Text style={{ alignSelf: 'center' }}>NFC</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.loadPage('Rfid') }}>

                            <Text style={{ alignSelf: 'center' }}>RFID</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        paddingTop: 0,

        alignItems: 'center',
        marginTop: 20
    },
    img: {
        width: 120,
        height: 120
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    btn: {
        margin: 5,
        borderBottomWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
        padding:10
    }
});


