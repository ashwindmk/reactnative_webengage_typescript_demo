/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WebEngage from 'react-native-webengage';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const webengage = new WebEngage();

  const login = () => {
    webengage.user.login("my_user_id");
  };

  const logout = () => {
    webengage.user.logout();
  }

  const buy = () => {
    var event = "Product Purchased";
    var attributes = {
      "Amount": 2300,
      "Delivery Date": new Date(),
      "Products" : [
        {
            "SKU Code": "UHUH799",
            "Product Name": "Armani Jeans",
            "Price": 300.49,
            "Details": {
                "Size": "L"
            }
        },
        {
            "SKU Code": "FBHG746",
            "Product Name": "Hugo Boss Jacket",
            "Price": 507.99,
            "Details": {
                "Size": "L",
            }
        },
      ],
      "Delivery Address": {
        "City": "San Francisco",
        "ZIP": "94121"
      },
      "Coupons Applied": [
        "BOGO17"
      ]
    };
    webengage.track(event, attributes);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
            <View style={styles.sectionContainer}>
              <Text style={styles.header}>WebEngage React-Native TypeScript Demo</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Button onPress={login} title={"LOGIN"}></Button>
            </View>

            <View style={styles.sectionContainer}>
              <Button onPress={logout} title={"LOGOUT"}></Button>
            </View>

            <View style={styles.sectionContainer}>
              <Button onPress={buy} title={"BUY"}></Button>
            </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  }
});

export default App;
