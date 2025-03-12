import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Auto navigate to Sign In screen after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/sign-in');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.content}>
        {/* Logo and title */}
        <View style={styles.logoContainer}>
          {/* Use a placeholder URL instead of a file to avoid asset errors */}
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>HOPPER</Text>
        </View>
      </View>
      
      {/* Loading indicator */}
      <ActivityIndicator 
        style={styles.loader} 
        color="#000000" 
        size="small" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  loader: {
    position: 'absolute',
    bottom: 100,
  },
});