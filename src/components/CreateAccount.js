import React, { Component } from 'react';

// shim to nodify web3 crytpo and fs libraries
import { Wallet } from '../actions/index';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password_check : ''
    }
  }

  componentWillMount() {
    console.log('Wallet', Wallet );
    Wallet.load();
  }

  handleSubmit() {
    console.log('handling submit...')
    Wallet.createAccount();
  }

  render() {
    return (
      <View>
        <Text>checking</Text>
        <TextInput
          style={{height: 100, width: 300}}
          placeholder="enter password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TextInput
          style={{height: 100, width: 300}}
          placeholder="re-enter password"
          onChangeText={(text) => this.setState({password_check: text})}
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={this.handleSubmit}>
          <View style={{height: 200, backgroundColor: 'darkgrey'}}>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
