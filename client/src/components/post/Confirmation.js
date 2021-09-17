import {usePost} from '../../context/post/PostProvider'
import Spinner from '../Spinner'

function Confirmation() {
  const [{loading, error}] = usePost()
  if (loading) {
    return <Spinner className="text-6xl mx-auto mt-4" />
  }
  if (error) {
    return <pre>{error}</pre>
  }

  return <div>successfully done</div>
}

export default Confirmation
