import { AppRegistry } from 'react-native';
import App from './android/src/App';
import { name as appName } from './app.json';
import { Platform } from 'react-native';
import { createRoot } from 'react-dom/client';

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
