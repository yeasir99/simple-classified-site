import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import {useCategory} from '../../context/category/CategoryProvider'
import {sortItemByAlphha} from './../../utils/sortFns'
import {Link} from 'react-router-dom'
import {usePost} from '../../context/post/PostProvider'
import {grabPostCategory} from '../../context/post/postAction'

function SelectCategory() {
  const [
    {
      data: {catagory, section},
    },
  ] = useCategory()

  const [, postDispatch] = usePost()

  return (
    <>
      <div className="py-3">
        {section.sort(sortItemByAlphha).map(item => (
          <Accordion collapsible key={item._id}>
            <AccordionItem>
              <AccordionButton>
                <div>{item.name}</div>
              </AccordionButton>
              <AccordionPanel>
                {catagory
                  .filter(unit => item._id === unit.section)
                  .sort(sortItemByAlphha)
                  .map(unit => (
                    <div key={unit._id}>
                      <Link
                        onClick={() => {
                          grabPostCategory(postDispatch)(unit)
                        }}
                        to="/user/post/post-form"
                      >
                        {unit.displayName}
                      </Link>
                    </div>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  )
}

export default SelectCategory
