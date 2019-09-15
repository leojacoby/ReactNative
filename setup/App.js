require('node-libs-react-native/globals');

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import mysql from 'mysql';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "splitter"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to splitter DB!");
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start putting in light work on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
