import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps): JSX.Element => {
  const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
      <Button
        title="Go back home to first screen"
        //   onPress={() => navigation.navigate('Home')}
        // onPress={() => navigation.goBack()}
        // onPress={() => navigation.pop(1)}
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
