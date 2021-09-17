import {Switch, Route, Redirect} from 'react-router-dom'
import SelectCity from './SelectCity'
import SelectCategory from './SelectCategory'
import PostForm from './PostForm'
import Preview from './Preview'
import Confirmation from './Confirmation'

function Post({match}) {
  return (
    <Switch>
      <Route path={`${match.path}/select-city`} component={SelectCity} />
      <Route
        path={`${match.path}/select-category`}
        component={SelectCategory}
      />
      <Route path={`${match.path}/post-form`} component={PostForm} />
      <Route path={`${match.path}/preview`} component={Preview} />
      <Route path={`${match.path}/confirmation`} component={Confirmation} />

      <Redirect to={`${match.path}/select-city`} />
    </Switch>
  )
}

export default Post
