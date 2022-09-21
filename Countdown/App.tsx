/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Box, NativeBaseProvider, Text } from 'native-base';
import React, { useState } from 'react';
import Profile from './src/screens/Profile';
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Profile />
    </NativeBaseProvider>
  );
};
