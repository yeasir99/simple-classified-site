import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Spinner from './Spinner'

function DisplayPosts(props) {
  const {city, category} = props.match.params
  const [state, setState] = useState({
    posts: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    axios
      .get(`/api/v1/post/section/${city}/${category}`)
      .then(({data}) => {
        setState({
          posts: data,
          loading: false,
          error: null,
        })
      })
      .catch(error => {
        setState({
          posts: [],
          loading: false,
          error: error,
        })
      })

    // eslint-disable-next-line
  }, [])

  const handleSortItem = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

  if (state.loading) {
    return <Spinner className="text-6xl mx-auto mt-4" />
  }

  return (
    <div className="container box-border">
      {state.posts.length > 0 &&
        state.posts.sort(handleSortItem).map(item => (
          <div key={item._id}>
            <Link
              to={`/city/${city}/${category}/posts/${item._id}`}
              className="font-semibold"
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default DisplayPosts
