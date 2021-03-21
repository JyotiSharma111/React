import PropTypes from 'prop-types'  //impt
import Button from './Button'



const Header = ({title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd}
             color={showAdd? 'red': 'green'}
             nametext={showAdd ? 'Close' : 'Add'}  />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* CSS in JS
const headingStyle = {
    color:'red',
    backgroundColor : 'pink' 
} */

export default Header
