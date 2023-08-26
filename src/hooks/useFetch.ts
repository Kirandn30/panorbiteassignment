import { useState, useEffect } from 'react';
import { setLoading, setUsers } from '../redux/usersSlice';
import { useDispatch } from 'react-redux';

// Custom hook for fetching data
function useFetch(url: string) {
    const [error, setError] = useState<unknown | null>(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                dispatch(setUsers(jsonData.users));
            } catch (error) {
                setError(error);
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchData();

    }, [url]);

    return { error };
}

export default useFetch;
