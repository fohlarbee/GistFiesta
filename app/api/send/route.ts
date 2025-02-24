import { Resend } from 'resend';
import EmailTemplate from '@/app/Emails-Template/Newsletter-subscription-template';
import {PrismaClient} from "@prisma/client"


const resend = new Resend(process.env.RESEND_API_KEY);
const DATABASE_URL = process.env.DATABASE_URL as string;
const fromEmail = process.env.FROM_EMAIL as string;


const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
  const  body = await req.json();
    const {name, email} = body;


  try {
    await prisma.$connect();

    const newSubscriber = await prisma.subcribers.create({
      data:{ name, email}
    });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Subcription Confirmation",
      react: EmailTemplate({name}),
    });
    await prisma.$disconnect();
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}