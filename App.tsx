import { Provider } from 'react-redux';
import { store } from './src/store/index';
import HomeViewPage from './src/features/home/presentation/screens/HomeViewPage';

export default function App() {
  return (
    <Provider store={store}>
      <HomeViewPage />
    </Provider>
  );
}