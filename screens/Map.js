import React, { useEffect, useState } from 'react';
import { StyleSheet, View,} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchSurfSpots } from '../spotData.js';
import BottomMenu from '../components/BottomMenu.js';

export default function Home({navigation}) {
  const [surfSpots, setSurfSpots] = useState([]);

  useEffect(() => {
    async function loadSurfSpots() {
      const spots = await fetchSurfSpots();
      setSurfSpots(spots);
    }
    
    loadSurfSpots();
  }, []);

  return (
    <>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.603354,
          longitude: 1.888334,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {surfSpots.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.location}
            title={spot.name}
            onPress={() => navigation.navigate("Spot", { spot })}
          />
        ))}
      </MapView>
    </View>
    <BottomMenu navigation={navigation}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

