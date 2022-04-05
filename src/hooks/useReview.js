import { useEffect, useState } from "react"

const useReview = (jsonFile) => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch(jsonFile)
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return [person, setPerson];
}

export default useReview;