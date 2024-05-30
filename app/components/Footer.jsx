import { Button } from "@/components/ui/button";


  import {NewsLetterDialog} from '../components/Dialog'

 const AppFooter = () => {
    return (
        <footer className="bg-red-500 py-12  ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="justify-center text-center pt-10 mt-12">
                           
                          <NewsLetterDialog/>

                   
                    <p className="mx-auto mt-6 py-6 max-w-md text-center leading-relaxed text-gray-500  mb-4">
                    You are part of the gang now! Stay subscribed for more gists, behind-the-scenes stories, and exclusive content!                       
                    </p>

                {/* <div className=""></div> */}
                <div className="justify-center flex flex-wrap ">
                      <ul className="justify-center flex">
                        <div className=" flex-wrap w-[100%]  sm:block bg-red-400 flex max-w-[10px]">
                        <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">About</span> </a>
                            </li>
                            
                            <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">Career</span> </a>
                            </li>
                            <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">History</span> </a>
                            </li>
                            <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">Project</span> </a>
                            </li>
                            <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">Services</span> </a>
                            </li>
                            <li>
                                <a href="#"> <span className=" text-white">&#x2022;</span> 
                                <span  className="text-primary transition hover:text-gray-700/75  px-3  w-[30%]">Blog</span> </a>
                            </li>
                            
                            
                            
                            
                            

                        </div>
                         
                      </ul>

                </div>
                

                </div>
          
       

            </div>


          

        </footer>
        // <footer className="bg-gray-100 border-t-4 mt-8 pt-6 py-10">
        // <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        //   <div className="flex justify-center text-teal-600">
        //     <div className="bg-primary px-8 py-5 mx-4 my-5 border-r-8 h-5 w-5  ">
        //     <Button className="w-full ">
               
        //         Click me!
        //     </Button>

        //     </div>
           
          
        //   </div>
      
        //   <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
        //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
        //     itaque neque.
        //   </p>
      
        //   <ul className="mt-12 flex flex-wrap justify-center">
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/75 " href="#"> About </a>
        //     </li>
      
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/75" href="#"> Careers </a>
        //     </li>
      
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/75" href="#"> History </a>
        //     </li>
      
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/75" href="#"> Services </a>
        //     </li>
      
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/75" href="#"> Projects </a>
        //     </li>
      
        //     <li>
        //       <a className="text-primary transition hover:text-gray-700/5" href="#"> Blog </a>
        //     </li>
        //   </ul>
      
         
        // </div>
    //   </footer>
    )
}


export default AppFooter;