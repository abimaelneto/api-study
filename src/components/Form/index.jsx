import { useState } from "react"

export const Form = ({children}) => {
    const [data, setData] = useState()

    const handleSubmit = () => {
        alert('submit')
    }
    return <form onSubmit={handleSubmit}>{children}</form>
}