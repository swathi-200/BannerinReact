import headerstyles from '../styles/header.module.css';
import Image from "next/image";

function Footer()
{
    return(
        <div>
            <div className={headerstyles.footerpart}>
             <div className={headerstyles.trival}>
                TrivialBuy
             </div>
             <div className={headerstyles.iconboxtwo}>
                        <div className={headerstyles.imageone}>
                            <Image src='/flagicon.png' width="28" height="28" />
                        </div>
                        <div className={headerstyles.dollar}>
                            $
                        </div>
                        <div className={headerstyles.en}>
                            En
                        </div>
                   </div>
                   <div className={headerstyles.footercontent}>
                     <div className={headerstyles.columnone}>
                          <ul className={headerstyles.footerone}>
                            
                            <li><a href="">Client Profile</a></li>  
                            <li><a href="">Billing</a></li>
                            <li><a  href="">My Projects</a></li> 
                            <li><a  href="">My Orders</a></li> 
                            <li><a  href="">My Bundles</a></li>

                          
                          </ul>
                     </div>
                     <div className={headerstyles.columntwo}>
                          <ul className={headerstyles.footertwo}>
                            
                            <li><a href="">About Us</a></li>  
                            <li><a href="">Contact Us</a></li>
                            <li><a  href="">FAQ</a></li> 
                            <li><a  href="">Privacy Policy</a></li> 
                            <li><a  href="">Terms and Conditions</a></li>

                          
                          </ul>
                     </div>
                     <div className={headerstyles.columnthree}>
                          <ul className={headerstyles.footerthree}>
                            
                            <li><a href="">Trival Boy</a></li>  
                            <li><a href="">Address Line 1</a></li>
                            <li><a  href="">City,Country</a></li> 
                            <li><a  href="">+99556545356</a></li> 
                            

                          
                          </ul>
                     </div>
                     {/* <div>
                          <ul className={headerstyles.footerone}>
                            <a href="">Billing</a>
                            <a href="">Contact Us</a>
                            <a className={headerstyles.endpart} href="">Address Line 1</a>

                          </ul>
                     </div> */}
                   </div>
                   <div className={headerstyles.lastfooter}>
                         TrivalBoy 2020,All Rights Reserved
                   </div>
            </div>
        </div>
    )
}
export default Footer;