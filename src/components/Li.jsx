import * as a from '../customStyled'
import filterPropsByLayout from './utils'

const Li = ({ layout, children, style, ...props }) => {
    const styledProps = filterPropsByLayout(props, layout)

    return (
        <a.Li style={style} {...styledProps}>
            {children}
        </a.Li>
    )
}

export default Li
