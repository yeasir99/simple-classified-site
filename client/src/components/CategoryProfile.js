import {useCategory} from './../context/category/CategoryProvider'
import Spinner from './Spinner'
import {sortItemByAlphha} from '../utils/sortFns'
import {Link} from 'react-router-dom'

function CategoryProfile(props) {
  const [{isLoading, data, error}] = useCategory()
  return (
    <div className="container columnStyle my-3">
      {isLoading && <Spinner className="text-6xl mx-auto mt-4" />}
      {error && <pre>Something Wrong With Server</pre>}
      {data &&
        data.section.sort(sortItemByAlphha).map(item => (
          <div key={item._id}>
            <h4 className="text-lg font-semibold bg-gray-300 rounded-md pl-1 py-0.5 mb-1">
              {item.name}
            </h4>
            <div className="ml-2">
              {data.catagory
                .filter(element => element.section === item._id)
                .sort(sortItemByAlphha)
                .map(listItem => (
                  <Link
                    className="block"
                    key={listItem._id}
                    to={`/city/${props.match.params.city}/${listItem.routeLink}/posts`}
                  >
                    {listItem.displayName}
                  </Link>
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default CategoryProfile
