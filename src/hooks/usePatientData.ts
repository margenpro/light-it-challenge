import { useState, useEffect } from 'react'
import { TPatientType } from '../types/patient'


async function fetchPatientData() {
    try {
        const response = await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
        })
        return response
    } catch (error) {
        throw error
    }
}

export function usePatientData(){
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [data, setData] = useState<TPatientType[] | null>(null)

    useEffect(() => {
        fetchPatientData().then(response => {
            if(response && response.status === 200){
                response.json().then(data => {
                    if(data){
                        setData(data)
                    }
                })
            }
            if(!response.ok){
                setError(`Error ${response.status}: ${response.statusText}`)
            }
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return {loading, error, data}
}