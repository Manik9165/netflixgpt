import Body from './Components/Body';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
