import * as a from '../customStyled'

const Container = ({ children, width, maxWidth }) => {
    return (
        <a.Container $width={width} $maxWidth={maxWidth}>
            {children}
        </a.Container>
    )
}

export default Container