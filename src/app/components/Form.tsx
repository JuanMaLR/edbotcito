"use client"

import { useState } from "react"

const Form = () => {
    const [tone, setTone] = useState("")
    const [topic, setTopic] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState<boolean>(false)

    const getData = async () => {
        const data = await fetch(`http://localhost:3000/api?search=${topic.replace(" ", "+")}+en+tono${tone}`)
        return data.json()
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(tone === "" || topic === ""){
            alert("Llena bien el formulario")
        } else {
            e.preventDefault()
            setResult("")
            setLoading(true)
            getData().then((message) => {
                setResult(message.data)
                setLoading(false)
                setTopic("")
                setTone("")
            })
        }
    }

    return (
        <>            
            <div className="form-section container flex justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="tono" className="mr-4">Tono de la historia: </label>
                        <select disabled={loading} value={tone} required onChange={(e) => setTone(e.target.value)} name="tono" id="tono" className="px-4 py-2 rounded-lg">
                            <option value="">-Seleccione un tono-</option>
                            <option value="divertido">Divertido</option>
                            <option value="para dormir">Para dormir</option>
                            <option value="emocionante">Emocionante</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="topic" className="mb-2">¿De qué tema quieres tu historia?</label>
                        <textarea disabled={loading} value={topic} required onChange={(e) => setTopic(e.target.value)} className="p-2 rounded-lg" name="topic" id="topic" rows={3}/>
                    </div>
                    <input type="submit" disabled={loading} value={`${loading ? "cargando..." : "Enviar"}`} className="bg-sky-600 hover:bg-sky-800 py-2 px-4 rounded-lg cursor-pointer"/>
                </form>
            </div>
            {result !== '' && <div className="result-section">
                <h2>Historia:</h2>
                <p>{result}</p>
            </div>
            }
            <section className="mt-8 p-4 border-x-2 border-gray-600">
                <h2>Acerca de nosotros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae itaque magni perspiciatis repellendus, consequatur modi asperiores earum repudiandae ad exercitationem voluptas natus ut quos odio quis tempore rem placeat accusantium.</p>
            </section>
        </>
    )
}

export default Form