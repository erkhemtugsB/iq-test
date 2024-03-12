import { Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import IqTest from './components/pages/iqtest/IqTest'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/iqtest" element={<IqTest/>}/>
      </Routes>
    </div>
  );
}

export default App;
