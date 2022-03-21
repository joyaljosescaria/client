import './App.css';
import PrivatePage from './PrivatePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
