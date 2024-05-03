import './App.css';
import AllRoutes from './layout/AllRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './pages/navbar';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
   <AllRoutes/>
   <Footer/>
    </div>
  );
}

export default App;
