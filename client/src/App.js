import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from './context/auth/Auth'
import {LocationProvider} from './context/location/LocactionProvider'
import {CategoryProvider} from './context/category/CategoryProvider'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <Router>
      <AuthProvider>
        <LocationProvider>
          <CategoryProvider>
            <AppRoutes />
          </CategoryProvider>
        </LocationProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
