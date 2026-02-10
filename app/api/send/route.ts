import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name, message, lastname, phone } = await req.json();

    const contactEmails = process.env.CONTACT_EMAILS?.split(',').filter(Boolean) ?? [];

    const emailPayload = {
        from: 'Estevez Estudio Jurídico <estevez-estudio-juridico-noreply@resend.dev>',
        subject: 'Formulario de Contacto - Estevez Estudio Jurídico',
        react: EmailTemplate({ firstName: name, lastName: lastname, phone, message }),
        text: 'Formulario de Contacto - Estevez Estudio Jurídico',
    };

    try {
        const [data] = await Promise.all([
            resend.emails.send({ ...emailPayload, to: [email] }),
            ...contactEmails.map((to) =>
                resend.emails.send({ ...emailPayload, to: [to.trim()] })
            ),
        ]);

        return Response.json({ error: false, errorMessage: "", data });
    } catch (error) {
        if (error instanceof Error) {
            return Response.json({ error: true, errorMessage: error.message, data: {} });
        } else {
            return Response.json({ error: true, errorMessage: "Error inesperado", data: {} });
        }
    }
}
