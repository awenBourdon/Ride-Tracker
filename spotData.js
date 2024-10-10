import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchSurfSpots() {
  try {
    const { data, error } = await supabase
      .from('surf_spots')
      .select('*');

    if (error) throw error;

    return data.map(spot => ({
      id: spot.id,
      name: spot.name,
      location: { latitude: spot.latitude, longitude: spot.longitude },
      description: spot.description,
      image: {uri : spot.image }
    })); 
  } catch (error) {
    console.error('Erreur lors de la récupération des spots de surf:', error.message);
    return [];
  }
}


export const surfSpots = [];

// export const surfSpots = [
//     { 
//         id: 1, 
//         name: "La Torche", 
//         location: { latitude: 47.8379, longitude: -4.3512 }, 
//         description: "Spot réputé pour ses vagues puissantes et ses compétitions internationales.",
//         image: require('./assets/images/spots/torche.png')
//     },
//     { 
//         id: 2, 
//         name: "Biarritz", 
//         location: { latitude: 43.4832, longitude: -1.5586 }, 
//         description: "La Grande Plage de Biarritz offre des vagues adaptées à tous les niveaux.",
//         image: require('./assets/images/spots/biarritz.png')
//     },
//     { 
//         id: 3, 
//         name: "Hossegor", 
//         location: { latitude: 43.6724, longitude: -1.4403 }, 
//         description: "Connu pour ses tubes parfaits et ses championnats du monde.",
//         image: require('./assets/images/spots/hossegor.png')
//     },
//     { 
//         id: 4, 
//         name: "Lacanau", 
//         location: { latitude: 45.0019, longitude: -1.2012 }, 
//         description: "Spot idéal pour les débutants et intermédiaires avec de longues vagues.",
//         image: require('./assets/images/spots/lacanau.png')
//     },
//     { 
//         id: 5, 
//         name: "Etretat", 
//         location: { latitude: 49.7076, longitude: 0.2055 }, 
//         description: "Un spot de surf unique avec ses falaises emblématiques en arrière-plan.",
//         image: require('./assets/images/spots/etretat.png')
//     },
// ];