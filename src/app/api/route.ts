import { NextRequest } from "next/server";
import { MessageContent, TextContentBlock } from "openai/resources/beta/threads/messages.mjs";
import { assistantId, openai, waitForResult } from "./promise";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams
    const message = params.get("search")
    let result = "";

    if(message === null) 
        return Response.json({ data: result })

    try {
        //Recibir un asistente 
        const assistant = await openai.beta.assistants.retrieve(assistantId);
        //Crear un hilo
        const thread = await openai.beta.threads.create();
        //Usando el hilo, crear un mensaje
        //Role es user porque soy yo quien está generando el mensaje
        //Gracias al id del hilo, openAI sabe cuando corro mi hilo que ya tiene un mensaje
        await openai.beta.threads.messages.create(
            thread.id,
            { role: "user", content: message }
        )
        //Ejecutar mi petición
        const run = await openai.beta.threads.runs.create(
            thread.id,
            { assistant_id: assistant.id }
        );
        
        await waitForResult(thread.id, run.id)

        const messages = await openai.beta.threads.messages.list(thread.id)
        messages.data.forEach(m => {
            if(m.role === "assistant"){
                const content: MessageContent[] = m.content as MessageContent[]
                const element: TextContentBlock = content[0] as TextContentBlock
                result = element.text.value
            }
        })
    } catch (error) {
        console.error("No se pudo obtener el asistente", error)
    }

    return Response.json({ data: result })
}