import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ResultCalculation = ({
  capital,
  interest,
  months,
  total,
  errorMsg,
}) => {
  return (
    <View style={styles.content}>
      {total && <Text>Result Total</Text>}
      <View>
        <Text style={styles.error}>{errorMsg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 100,
    marginHorizontal: 40,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
