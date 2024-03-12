import Image from 'next/image';
import NavigationBar from './ui/navbar/navbar'
import styles from './ui/app.module.css'

export default function Page() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.heroContainer}`}>
          <div className={`${styles.heroContent}`}>

            <div className={`${styles.heroTitleCard}`}>
                <h1 className={`${styles.heroTitleCardText}`}>
                  study in&nbsp;
                  <span>
                    New<br/>Zealand
                  </span>
                </h1>
            </div>

            <img 
              className={`${styles.heroCompanies}`} 
              src="/company_logos.png"
              alt="Think First and Overseas Study Centre logos" 
            />

            <div className={`${styles.heroSocials}`}>
              <div className={`${styles.heroSocialChip}`}>
                <img 
                  className={`${styles.heroSocialIcon}`}
                  src="/insta_icon.png"
                  alt="Instagram logo" 
                />
                oscindonesia
              </div>
              <div className={`${styles.heroSocialChip}`}>
                <img 
                  className={`${styles.heroSocialIcon}`}
                  src="/whatsapp_icon.png"
                  alt="Whatsapp icon" 
                />
                +62 81 2300 5470 / +64 224 298 449
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

{/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}


// {/* <NavigationBar />
//       <div className={`${styles.container} min-h-[80vh] px-5`}>
//         <div className={`${styles.heroContainer}`}>
//           <h1 className={`${styles.heroHeading} bg-gray-900 text-8xl font-bold text-neutral-content pr-10`}>Go further...</h1>      
//           <div className={`${styles.heroSubheading} bg-gray-900`}>
//             <h2 className={`text-5xl font-semibold text-neutral-content`}>Study in New Zealand</h2>   
//             <button className={`${styles.heroButtons} btn mr-20`}>Apply now</button>
//           </div>

  
//           <div className={`${styles.heroRight}`}>
//             <div></div>
//           </div>
//         </div>
//       </div> */}