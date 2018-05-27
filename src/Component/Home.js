import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            timestamp: null,
            err: null,
            result: []
        }
    }
   
    async componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    timestamp: new Date().toLocaleString(),
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }




    render() {
        const { navigation } = this.props;
        const SKU = navigation.state.params.result[0];
        const Batch = navigation.state.params.result[1];
        const LotNumber = navigation.state.params.result[2];
        const ExpireDate = navigation.state.params.result[3];
        const GeoLocation = navigation.state.params.result[4];
        const Manufacturer = navigation.state.params.result[5];
        const Packingtype = navigation.state.params.result[6];

        return (
            <View style={styles.centerText} >
                <Text style={styles.textBold}>
                    SKU:  {SKU}
                </Text>
                <Text style={styles.textBold}>
                    Batch: {Batch}
                </Text>
                <Text style={styles.textBold}>
                    Lot Number: {LotNumber}
                </Text>
                <Text style={styles.textBold}>
                    Expire Date: {ExpireDate}
                </Text>
                <Text style={styles.textBold}>
                    Location (Long/Lat): {GeoLocation}
                </Text>
                <Text style={styles.textBold}>
                    Manufacturer: {Manufacturer}
                </Text>
                <Text style={styles.textBold}>
                    Packing type: {Packingtype}
                </Text>
            </View>        
        );
    }
}


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
        marginTop: 40
    },

});

export default Home;
