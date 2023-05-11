import { useEffect, useState } from "react"


type Flats = {
    id: number
    name: string
}

export default function Flat() {
    const [flats, setFlats] = useState<Flats[]>([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/flats')
            const data = await res.json()
            setFlats(data.map((name: string, id: number) => ({ id, name })))
        }
        fetchData()
    }, [])
    return <div> {flats.map((p) => <p key={p.id}>{p.name}</p>)}</div>
}