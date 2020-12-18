import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Resutado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default App;
