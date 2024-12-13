import { PrismaClient } from "@prisma/client"
import { client } from "@/app/lib/sanity";
import { Resend } from "resend";
import NewsletterMail from "@/emails/news-letter";


const cron = require('node-cron');
const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();
const fromEmail = process.env.FROM_EMAIL as string;



// const getSubscirbers = async (): Promise<Subscriber[] | []> => {
//     await prisma.$connect();
//     const subscirbers = await prisma.subcribers.findMany({
//         select:{name: true,email: true}
//     });

//     return subscirbers;
// }

// const getLatestBlogPost = async (): Promise<BlogDetails> => {
    
//     const query = `*[_type == 'blog'] | order(_createdAt desc)[0]{
//         title,
//         smallDescription,
//         'currentSlug': slug.current,
//         blogImage,
//         blogContent
//       }`;
      
//       const data = await client.fetch(query);
      
//       return data;
// }

// const sendNewsletter = async() => {
//     const latestBlog = await getLatestBlogPost();
//     const subscribers = await getSubscirbers();

//     for(const subscriber of subscribers){
//         const { data, error } = await resend.emails.send({
//             from: fromEmail,
//             to: [subscriber.email],
//             subject: "New Blog on site",
//             react: NewsletterMail({
//                 blogContent:latestBlog.blogContent, 
//                 blogImage:latestBlog.blogImage, 
//                 blogTitle:latestBlog.title, 
//                 currentSlug:latestBlog.currentSlug, 
//                 smallDescription:latestBlog.smallDescription}),
//           });
//           return Response.json(data);

//     }   
//     const saveRecentBlog = await prisma.mailedBlogs.create({
//         data:{
//             title: latestBlog.title,
//             slug: latestBlog.currentSlug,   
//         }
//     })
// } 

// cron.schedule('0 0 */2 * *', () => {
//     console.log('Running cron job to send newsletter');
//     sendNewsletter();
//   });


export async function POST(req: any, res: any) {
  console.log('Running cron job to send newsletter');
  const  body = await req.json();
  console.log(body);
      try {
        const query = `*[_type == 'blog'] | order(_createdAt desc)[0]{
            title,
            smallDescription,
            'currentSlug': slug.current,
            blogImage,
            blogContent,
            _id
          }`;
          
        const latestBlog = await client.fetch(query);
        await prisma.$connect();
        const isRecentBlogSent = await prisma.mailedBlogs.findFirst({
          where:{slug: {equals: latestBlog.currentSlug}}
        });
        if(isRecentBlogSent){
            return Response.json({mssg:"Blog already sent"});
        }

        const subscirbers = await prisma.subcribers.findMany({
          select:{name: true,email: true}
      });
        

        for(const subscriber of subscirbers){
          const { data, error } = await resend.emails.send({
              from: fromEmail,
              to: [subscriber.email],
              subject: "New Blog on site",
              react: NewsletterMail({
                  blogContent:latestBlog.blogContent, 
                  blogImage:latestBlog.blogImage, 
                  blogTitle:latestBlog.title, 
                  currentSlug:latestBlog.currentSlug, 
                  smallDescription:latestBlog.smallDescription}),
            });
          }   
        const saveRecentBlog = await prisma.mailedBlogs.create({
            data:{
                title: latestBlog.title,
                slug: latestBlog.currentSlug,   
                id: latestBlog._id
            }
        })
        console.log('All mails sent');
        return Response.json({mssg:"All mail sent"})
      } catch (error) {
        console.log(error);
        return Response.json({mssg:"An error occured while sending mails"});
      }
  
  }