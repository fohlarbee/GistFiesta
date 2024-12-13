import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "./components/Navbar"
import { Blog } from "./lib/BlogInterface";
import { client, imageUrl } from "./lib/sanity"
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();





export const revalidate = 30;


async function fetchBlogs(){
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    'currentSlug': slug.current,
    blogImage,
    _id
  }`

  const data = await client.fetch(query);

  // if(!isRecentBlogSent){
  //   const endpoint = 'api/news';
  //   console.log(endpoint);
  //   const options = {
  //     method: 'POST',
  //     headers:{'Content-Type': 'application/json'},
  //   }
  //   const response = await fetch('http://localhost:3000/api/news', {
  //     method: 'POST',
  //     headers:{'Content-Type': 'application/json'},
  //   });
  //   // console.log('response', response);
  //   console.log(response.status)
    // const data = await response.json();
    // console.log(data);

    

  // }


  return data;

}

export default async function App  ()  {

  const blogs: Blog[] = await fetchBlogs();   
  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10 ">
      {blogs && blogs.map((blog: Blog, id: any) => (
        // <>
        <Card key={id} className=" border-4">
          <Image src={imageUrl(blog.blogImage).toString()} 
          alt="image" 
          width={500} 
          height={500}
          className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-3">
           {/* <button onClick={() => fetchBlogs}>click</button> */}

            <h3 className="line-clamp-2 text-lg font-bold ">{blog.title}</h3>
            <p className="text-gray-500 line-clamp-3 mt-2  text-sm">{blog.smallDescription}</p>
            <Button asChild className="w-full mt-2">
              <Link href={`/blog/${blog.currentSlug}`}>Read more...</Link>

            </Button>

          </CardContent>
        </Card>

        
        // </>

      ))}
    </div>
    </>
   
  )
}
