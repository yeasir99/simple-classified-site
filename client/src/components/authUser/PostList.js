import {usePost} from '../../context/post/PostProvider'
import Spinner from '../Spinner'

function PostList() {
  const [{loading, posts, error}] = usePost()

  const dateHelper = timestamp => {
    const d = new Date(timestamp)
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
  }

  if (loading) {
    return <Spinner className="text-6xl mx-auto mt-4" />
  } else if (error) {
    return (
      <div className="py-4">
        {error.response.statusText ? (
          <pre>{error.response.statusText}</pre>
        ) : (
          'Something Wrong'
        )}
      </div>
    )
  } else {
    return (
      <div className="py-4">
        {posts?.length === 0 ? (
          <div>
            <h4 className="text-center">No Post Yet</h4>
          </div>
        ) : (
          <div>
            <div>
              {posts.map(item => (
                <div key={item._id}>
                  <h2 className="text-lg font-semibold">
                    <span className="px-2 text-gray-400">
                      {dateHelper(item.createdAt)}
                    </span>
                    {item.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default PostList
