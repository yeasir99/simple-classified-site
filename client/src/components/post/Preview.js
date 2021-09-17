import {useAuth} from '../../context/auth/Auth'
import {usePost} from '../../context/post/PostProvider'
import {createPost, setEdit} from '../../context/post/postAction'

function Preview(props) {
  const [{user}] = useAuth()

  const [
    {
      postData: {formData, postCatagory, postCity},
    },
    postDispatch,
  ] = usePost()

  const today = new Date(Date.now())

  const handlePublish = () => {
    createPost({formData, postCatagory, postCity}, postDispatch)
    props.history.push(`/${user.userType}/post/confirmation`)
  }

  return (
    <>
      <div className="py-3">
        <h2 className="text-3xl font-bold">{formData.title}</h2>
        <p className="text-gray-400">{today.toDateString()}</p>
        <div className="py-2">
          {formData.email && (
            <button className="bg-red-400 px-4 py-1 rounded-md mr-3" disabled>
              {formData.email}
            </button>
          )}
          {formData.phoneNumber && (
            <button className="bg-green-200 px-4 py-1 rounded-md" disabled>
              {formData.phoneNumber}
            </button>
          )}
        </div>
        <p className="py-2">{formData.description}</p>
        <p>
          <span className="font-semibold text-lg">Age:</span> {formData.age}
        </p>
        <p>
          <span className="font-semibold text-lg">Location:</span>{' '}
          {postCity.name}
        </p>
        <p>
          <span className="font-semibold text-lg">Catagory:</span>{' '}
          {postCatagory.displayName}
        </p>
        <p>
          <span className="font-semibold text-lg">Section:</span>{' '}
          {postCatagory.sectionName}
        </p>
        <div className="py-5 grid grid-cols-2 gap-5">
          {formData.images &&
            formData.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Post images"
                className="max-w-full h-auto"
              />
            ))}
        </div>
        <button
          className="bg-gray-300 px-4 py-1 rounded-md mr-2"
          onClick={() => {
            setEdit(postDispatch)
            props.history.push(`/${user.userType}/post/post-form`)
          }}
        >
          Edit Post
        </button>
        <button
          onClick={handlePublish}
          className="bg-green-400 px-4 py-1 rounded-md"
        >
          Publish
        </button>
      </div>
    </>
  )
}

export default Preview
