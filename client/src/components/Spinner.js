import {VscLoading} from 'react-icons/vsc'

function Spinner({className, ...rest}) {
  return <VscLoading className={`${className} animate-spin`} {...rest} />
}

export default Spinner
