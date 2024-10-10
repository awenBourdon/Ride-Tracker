import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/background_welcome.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo_white.png')}
            style={styles.logo}
          />
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Bienvenue !</Text>
          <Text style={styles.description}>
            Que vous soyez débutant ou expert, découvrez les meilleurs spots de surf en France, soigneusement sélectionnés pour vous offrir des sessions inoubliables !
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 191,
    height: 39,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#f5f5f5',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#163C9F',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 24,
  },
});

export default Welcome;


