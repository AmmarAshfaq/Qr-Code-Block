import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, TextInput, TouchableOpacity, ActivityIndicator, YellowBox} from 'react-native';
import { Container, Header, Content, Badge, Text, Icon, Form, Item, Input, Label } from 'native-base';


export default class FormFill extends Component {
    constructor() {
        super();
        this.state = {
            uniqueID: '',
            productID: ''
        }
    }
    static navigationOptions = {
        title: 'Enter Product Detail',
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
    _submit = () => {
        this.props.navigation.navigate('FormResult', { uniqueID: this.state.uniqueID, productID: this.state.productID })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Item style={styles.input}>
                        <Icon name="ios-text" style={{ color: '#000' }} />
                        <Input placeholder="UniqueID" onChangeText={(value => this.setState({ uniqueID: value }))} />
                    </Item>
                    <Item last style={styles.input}>
                        <Icon name="ios-text" style={{ color: '#000' }} />
                        <Input placeholder="ProductID"

                            onChangeText={(value => this.setState({ productID: value }))}
                        />
                    </Item>


                    <Button title='Submit' onPress={this._submit} />

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        marginBottom: 20,
    },
    inputWrapper: {
        padding: 20
    }

});