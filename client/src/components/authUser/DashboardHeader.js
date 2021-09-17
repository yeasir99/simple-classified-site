import {Link} from 'react-router-dom'
import {useAuth} from '../../context/auth/Auth'

function DashboardHeader() {
  const [{user}] = useAuth()

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt="user"
          style={{maxWidth: '80px'}}
          className="h-auto rounded-full"
        />
        <div className="p-2">
          <h4 className="font-semibold text-lg">{user.name}</h4>
          <h5>{user.email}</h5>
        </div>
      </div>
      <div className="ml-auto">
        <div className="flex">
          <Link to="/user/post" className="mr-1">
            <button className="capitalize cursor-pointer px-4 py-2 bg-gray-400 rounded-md text-white">
              create new post
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
