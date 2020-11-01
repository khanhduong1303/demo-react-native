import React from 'react';
import { View, Text, Alert } from 'react-native';

export default class Alert2 extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    
  }

  render () {
    return (
      <View style={{flex: 1, paddingTop: 64, alignItems: 'center'}}>
        <View style={{width: 300, backgroundColor: 'red', flexDirection: 'row'}}>
          <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
          <View style={{width: 100, height: 100, backgroundColor: 'yellow', marginLeft: 20}}/>
        </View>
      </View>
    )
  }

}