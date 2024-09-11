import * as React from 'react';

interface EmailTemplateProps {
    firstName: string
    lastName: string
    phone: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    phone,
    message
}) => (
    <div>
        <h1>Hola{`${firstName ? `, ${firstName}` : ""}`}!</h1>
        <p>Gracias por contactarnos. En breve nos pondremos en contacto contigo para resolver tus dudas a través de los datos que nos proporcionaste : </p>
        <ul>
            <li>Teléfono: {phone}</li>
            <li>Mensaje: {message}</li>
        </ul>
        <p>Muchas Gracias.</p>
        <p className='font-bold'>Estevez Estudio Jurídico</p>
    </div>
);
