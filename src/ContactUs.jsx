import icon_person from './assets/icon-person.svg'
import icon_cog from './assets/icon-cog.svg'
import icon_chart from './assets/icon-chart.svg'
import pattern1 from './assets/bg-pattern-contact-2.svg'
import pattern2 from './assets/bg-pattern-about-2-contact-1.svg'

const ContactUs = () => {

    return (
        <section className='overflow-hidden px-6 lg:flex lg:flex-row '>
            <div className='lg:mt-20'>
                <h1 className="text-white text-40 font-bold leading-10 my-8 text-center md:text-62 md:leading-56">Contact</h1>
             
                <h2 className="text-custom_orange text-32 font-bold text-center mb-8 md:leading-48">Ask us about</h2>

                <img src={pattern2} alt='design pattern' className='hidden  md:flex md:relative md:right-32 md:bottom-40 lg:bottom-44'/>

                <div className='text-white text-lg font-bold left-7 mb-8 md:w-515 md:flex md:flex-col md:justify-center md:items-center  md:mx-auto md:-mt-44 lg:pl-40  lg:w-542'>
                    <div className='flex flex-row justify-around items-center w-full mb-4 md:justify-start'>
                        <img src={icon_person} alt='icon of a person' className='mr-6'/>
                        <p className='px-2 md:px-0'>The quality of our talent network</p>
                    </div> 

                    <div className='flex flex-row  justify-center items-center w-full mb-4 md:justify-start'>
                        <img src={icon_cog} alt='icon of a cog' className='mr-6'/>
                        <p className='px-2'>Usage & implementation of our software</p>
                    </div> 

                    <div className='flex flex-row  justify-center items-center w-full mb-4 md:justify-start'>
                        <img src={icon_chart} alt='icon of a chart' className='mr-6'/>
                        <p className='px-2'>How we help drive innovation</p>
                    </div> 
                </div>

            </div>
            

            <form className='px-6 md:px-28 lg:w-542 lg:px-0 lg:translate-x-44 lg:mt-28'>
                <label>
                    <span className='text-15 text-white opacity-60'>Name</span>
                    <input className='block border-b border-gray-300 bg-army_green w-full lg:mt-2 '/>
                </label>

                <label>
                    <span className='text-15 text-white opacity-60'>Email</span>
                    <input className='block  border-b border-gray-300 bg-army_green w-full lg:mt-1 '/>
                </label>

                <label>
                    <span className='text-15 text-white opacity-60'>Address</span>
                    <input className='block  border-b border-gray-300 bg-army_green w-full lg:mt-1 '/>
                </label>

                <label>
                    <span className='text-15 text-white opacity-60'>Company Name</span>
                    <input className='block  border-b border-gray-300 bg-army_green w-full lg:mt-1 '/>
                </label>

                <label >
                    <span className='text-15 text-white opacity-60'>Title</span>
                    <input className='block  border-b border-gray-300 bg-army_green w-full lg:mb-4 lg:mt-1 '/>
                </label>

                <label className=''>
                    <span className='text-15 text-white opacity-60   '>
                        Message
                    </span>

                    <textarea className='block  border-b border-gray-300 bg-army_green w-full lg:mb-4'></textarea>
                </label>
 
                <button type='submit' className='w-123 h-12 bg-white rounded-3xl font-semibold text-lg leading-7 mt-4 '>
                    Submit
                </button>

                <img src={pattern1} alt='design pattern' className='relative top-28 left-64 -mt-32 md:left-96.65 md:top-6 lg:left-96.7 '/>
            </form>

            
               
        </section>
    )
}

export default ContactUs;