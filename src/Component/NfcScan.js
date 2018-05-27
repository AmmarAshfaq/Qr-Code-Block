import React, { Component } from 'react';
import { Text, View,YellowBox } from 'react-native';

export default class NfcScan extends Component {
    static navigationOptions = {
        title: 'Scan NFC Tag',
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
        // headerLeft: (<View></View>)
    }

    componentWillMount() {
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5FCFF', }}>
                <Text>
                    NFC Scan
                </Text>
            </View>
        )
    }
}