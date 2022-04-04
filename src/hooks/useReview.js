import { useEffect, useState } from "react"

const useReview = () => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return [person, setPerson];
}

export default useReview;