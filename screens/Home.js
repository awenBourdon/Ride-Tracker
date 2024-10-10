import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomMenu from '../components/BottomMenu';
import { supabase } from '../lib/supabase';

const Home = ({navigation}) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);


  return (
    <>
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.title}>Salut, {user ? user.email : 'Chargement...'}</Text>
        <Text style={styles.subtitle}>Allons surfer !</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.button}>
        <Text style={styles.buttonText} >Voir sur la carte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
      <Text style={styles.categoryTitle}>Nouveaux spots</Text>
      </View>
      <View style={styles.category}>
      <Text style={styles.categoryTitle}>Les plus populaires</Text>
      </View>
      <View style={styles.category}>
      <Text style={styles.categoryTitle}>Proches de votre position</Text>
      </View>
    </View>
    <BottomMenu navigation={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    color: "#2E3E5C",
    fontWeight: "bold",
    marginBottom: 12
  },
  subtitle: {
    fontSize: 24,
    color: "#2E3E5C",
    fontWeight: 'regular',
    marginBottom: 5,
  },
  home: {
    marginBottom: 32,
  },
  category: {
    marginBottom: 32,
  },
  categoryTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: 'semibold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#163C9F',
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

export default Home;