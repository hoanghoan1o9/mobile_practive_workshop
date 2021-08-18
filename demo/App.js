import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Alert,
  TextInput,
  Modal,
  Button,
  Platform,
} from 'react-native';

const App = () => {
  const [type, setType] = useState();
  const [rate, setRate] = useState();
  const [cleanRate, setCleanRate] = useState();
  const [foodRate, setFoodRate] = useState();

  const pickerRef = useRef();
  const rateRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textname}>Restaurant name</Text>
      <View style={styles.view1}>
        <TextInput
          required={true}
          style={styles.input}
          placeholder="Kichi-Kichi"
        />
      </View>
      <Text style={styles.textname}>Average meal price per person</Text>
      <View style={styles.view1}>
        <TextInput
          required={true}
          style={styles.input}
          placeholder="price $"
        />
      </View>
      <Text style={styles.textname}>Restaurant type</Text>
      <View style={styles.wrapperpicker}>
        <Picker
          style={styles.picker}
          required={true}
          ref={pickerRef}
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
          <Picker.Item label="Grill" value="Grill" />
          <Picker.Item label="Fast food" value="Fast food" />
          <Picker.Item label="See food" value="See food" />
        </Picker>
      </View>
      <Text style={styles.textname}>Restaurant rate</Text>
      <View style={styles.wrapperpicker}>
        <Picker
          style={styles.picker}
          required={true}
          ref={rateRef}
          selectedValue={rate}
          onValueChange={(itemValue, itemIndex) => setRate(itemValue)}>
          <Picker.Item label="Need to improve" value="Need to improve" />
          <Picker.Item label="OKAY" value="OKAY" />
          <Picker.Item label="Good" value="Good" />
          <Picker.Item label="Excellent" value="Excellent" />
        </Picker>
      </View>
      <Text style={styles.textname}>Cleanliness rating</Text>
      <View style={styles.wrapperpicker}>
        <Picker
          style={styles.picker}
          required={true}
          ref={rateRef}
          selectedValue={cleanRate}
          onValueChange={(itemValue, itemIndex) => setCleanRate(itemValue)}>
          <Picker.Item label="Need to improve" value="Need to improve" />
          <Picker.Item label="OKAY" value="OKAY" />
          <Picker.Item label="Good" value="Good" />
          <Picker.Item label="Excellent" value="Excellent" />
        </Picker>
      </View>
      <Text style={styles.textname}>Food quality rating</Text>
      <View style={styles.wrapperpicker}>
        <Picker
          style={styles.picker}
          required={true}
          ref={rateRef}
          selectedValue={foodRate}
          onValueChange={(itemValue, itemIndex) => setFoodRate(itemValue)}>
          <Picker.Item label="Need to improve" value="Need to improve" />
          <Picker.Item label="OKAY" value="OKAY" />
          <Picker.Item label="Good" value="Good" />
          <Picker.Item label="Excellent" value="Excellent" />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  view1: {
    padding: 5,
  },
  textname: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  picker: {
    width: 300,
    borderColor: 'black',
  },
  wrapperpicker: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Vibration,
//   Alert,
// } from 'react-native';

// const TIME = 10000;

// const App = () => {
//   const startVibration = () => {
//     Vibration.vibrate(TIME);
//   };

//   const stopVibration = () => {
//     Vibration.cancel();
//   };

//   const showAlert = () =>
//     Alert.alert('Alert Title', 'My Alert Msg', [
//       {text: 'Cancel'},
//     ]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.titleText}>Demo</Text>
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={startVibration}>
//           <Text style={styles.buttonTextStyle}>ring</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={showAlert}>
//           <Text style={styles.buttonTextStyle}>vibrate</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: 'green',
//     marginRight: 2,
//     marginLeft: 2,
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });
