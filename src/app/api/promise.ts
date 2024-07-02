import OpenAI from "openai";

export const assistantId = process.env.ASSISTANT_ID!;

//Obtener nuestra instancia de OpenAI (el objeto de conexión)
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function waitForResult(threadId: string, runId: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        async function verifyStatus() {
            try {
                //Preguntar el estatus de mi ejecución
                const status = await openai.beta.threads.runs.retrieve(threadId, runId)
                if(status.status === 'completed') {
                    resolve()
                } else {
                    setTimeout(verifyStatus, 1000)
                }
            } catch(e) {
                reject(e)
            }
        }

        verifyStatus()
    })
}