export const sendContactEmail = async (data: any) => {
    try {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        
        if(result.error) {
            throw new Error(result.errorMessage)
        } else {
            return { error : false , data : result.data , errorMessage : "" }
        }
    } catch (error) {
        if(error instanceof Error) {
            return { error : true , data : {} , errorMessage : error.message }
        }

        return { error : true , data : {} , errorMessage : "Error inesperado" }
    }
}