import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  ThemeProvider,
} from "@chakra-ui/core";

import { theme } from '@chakra-ui/core';
import CustomForm from './src/components/customForm';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

export default function App() {
  const [websiteInput, setWebsiteInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWebsiteInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Bellloooo");
  };
  
  return (
    <ThemeProvider theme={customTheme}>
      <View style={styles.container}>
        <CustomForm 
          handleChange={handleChange} 
          websiteInput={websiteInput}
          handleSubmit={handleSubmit}
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});