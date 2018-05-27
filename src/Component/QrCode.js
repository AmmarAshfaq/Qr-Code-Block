import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Button, View, Vibration, YellowBox
} from 'react-native';
import firebase from 'react-native-firebase';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { NavigationActions } from 'react-navigation'

export default class ScanScreen extends Component {
    constructor() {
        super();
        this.state = {
            result:[]
        };
        
    }

    static navigationOptions = {
        title: "Scan Know",
        headerTitleStyle: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center'
        },
        headerRight: (<View></View>),
        // headerLeft: (<View></View>)

    };
    componentWillMount() {
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
    }
   
    async onSuccess(e) {
        
       
        await fetch("http://35.200.199.43:8000/notes",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              queryID : e.data,
            }),
          })
          .then(response => response.json())
          .then(data => this.setState({
            result: data
          }));
          this.props.navigation.navigate('Home', {
            result: this.state.result,
          })
    }
    

    logOut = () => {

        firebase.auth().signOut().then(this.props.navigation.navigate('LogIn')
        ).catch((err) => {
            alert(err)
        })
    }
    
    render() {
       
        return (
            <QRCodeScanner

                ref={(node) => { this.scanner = node }}
                onRead={this.onSuccess.bind(this)}
                topContent={<Text style={styles.centerText}>
                    Scan the QR code.
</Text>}
                bottomContent={<Button title="LogOut" onPress={() => this.logOut()} />}
                style={{ flex: 1 }}
                reactivate={true}
            // reactivateTimeout={5000}
            />

        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});