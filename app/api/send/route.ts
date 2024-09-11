import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name, message, lastname, phone } = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Estevez Estudio Jurídico <estevez-estudio-juridico-noreply@resend.dev>',
            to: [email],
            subject: 'Formulario de Contacto - Estevez Estudio Jurídico',
            react: EmailTemplate({ firstName: name, lastName: lastname, phone, message }),
            text: 'Formulario de Contacto - Estevez Estudio Jurídico',
        })

        return Response.json({ error: false, errorMessage: "", data });
    } catch (error) {
        if(error instanceof Error) {
            return Response.json({ error : true, errorMessage: error.message , data: {} });
        } else {
            return Response.json({ error : true, errorMessage: "Error inesperado", data: {} });
        }
    }
}
