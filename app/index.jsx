import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
           <Image
  source={require('../assets/images/kpulogo.png')}
  style={{ width: 120, height: 120, resizeMode: 'contain' }}
/>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F9', alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#3D3A62', marginBottom: 24 },
  input: { backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, height: 50, borderColor: '#E4E4E4', borderWidth: 1, marginBottom: 16, width: '100%' },
  forgot: { color: '#FD3567', marginBottom: 24 },
  button: { backgroundColor: '#FD3567', paddingVertical: 14, borderRadius: 10, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 }
});
