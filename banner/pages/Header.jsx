import { Layout} from 'antd';
import headerstyles from '../styles/header.module.css';
import SearchBox from './searchbox';
import Image from "next/image";


function HeaderPart()
{
    return(
        <>
            {/* <Layout>
                <Header>
                    <div className={headerstyles.nav}>
                        <div className={headerstyles.logo}>
                           Trival Buy
                        </div>
                             <SearchBox />
                    <div className={headerstyles.imageone}>
                    <Image src='/flagicon.png' width="50" height="50" />
                    </div>
                    </div>
                </Header>
                <Header>
                    <nav>
                        <div>
                            
                        </div>
                    </nav>
                </Header>
            </Layout> */}

            <div className={headerstyles.navpart}>
                {/* 1st navbar */}
                <div className={headerstyles.nav}>

                    <div className={headerstyles.logo}>
                        Trival Buy
                    </div>

                    <div className={headerstyles.searchbox}>
                        <SearchBox />
                    </div>

                   <div className={headerstyles.iconbox}>
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
                    
                </div>

                {/* 2nd navbar */}
                <div className={headerstyles.navbartwo}>
                    <>
                    <div className={headerstyles.contact}>
                         <Image src='/contcticon.png' width="26" height="26" />

                    </div>
                    
                    <div className={headerstyles.name}>
                        Firstname
                    </div>
                    <div className={headerstyles.xyz}>
                        XYZ
                    </div>
                    <div className={headerstyles.company}>
                        Company
                    </div>
                    </>
                    <div className={headerstyles.link}>
                         <ul>
                              <a href='/client' className={headerstyles.linkone}>Client Profile</a>
                              <a href='/bill' className={headerstyles.linkone}>Billing</a>
                              <a href='/project' className={headerstyles.linkone}>My Projects</a>
                              <a href='/bundles' className={headerstyles.linkone}>My Bundles</a>
                              <a href='/order' className={headerstyles.linkone}>My Orders</a>
                        </ul>
                         </div>
                         <>
                         <div className={headerstyles.bellicons}>
                             <Image src='/bellicon.png' width="25" height="25"/>
                         </div>
                         <div className={headerstyles.supermarket}>
                            <Image src='/supermarket.png' width="25" height="25"/>
                         </div>
                         </>
                    </div>
                </div>
            

            
    
        
        </>
    )
        // <Layout>
        // <div>
        //         <Header>
        //             <div className="logo">
        //                 <a href="">Home</a>
        //                 <a href="">About</a>
        //                 <a href="">Products</a>
        //                 <a href="">Services</a>
        //                     <div className='text-button'>
        //                         <div className='input-text'>
        //                             <input type="text"/>
        //                         </div>
        //                         <div className='search-button'>
        //                             <button >Search</button>
        //                         </div>
        //                         <div className='dark-light'>
        //                             <button onClick={ToggleTeme}>Mode</button>
        //                             </div>
        //                     </div>
        //             </div>
        //         </Header>
        // </div>
        // </Layout>
    
}
export default HeaderPart;