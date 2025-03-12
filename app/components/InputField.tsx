import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputFieldProps {
  placeholder: string;
  secureTextEntry?: boolean;
  icon?: 'mail' | 'lock-closed' | 'person' | 'call' | 'eye' | 'eye-off';
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputField({
  placeholder,
  secureTextEntry = false,
  icon,
  value,
  onChangeText,
}: InputFieldProps) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={hidePassword}
        value={value}
        onChangeText={onChangeText}
      />
      
      {icon && (
        <View style={styles.iconContainer}>
          <Ionicons name={`${icon}-outline`} size={20} color="#666" />
        </View>
      )}
      
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 50,
    width: '100%',
  },
  input: {
    flex: 1,
    height: '100%',
  },
  iconContainer: {
    marginLeft: 10,
  },
  eyeIcon: {
    padding: 5,
  },
});