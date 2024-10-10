import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      Alert.alert('Erreur', 'Identifiant ou mot de passe incorrect');
    } else {
      navigation.navigate("Home");
    }
    setLoading(false);
  }
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo_blue.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Prêt pour rider ?</Text>
      <Text style={styles.description}>Connectez-vous à votre compte.</Text>
     
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email ou numéro de téléphone"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
     
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>J'ai oublié mon mot de passe.</Text>
      </TouchableOpacity>
     
      <TouchableOpacity 
        style={styles.button}
        onPress={signInWithEmail}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Chargement...' : 'Se connecter'}</Text>
      </TouchableOpacity>
     
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Vous n'avez pas de compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupLink}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 191,
    height: 39,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#163C9F',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#163C9F',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: 'gray',
  },
  signupLink: {
    color: '#163C9F',
    fontWeight: 'bold',
  },
});

export default Login;
