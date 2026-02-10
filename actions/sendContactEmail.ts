interface ContactFormData {
    name: string;
    lastname: string;
    email: string;
    message: string;
    phone: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
    const response = await fetch("/api/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    if (result.error) {
        throw new Error(result.errorMessage || "Error al enviar el mensaje")
    }

    return { error: false, data: result.data, errorMessage: "" }
}
