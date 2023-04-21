import './App.css';
import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import StoryList from './pages/StoryList';
import FruitStory from './pages/FruitStory';

function App() {
  return (
    <div className="App">
      <Header/>

      {/* app.js 안에서 Route를 이용하여 주소와 컴포넌트를 연결 */}
      <Routes>
        <Route path='/home' element={<Home/>}/>

        <Route path='/storylist' element={<StoryList/>}>
          <Route path='/storylist/:fruit' element={<FruitStory/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;