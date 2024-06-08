import { Button } from "@/components/ui/button";
import '../styles/footer.css'


  import {NewsLetterDialog} from '../components/Dialog'

 const AppFooter = () => {
    return (
        <footer className="bg-red-500 py-12  ">
                <div className="">
                           <div className=" text-center">
                          <NewsLetterDialog/>

                           </div>

                   
                    <p className="mx-auto mt-6 py-6 max-w-md text-center leading-relaxed text-gray-500  mb-4">
                    You are part of the gang now! Stay subscribed for more gists, behind-the-scenes stories, and exclusive content!                       
                    </p>

                </div>
                <ul className="un-list">
                    <li><a  className="text-red-400 footer-item">About</a></li>
                    <li><a className="footer-item text-red-400">Blogs</a></li>
                    <li><a className="footer-item">Contact us</a></li>
                    <li><a className="footer-item">FAQs</a></li>



                </ul>


          

        </footer>
        
    )
}


export default AppFooter;