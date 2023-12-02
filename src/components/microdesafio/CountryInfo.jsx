import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CountryInfo = () => {
    const [data, setData] = useState([])

    const countryName = 'Argentina'

    useEffect(() => {
        const fetchData= () => {
            const url = `https://restcountries.com/v3.1/name/${countryName}`

            axios.get(url)
            .then(response => {

                if (!response.data || response.data.length === 0) {
                    console.error(`No se encontraron datos para ${countryName}`)
                }
                setData(response.data)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            }) 
        }
        fetchData()

        }, [countryName]) 

  return (
    <div>
        {data.map((info) => (
            <div key={info.id}>
                <h2>{info.name.common}</h2>
            </div>

        ))}
    </div>
  )
}

export default CountryInfo
