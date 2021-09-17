import {PostProvider} from '../context/post/PostProvider'
import {Switch, Route, Redirect} from 'react-router-dom'
import UserDashboard from '../components/authUser/UserDashboard'
import Post from '../components/post/Post'

function UserScreen({match}) {
  return (
    <PostProvider>
      <div className="container">
        <Switch>
          <Route path={`${match.path}/dashboard`} component={UserDashboard} />
          <Route path={`${match.path}/post`} component={Post} />
          <Redirect to={`${match.path}/dashboard`} />
        </Switch>
      </div>
    </PostProvider>
  )
}

export default UserScreen
