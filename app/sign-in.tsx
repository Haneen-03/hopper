import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import InputField from './components/InputField';
import AppButton from './components/AppButton';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    // Here you would implement your sign-in logic
    setTimeout(() => {
      setLoading(false);
      // Navigate to your main app screen after successful login
      // router.replace('/home');
    }, 1500);
  };

  return (
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
          placeholder="Email"
          icon="mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          secureTextEntry
          icon="lock-closed"
          value={password}
          onChangeText={setPassword}
        />
        
        {/* Forgot password link
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>
            Did you forget your password? 
            <Text style={styles.linkText}> Click here</Text>
          </Text>
        </TouchableOpacity> */}

        {/* Sign In Button */}
        <AppButton 
          title="Sign In" 
          onPress={handleSignIn} 
          loading={loading}
        />

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have account? 
            <Link href="/sign-up" asChild>
              <Text style={styles.linkText}> SIGN UP</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#333',
  },
  linkText: {
    color: '#0a2463',
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#333',
  },
});