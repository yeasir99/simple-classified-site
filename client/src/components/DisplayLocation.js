import {Link} from 'react-router-dom'

function DisplayLocation({item, data}) {
  return (
    <div>
      <h4 className="my-2 p-1.5 text-center bg-gray-300 rounded-md font-semibold text-lg">
        {item.displayName}
      </h4>
      <div className="columnStyle">
        {data.states
          .filter(state => state.country === item._id)
          .sort(function (a, b) {
            if (a.displayName < b.displayName) {
              return -1
            }
            if (a.displayName > b.displayName) {
              return 1
            }
            return 0
          })
          .map(state => (
            <div key={state._id}>
              <h5 className="font-semibold text-lg">{state.displayName}</h5>
              <div className="ml-2">
                {data.cities
                  .filter(city => state._id === city.state)
                  .sort(function (a, b) {
                    if (a.name < b.name) {
                      return -1
                    }
                    if (a.name > b.name) {
                      return 1
                    }
                    return 0
                  })
                  .map(city => (
                    <Link
                      to={`/city/${city.routeLink}`}
                      key={city._id}
                      className="block py-0.5"
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DisplayLocation
