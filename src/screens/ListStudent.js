import React from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Student 1',
    class: 1
  },
  {
    id: 2,
    name: 'Student 2',
    class: 2
  },
  {
    id: 3,
    name: 'Student 3',
    class: 3
  },
  {
    id: 4,
    name: 'Student 4',
    class: 4
  },
  {
    id: 5,
    name: 'Student 5',
    class: 5
  },
  {
    id: 6,
    name: 'Student 6',
    class: 6
  },
]

export default class ListStudent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderItem = ({item, index}) => {  // {item: item}
  console.log('this.temp', this.temp) //, marginTop: index === 0 ? 32: 16
    return (
      <View style={{backgroundColor: 'grey', marginTop: index === 0 ? 32: 16, width: 100, height: 100, marginLeft: 8}}>
        <Text>{`id: ${item.id}`}</Text>
        <Text>{`name: ${item.name}`}</Text>
        <Text>{`class: ${item.class}`}</Text>
      </View>
    )
  }

  renderItems = () => {
    this.temp 
     
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 64, backgroundColor: 'red'}}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
        />
      </View>
    )
  }
}