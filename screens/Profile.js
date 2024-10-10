import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomMenu from '../components/BottomMenu.js';
import { supabase } from '../lib/supabase';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error.message);
    }
  };
  

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{user ? user.email : 'Chargement...'}</Text>
        {user && (
          <TouchableOpacity style={styles.button} onPress={handleLogout} >
            <Text style={styles.buttonText} >Se déconnecter</Text>
          </TouchableOpacity>
        )}
      </View>
      <BottomMenu navigation={navigation} />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#2E3E5C",
    fontWeight: "bold",
    marginBottom: 12
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    width: 200,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
});