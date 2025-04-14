import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PhotoPicker = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.outerCircle} onPress={onPress}>
        <View style={styles.innerCircle}>
          <Text style={styles.text}>Add{'\n'}Photo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#8D92A3',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins',
  },
});
