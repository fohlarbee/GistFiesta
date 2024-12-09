import { Resend } from 'resend';
import EmailTemplate from '@/app/components/Email-template';
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: any, res: any) {
  const  body = await req.json();
    const {name, email} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thank You for Contacting Me",
      react: EmailTemplate({name}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}