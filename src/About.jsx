import pattern1 from './assets/bg-pattern-about-1-mobile-nav-1.svg'
import pattern2 from './assets/bg-pattern-about-2-contact-1.svg'
import aden_avatar from './assets/avatar-aden.jpg'
import christian_avatar from './assets/avatar-christian.jpg'
import cruz_avatar from './assets/avatar-cruz.jpg'
import drake_avatar from './assets/avatar-drake.jpg'
import griffin_avatar from './assets/avatar-griffin.jpg'
import nikita_avatar from './assets/avatar-nikita.jpg'
import twitter_icon from './assets/icon-twitter.svg'
import linkedin_icon from './assets/icon-linkedin.svg'
import close from './assets/icon-close.svg'
import cross from './assets/icon-cross.svg'
import { useState } from 'react'
import pattern3 from './assets/bg-pattern-home-4-about-3.svg'
import pattern4 from './assets/bg-pattern-about-4.svg'
import pattern5 from './assets/bg-pattern-home-6-about-5.svg'
import logo_gadgets from './assets/logo-gadgets-now.png'
import logo_jakarta from './assets/logo-jakarta-post.png'
import logo_tech from './assets/logo-tech-radar.png'
import logo_guardian from './assets/logo-the-guardian.png'
import logo_verge from './assets/logo-the-verge.png'

const About = () => {

    const [showQuotes, setShowQuotes] = useState(new Array(6).fill(false))

    const toggleQuote = (index)  =>{
        const newShowQuotes = [...showQuotes];
        newShowQuotes[index] = !newShowQuotes[index]
        setShowQuotes(newShowQuotes);

    };

    const directors = [
        {
            avatar: nikita_avatar,
            name: 'Nikita Marks',
            position: 'Founder & CEO',
            quote: '"It always amazes me how much talent there is in every corner of the globe."'
        },
        {
            avatar: christian_avatar,
            name: 'Cristian Duncan',
            position: 'Co-founder & COO',
            quote: '"Distributed teams required unique processes. You need to approach work in a new way."'
        },
        {
            avatar: cruz_avatar,
            name: 'Cruz Hamer',
            position: 'Co-founder & CTO',
            quote: '"Technology is at the forefront of enabling distributed teams. That\'s where we come in."'
        },

        {
            avatar: drake_avatar,
            name: 'Drake Heaton',
            position: 'Business Development Lead',
            quote: '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”'
        },
        {
            avatar: griffin_avatar,
            name: ' Griffin Wise',
            position: 'Lead Marketing',
            quote: '“Unique perspectives shape unique products, which is what you need to survive these days.”'
        },
        {
            avatar: aden_avatar,
            name: ' Aden Allan ',
            position: 'Head of Talent',
            quote: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
        },
    ];

   

    return (
        <section>
            <article className="text-center px-6 mt-12 overflow-hidden  h-520">

                <div className='lg:flex lg:flex-row lg:w-1110 lg:mx-auto lg:justify-between lg:items-center '>

                    <h1 className="font-bold text-40 leading-10 text-white mb-5 md:text-62 md:leading-56 lg:text-62 lg:leading-100">About</h1>

                    <div className=' lg:w-730 lg:h-48 lg:pl-28 '>

                        <div className='lg:h-1 lg:w-12 lg:bg-custom_orange  '></div>

                        <p className="text-white text-15 leading-7 mb-4 md:px-36 lg:px-0 lg:text-left lg:text-lg lg:translate-y-full lg:-mt-10 ">We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
                    </div>

                </div>
                

                <img src={pattern1} alt='design pattern' className='ml-auto relative left-32 md:bottom-16 md:-mt-12 '/>

            </article>
            <article className='  overflow-hidden  text-white bg-lighter_green md:-mt-12'>
                <img src={pattern2} alt='design pattern' className='relative right-28 bottom-26 -mb-28 md:right-24 md:bottom-0 '/>

                <h2 className='text-32 text-white font-bold leading-8 text-center mb-5 md:mb-20'>Meet the directors</h2>

               <div className='md:grid md:grid-cols-2 md:gap-1 md:px-24 lg:grid-cols-3 '>
                    {directors.map((director, index) => (
                        <div 
                            key={director.name}
                            className='flex flex-col justify-center items-center bg-space_green w-327 h-281 mx-auto mb-12 md:w-281 lg:w-350 '
                        >
                            <img 
                            src={director.avatar} 
                            alt='avatar' 
                            className={`${!showQuotes[index] ? 'block' : 'hidden'} w-24 h-24 rounded-full border-2 border-border_stokes mb-4`}
                            />
                        
                             <p className={`${showQuotes[index] ? 'block mb-4' : 'block mb-0'} text-ocean_blue text-lg leading-7 font-bold`}>
                            {director.name}
                            </p>

                            <p className={`${!showQuotes[index] ? 'block' : 'hidden'} font-medium text-15 leading-6`}>
                            {director.position}
                            </p>

                            <p className={`${showQuotes[index] ? 'block' : 'hidden'} text-15 leading-5 font-semibold px-16 mb-4`}>
                            {director.quote}
                            </p>

                            <div className={`${showQuotes[index] ? 'flex' : 'hidden'} flex-row justify-around w-20`}>
                                <img src={twitter_icon} alt='twitter_icon'/>
                                <img src={linkedin_icon} alt='linkedin_icon'/>
                            </div>

                            <button 
                                className={`${!showQuotes[index] ? 'flex' : 'hidden'} relative top-16 flex-col justify-center items-center w-14 h-14 bg-custom_orange rounded-full`} 
                                onClick={() => toggleQuote(index)}
                            >
                                <img src={cross} alt='cross_icon' className='brightness-50 opacity-85'/>
                            </button>
                            <button 
                                className={`${showQuotes[index] ? 'flex' : 'hidden'} relative top-16 flex-col justify-center items-center w-14 h-14 bg-ocean_blue rounded-full`} 
                                onClick={() => toggleQuote(index)}
                            >
                                <img src={close} alt='x_icon' className='brightness-0 opacity-85'/>
                            </button>


                        </div>
                    ))}
               </div>

               <img src={pattern3} alt='desgin pattern' className='ml-auto' />
                   
                 

            </article>

            <article className='bg-space_green overflow-hidden flex flex-col justify-center items-center'>
                <img src={pattern4} alt='design pattern' className='relative right-28 bottom-24 md:right-0 md:mr-auto lg:bottom-0'/>

                <h2 className='font-bold text-32 leading-8 text-white mb-4 md:-mt-20 md:mb-14 lg:text-5xl lg:leading-48 lg:mb-24'>
                    Some of our clients
                </h2>

                <div className='w-162 h-360  flex flex-col justify-around mb-4 md:flex-row md:w-full md:h-7 md:mb-32 lg:mb-36 '>
                    <img src={logo_verge} alt='logo' className='md:w-24 '/>
                    <img src={logo_jakarta} alt='logo' className='md:w-24 '/>
                    <img src={logo_guardian} alt='logo' className='md:w-24 '/>
                    <img src={logo_tech} alt='logo' className='md:w-24 '/>
                    <img src={logo_gadgets} alt='logo' className='md:w-24 '/>
                </div>

            </article>

            <article className='bg-custom_orange pt-16 md:h-200 md:overflow-hidden'>
                <div className='md:flex md:flex-row md:translate-y-3 md:translate-x-12 lg:translate-x-48 '>
                    <h2 className='text-32 font-bold leading-8 text-center px-12 mb-8 lg:text-5xl lg:leading-48 '>Ready to get started?</h2>

                    <button className='block border-2 border-black font-bold w-153 h-12 rounded-3xl mx-auto -mb-10'>Contact Us</button>

                </div>
                

                <img src={pattern5} alt='design pattern' className='md:-translate-y-14 lg:-translate-y-20'/> 
            </article>

            
             
        </section>
    )

}

export default About