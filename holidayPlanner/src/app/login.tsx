import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === 'password123') {
      setError('');
      router.replace('/option');
    } else {
      setError('Incorrect email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Login' }}/>
      <Text style={styles.title}>AllAbroad</Text>
      <Text style={styles.subtitle}>Lets get you signed in!</Text>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <Text style={styles.helperText}>
        Demo login: test@gmail.com / password123
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EA',
    justifyContent: 'center',
    padding: 28,
  },

  title: {
    fontSize: 42,
    fontFamily: 'Outfit_900Black',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 14,
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
  },

  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#F6F1EA',
    fontSize: 17,
    fontFamily: 'Outfit_900Black',
  },

  error: {
    color: 'red',
    fontFamily: 'Outfit_700Bold',
    marginBottom: 8,
    textAlign: 'center',
  },

  helperText: {
    marginTop: 18,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Outfit_700Bold',
  },
});