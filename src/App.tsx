// Import necessary modules
import { Route, Routes } from 'react-router-dom';
import UserLayoutComponent from './Shared/UserLayoutComponent';
import HomeComponent from './components/Home/HomeComponent/HomeComponent';
import RegistrationComponent from './components/Registration/RegistrationComponent';
import NoPageComponent from './Shared/NoPageComponent';

function App() {
  return (
    
    <Routes>
        <Route path="/" element={<UserLayoutComponent />}>
            <Route index element={<HomeComponent />} />
            <Route path="register" element={<RegistrationComponent />} />
            <Route path="*" element={<NoPageComponent />} />
        </Route>
    </Routes>
  );
}

export default App;
