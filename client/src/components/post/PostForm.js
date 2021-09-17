import {useRef} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import ImageUploader from 'react-images-upload'
import {usePost} from '../../context/post/PostProvider'
import {useAuth} from '../../context/auth/Auth'
import {grabFormData} from '../../context/post/postAction'

function PostForm(props) {
  const [postState, postDispatch] = usePost()
  const [{user}] = useAuth()

  const formik = useFormik({
    initialValues: {
      title: postState.edit === true ? postState.postData.formData.title : '',
      description:
        postState.edit === true ? postState.postData.formData.description : '',
      email: postState.edit === true ? postState.postData.formData.email : '',
      images: postState.edit === true ? postState.postData.formData.images : [],
      age: postState.edit === true ? postState.postData.formData.age : '',
      phoneNumber:
        postState.edit === true ? postState.postData.formData.phoneNumber : '',
      tou: postState.edit === true ? postState.postData.formData.tou : false,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(130, 'Title is too long Please make it sort')
        .required('Title Is Required'),
      description: Yup.string().required('Description Is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Is Required'),
      age: Yup.number().required('Message Is Required').positive().integer(),
      phoneNumber: Yup.number().required('Message Is Required'),
      images: Yup.array(),
      narebyCities: Yup.array(),
    }),
    onSubmit: values => {
      grabFormData(postDispatch)(values)
      formik.resetForm()
      props.history.push(`/${user.userType}/post/preview`)
    },
  })

  const wheel = useRef()
  const wheel2 = useRef()
  const onWheel = e => wheel.current.blur()
  const onWheel2 = e => wheel2.current.blur()

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="py-3">
        <div className="flex flex-col mb-3">
          <label htmlFor="title" className="mb-2 font-semibold text-lg">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="description" className="mb-2 font-semibold text-lg">
            Description
          </label>
          <textarea
            cols="40"
            rows="10"
            id="description"
            type="text"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="rounded-lg"
          ></textarea>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="age" className="mb-2 font-semibold text-lg">
            Age
          </label>
          <input
            type="number"
            ref={wheel}
            onWheel={onWheel}
            name="age"
            id="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="mb-2 font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="phone" className="mb-2 font-semibold text-lg">
            Phone
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phone"
            ref={wheel2}
            onWheel={onWheel2}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col mb-3">
          <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText="Choose Images"
            label="Max file size: 2mb | accepted: jpg, png, jpeg"
            value={formik.values.images}
            defaultImages={formik.values.images}
            name="images"
            onChange={(image, pictureDataURLs) =>
              formik.setFieldValue('images', pictureDataURLs)
            }
            imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
            maxFileSize={2097152}
          />
        </div>
        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            id="tou"
            name="tou"
            value={formik.values.tou}
            onChange={() => formik.setFieldValue('tou', !formik.values.tou)}
            checked={formik.values.tou}
          />
          <label htmlFor="tou" className="ml-2 font-semibold text-lg">
            By placing this ad I agree to the terms of use and privacy policy
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="capitalize cursor-pointer bg-green-300 px-6 py-2 rounded-lg"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  )
}

export default PostForm
