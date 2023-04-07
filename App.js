import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/navigation/Navigation";
import UserProvider from './src/providers/UserProvider';
import ApiProvider from './src/providers/ApiProvider';

const App = () => {
  return (
    <ApiProvider>
      <UserProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </UserProvider>
    </ApiProvider>
  );
};

export default App;
