import axios from 'axios'
import {useState, useEffect} from 'react'
import Modal from './Modal'
import Spinner from './Spinner'
import {FaPhoneAlt} from 'react-icons/fa'
import {AiTwotoneMail} from 'react-icons/ai'

function DisplayPost(props) {
  const [state, setState] = useState({
    post: null,
    loading: true,
    error: null,
  })

  const [selectedImage, setSelectedImage] = useState(null)
  const {post, loading, error} = state

  useEffect(() => {
    axios
      .get(`/api/v1/post/${props.match.params.id}`)
      .then(({data}) =>
        setState(currentState => ({
          ...currentState,
          post: data,
          loading: false,
        })),
      )
      .catch(error =>
        setState(currentState => ({
          ...currentState,
          error,
          loading: false,
        })),
      )

    // eslint-disable-next-line
  }, [])

  const dateHelper = timestamp => {
    const d = new Date(timestamp)
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
  }

  if (loading) {
    return (
      <div className="container box-border">
        <Spinner className="text-6xl mx-auto mt-4" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="container box-border">
        <pre>{JSON.stringify(error)}</pre>
      </div>
    )
  }
  return (
    <div className="container box-border">
      {post ? (
        <div>
          <div
            className="pb-3"
            style={{
              borderBottom: '2px solid #EFEFEF',
            }}
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-400">
              Posted: {dateHelper(post.createdAt)}
            </p>
            <div className="mt-2 flex">
              {post.email && (
                <button className="bg-red-400 px-4 py-1 rounded-md mr-3 flex justify-center items-center">
                  <AiTwotoneMail className="mr-2 text-gray-100" />
                  {post.email}
                </button>
              )}{' '}
              {post.phoneNumber && (
                <button className="bg-green-200 px-4 py-1 rounded-md flex justify-center items-center">
                  <FaPhoneAlt className="mr-2 text-red-600" />
                  {post.phoneNumber}
                </button>
              )}
            </div>
          </div>
          <div className="postBodyAndImage">
            <div className="mt-2">
              <p>{post.description}</p>

              <ul>
                <li>Location: {post.location.name}</li>
                <li>Poster age: {post.age}</li>
              </ul>
            </div>
            <div className="displayImage mt-4">
              {post.images &&
                post.images.map(item => (
                  <div
                    key={item._id}
                    onClick={() => {
                      setSelectedImage(item)
                    }}
                  >
                    <img
                      src={item.url}
                      alt={item}
                      style={{cursor: 'pointer'}}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  )
}

export default DisplayPost
