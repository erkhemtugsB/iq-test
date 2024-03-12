import { Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import IqTest from './components/pages/iqtest/IqTest'
import Spot from './components/pages/spot/Spot'
import Behaviour from './components/pages/behaviour/Behaviour';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/iqtest" element={<IqTest/>}/>
        <Route path='/yalgaag-ol' element={<Spot/>}/>
        <Route path='/zan-avir' element={<Behaviour/>}/>
      </Routes>
    </div>
  );
}

export default App;
