import {useEffect} from 'react'
import DashboardHeader from './DashboardHeader'
import {getPostsByUser} from '../../context/post/postAction'
import {usePost} from '../../context/post/PostProvider'
import PostList from './PostList'

function UserDashboard() {
  const [, dispatch] = usePost()

  useEffect(() => {
    getPostsByUser(dispatch)
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <DashboardHeader />
      <PostList />
    </>
  )
}

export default UserDashboard
