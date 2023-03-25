import { useRouteError } from "react-router-dom"

const Error = () => {
    debugger
    const  error  = useRouteError()
    console.log(error)
    return (
        <>
        <h1>Error</h1>
        <strong>{error.status}</strong>
        <h3>{error.statusText}</h3>
        </>
    )
}

export default Error;