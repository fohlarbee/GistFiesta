import { Button } from "../../components/ui/button";
import '../styles/footer.css'


  import {NewsLetterDialog} from '../components/Dialog'

 const AppFooter = () => {
    return (
        <footer id="about" className="grid md:grid-cols-2 gap-4">
                <div className="px-4">
                          <NewsLetterDialog/>

                </div>
                <div className=" text-center">
                    <p className="max-w-md leading-relaxed text-gray-500 text-sm border-l-4">
                        You are part of the gang now! Stay subscribed for more gists, behind-the-scenes stories, and exclusive content!                       
                    </p>
                    <ul className="un-list text-center flex flex-row">
                        <li><a  className="text-red-400 footer-item text-sm">About</a></li>
                        <li><a className="footer-item text-red-400 text-sm">Blogs</a></li>
                        <li><a className="footer-item text-sm">Contact us</a></li>
                        <li><a className="footer-item text-sm">FAQs</a></li>
                    </ul>
                   
                </div>
               


          

        </footer>
        
    )
}


export default AppFooter;