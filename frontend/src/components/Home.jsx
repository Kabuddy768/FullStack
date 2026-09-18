import { useState, useEffect } from "react";
import AxiosInstance from '../components/axios.jsx';

const Home = () => {
    const [country, setCountry] = useState([])

    const getData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2>Countries</h2>
            <ul>
                {country.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home