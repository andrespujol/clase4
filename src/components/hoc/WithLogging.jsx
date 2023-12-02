import React, { useEffect } from 'react'

const WithLogging = (WrappedComponent) => {

    const ComponentWithLogging = (props) => {
        useEffect(() => {
            console.log('El componente se montó')
        },[])
        return <WrappedComponent {...props} />
    }
    return ComponentWithLogging
}

export default WithLogging
