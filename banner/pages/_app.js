import HeaderPart from "./Header"
import headerstyles from '../styles/header.module.css';
import Content from "./content";
import Footer from "./footer";

import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return(
    <div className={headerstyles.header}>
      <HeaderPart />
   <Content />
   <Footer />
    <Component {...pageProps} /> 
  
   </div>
  )
}
