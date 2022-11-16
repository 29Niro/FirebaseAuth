import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesomeIcon'


const Tab = createBottomTabNavigator();

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigation.replace("LogIn")
    })
    .catch(error => alert(error.message))
  }
  

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  );
}

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Find</Text>
    </View>
  );
}

const FAQScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FAQ</Text>
    </View>
  );
}



function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => (<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />)}}/>
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="FAQ" component={FAQScreen} />
    </Tab.Navigator>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd8fe'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})