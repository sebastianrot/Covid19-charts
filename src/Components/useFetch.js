import { useState, useEffect } from 'react';

const useFetch = (url, date) => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false)

    const getDate = () => {
        const currentDate = new Date()
        const oldDate = new Date(date)
        const currently = Math.floor((currentDate - oldDate) /(1000 * 3600 * 24))
        return currently
    }
    useEffect(() => {
        fetch(url + getDate())
        .then(res => res.ok ? res : null)
        .then(res => res.json())
        .then(res => {
            if(res.timeline) res = res.timeline
            setData(res)
            setLoad(false)
            setError(false)})
        .catch(error => setError(true)) 
    }, [url, date])
 
    return [data, load, error]
}

export default useFetch;