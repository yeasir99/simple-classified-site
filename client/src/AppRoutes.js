import {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import {useLocation} from './context/location/LocactionProvider'
import {getLocation} from './context/location/locationAction'
import CategoryProfile from './components/CategoryProfile'
import {useCategory} from './context/category/CategoryProvider'
import {getCategory} from './context/category/categoryAction'
import {useAuth} from './context/auth/Auth'
import {getUser} from './context/auth/authAction'
import AuthenticatedRoute from './utils/AuthUserRoute'
import UserScreen from './screens/UserScreen'
import DisplayPosts from './components/DisplayPosts'
import DisplayPost from './components/DisplayPost'

function AppRoutes() {
  const [, locationDispatch] = useLocation()
  const [, categoryDispatch] = useCategory()
  const [, authDispatch] = useAuth()

  useEffect(() => {
    getLocation(locationDispatch)
    getUser(authDispatch)
    getCategory(categoryDispatch)

    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Header />
      <Switch>
        <Route path="/city/:city/:category/posts/:id" component={DisplayPost} />
        <Route path="/city/:city/:category/posts" component={DisplayPosts} />
        <Route path="/city/:city" component={CategoryProfile} />
        <Route path="/login" component={LoginScreen} />
        <AuthenticatedRoute path="/user" component={UserScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </>
  )
}

export default AppRoutes
