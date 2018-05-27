import React, { Component } from 'react';
import { Text, View,YellowBox } from 'react-native';

export default class FormResult extends Component {
    static navigationOptions = {
        title: 'Product Detail',
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
        const { navigation } = this.props;
     
        const productID= navigation.state.params.productID;
        const uniqueID= navigation.state.params.uniqueID;
        
        return (
            <View style={{ flex: 1, backgroundColor: '#F5FCFF', }}>
                <Text>
                    {productID}
                </Text>
                <Text>
                    {uniqueID}
                    </Text>
            </View>
        )
    }
}