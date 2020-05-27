import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image } from 'react-native';
import Main from './components/MainComponent';
export default class App extends React.Component {
  constructor(){
    super();
  }
  render(){
   return (
          <Main/>      
  );
  }
}
