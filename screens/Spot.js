import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imageSpots from '../assets/assets';
import BottomMenu from '../components/BottomMenu.js';

export default function Spot({ route, navigation }) {
  const { spot } = route.params;
  const imageUrl = imageSpots[spot.id];

  return (
    <>
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={imageUrl} style={styles.image} />
      ) : (
        <Text>Image non disponible</Text>
      )}
      <Text style={styles.title}>{spot.name}</Text>
      <Text style={styles.description}>{spot.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ajouter à mes favoris</Text>
      </TouchableOpacity>
    </View>
    <BottomMenu navigation={navigation}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

