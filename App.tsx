/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:400}}>Hello Automation Rn</Text>
      </View>
    </SafeAreaProvider>
  );
}





export default App;
