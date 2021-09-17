import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import {useLocation} from '../../context/location/LocactionProvider'
import {Link} from 'react-router-dom'
import {usePost} from '../../context/post/PostProvider'
import {grabPostCity} from '../../context/post/postAction'
import {sortItemByAlphha, stateSortItemByAlphha} from './../../utils/sortFns'

function SelectCity() {
  const [
    {
      data: {countries, states, cities},
    },
  ] = useLocation()
  const [, postDispatch] = usePost()

  return (
    <>
      {countries
        .filter(item => item.displayName === 'United States')
        .map(item => (
          <Accordion collapsible key={item._id}>
            <AccordionItem className="bg-gray-200 py-1 rounded-lg mb-2">
              <h3>
                <AccordionButton className="px-2 text-xl font-semibold">
                  {item.displayName}
                </AccordionButton>
              </h3>
              <AccordionPanel>
                {states
                  .filter(state => state.country === item._id)
                  .sort(stateSortItemByAlphha)
                  .map(item => (
                    <Accordion collapsible key={item._id}>
                      <AccordionItem className="ml-3">
                        <h4>
                          <AccordionButton className="text-xl">
                            {item.displayName}
                          </AccordionButton>
                        </h4>
                        <AccordionPanel>
                          {cities
                            .filter(city => city.state === item._id)
                            .sort(sortItemByAlphha)
                            .map(item => (
                              <div key={item._id}>
                                <Link
                                  onClick={() => {
                                    grabPostCity(postDispatch)(item)
                                  }}
                                  to="/user/post/select-category"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}

      {countries
        .filter(item => item.displayName !== 'United States')
        .map(item => (
          <Accordion collapsible key={item._id}>
            <AccordionItem className="bg-gray-200 py-1 rounded-lg mb-2">
              <h3>
                <AccordionButton className="px-2 text-xl font-semibold">
                  {item.displayName}
                </AccordionButton>
              </h3>
              <AccordionPanel>
                {states
                  .filter(state => state.country === item._id)
                  .sort(stateSortItemByAlphha)
                  .map(item => (
                    <Accordion collapsible key={item._id}>
                      <AccordionItem className="ml-3">
                        <h4>
                          <AccordionButton className="text-xl">
                            {item.displayName}
                          </AccordionButton>
                        </h4>
                        <AccordionPanel>
                          {cities
                            .filter(city => city.state === item._id)
                            .sort(sortItemByAlphha)
                            .map(item => (
                              <div key={item._id}>
                                <Link
                                  onClick={() => {
                                    grabPostCity(postDispatch)(item)
                                  }}
                                  to="/user/post/select-category"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
    </>
  )
}

export default SelectCity
