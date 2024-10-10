import React, {useState, useEffect} from 'react';
import Map from './screens/Map';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Spot from './screens/Spot';
import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { supabase } from './lib/supabase';

const Stack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Map" component={Map}/>
        <Stack.Screen name="Spot" component={Spot}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React, {useState, useEffect} from 'react';
// import Map from './screens/Map';
// import Login from './screens/Login';
// import Welcome from './screens/Welcome';
// import Spot from './screens/Spot';
// import Register from './screens/Register';
// import SplashScreen from './screens/SplashScreen';
// import Home from './screens/Home';
// import Profile from './screens/Profile';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { supabase } from './lib/supabase';

// const Stack = createStackNavigator();

// export default function App({navigation}) {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//       setLoading(false);
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={user ? "Home" : "Welcome"}>
//         {!user ? (
//           <>
//             <Stack.Screen name="Welcome" component={Welcome}/>
//             <Stack.Screen name="Login" component={Login}/>
//             <Stack.Screen name="Register" component={Register}/>
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="Home" component={Home}/>
//             <Stack.Screen name="Map" component={Map}/>
//             <Stack.Screen name="Spot" component={Spot}/>
//             <Stack.Screen name="Profile" component={Profile}/>
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

