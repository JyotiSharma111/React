import PropTypes from 'prop-types'

const Button = ({color, nametext, onClick }) => {
    return (
        <button
        onClick = {onClick}
        style={{ backgroundColor :color}} 
        className='btn'>{nametext}</button>
    )
}

Button.defaultProps ={
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
