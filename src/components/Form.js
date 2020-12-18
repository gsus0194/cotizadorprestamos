import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const Form = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
        />
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      {/* <Picker onValueChange={(value) => console.log(value)}>
        <Picker.Item label="Seleccione un valor" value="0" />
        <Picker.Item label="6 Meses" value="6" />
        <Picker.Item label="12 Meses" value="12" />
        <Picker.Item label="18 Meses" value="18" />
        <Picker.Item label="24 Meses" value="24" />
        <Picker.Item label="30 Meses" value="30" />
        <Picker.Item label="36 Meses" value="36" />
      </Picker> */}
    </View>
  );
};

export default Form;
