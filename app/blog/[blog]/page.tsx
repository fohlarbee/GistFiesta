import { Blog, BlogDetails } from "@/app/lib/BlogInterface";
import { client, imageUrl } from "@/app/lib/sanity"
import { PortableText } from "next-sanity";
import Image from "next/image";


export const revalidate = 30;

async function fetchData(slug: string){
    // console.log('this is slug', slug)
    const query = `*[_type == 'blog' && slug.current == '${slug}']{
        title,
       smallDescription,
       'currentSlug': slug.current,
       blogImage,
       blogContent
         
   } [0] `

      const data = await client.fetch(query);
    //   console.log(data)

       return data;
    
}

export default async function BlogArticle({ params}:{ params: { blog: string } }) {


    const blog: BlogDetails = await fetchData(params.blog);
    // console.log(blog)
    return (
        <div className="mt-4">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Fohlarbee - Blog
                    
                </span>
                <span className="mt-2 block text-3xl text-center  leading-8 font-bold tracking-tight sm:text-4xl">
                    {blog.title}
                </span>
            </h1>

            <Image 
            width={800}
            height={800}
            alt="title image"
            priority
            className="mt-5 rounded-sm border mb-4"
            src={imageUrl(blog.blogImage).toString()}

            />
            <div className="prose prose-xl prose-orange prose-h3:text-8xl dark:text-[#fff] dark:prose-lead:text-[#fff] dark:prose-blockquote:text-primary dark:prose-strong:text-[#fff]">
                      <PortableText value={blog.blogContent}
                      
                       />


            </div>
        </div>
    )
}