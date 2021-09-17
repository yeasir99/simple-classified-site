import {useLocation} from './../context/location/LocactionProvider'
import Spinner from './../components/Spinner'
import DisplayLocation from './../components/DisplayLocation'

function HomeScreen() {
  const [{isLoading, data, error}] = useLocation()
  return (
    <div className="container box-border">
      {isLoading ? (
        <Spinner className="text-6xl mx-auto mt-4" />
      ) : error ? (
        <pre>{error.response.statusText}</pre>
      ) : (
        <div className="grid grid-cols-2 space-x-5">
          {data?.countries
            ?.filter(items => items.displayName === 'United States')
            .map(item => (
              <DisplayLocation key={item._id} item={item} data={data} />
            ))}
          <div>
            {data?.countries
              .filter(items => items.displayName !== 'United States')
              .map(item => (
                <DisplayLocation key={item._id} item={item} data={data} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeScreen
