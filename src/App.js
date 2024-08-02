import Nav from './component/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div className=''>
      </div>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/explore" element={<Explore />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );

}

export default App;
