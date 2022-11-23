import { useEffect } from 'react';
import { useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return [data, setData]
};

export default useData;