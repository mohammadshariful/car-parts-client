import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [dataInfo, setDataInfo] = useState({ loading: false, data: [], error: null });
    const [reFectch, setReFetch] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                setDataInfo({ ...dataInfo, loading: true })

                const res = await (await fetch(url)).json();
                if (res?.success) {
                    setDataInfo({ loading: false, data: res?.data, error: null })
                } else {
                    setDataInfo({ loading: false, data: [], error: res?.message })
                }

            } catch (error) {
                setDataInfo({ loading: false, data: [], error: error })
            }
        }
        dataFetch()

    }, [url, reFectch])

    return { dataInfo, setDataInfo, setReFetch }
};

export default useFetchData;