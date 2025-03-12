import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import InputField from './components/InputField';
import AppButton from './components/AppButton';

export default function SignUpScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    // Here you would implement your sign-up logic
    setTimeout(() => {
      setLoading(false);
      // Navigate to Sign In after successful registration
      router.push('/sign-in');
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Logo and title */}
        <View style={styles.logoContainer}>
          {/* <Image
            source={require('../../assets/images/logo.png')}
            // source={require('../assets/images/placeholder.png')}
            style={styles.logo}
            resizeMode="contain"
          /> */}
          <Text style={styles.title}>HOPPER</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <InputField
            placeholder="First name:"
            icon="person"
            value={firstName}
            onChangeText={setFirstName}
          />
          <InputField
            placeholder="Last name:"
            icon="person"
            value={lastName}
            onChangeText={setLastName}
          />
          <InputField
            placeholder="Your email:"
            icon="mail"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Your number:"
            icon="call"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <InputField
            placeholder="Password:"
            secureTextEntry
            icon="lock-closed"
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            placeholder="Confirm password:"
            secureTextEntry
            icon="lock-closed"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Sign Up Button */}
          <AppButton 
            title="Sign Up" 
            onPress={handleSignUp} 
            loading={loading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 30,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 30,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
});