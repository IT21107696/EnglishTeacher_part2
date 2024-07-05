// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // Handle login logic here
    console.log(data);
    // You can add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Username"
          />
        )}
        name="username"
        rules={{ required: 'Username is required' }}
      />
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Password"
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: 'Password is required' }}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    width: '80%',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default LoginScreen;
