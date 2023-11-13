// Import necessary modules
import { Route, Routes } from 'react-router-dom';
import UserLayout from './components/Shared/UserLayout';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import NoPage from './components/Shared/NoPage';

function App() {
  return (
    
    <Routes>
        <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Registration />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  );
}

export default App;
