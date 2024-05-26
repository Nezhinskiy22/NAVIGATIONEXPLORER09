import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending products',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Product details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
