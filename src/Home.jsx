import pattern2 from './assets/bg-pattern-home-2.svg'
import pattern3 from './assets/bg-pattern-home-3.svg'
import pattern4 from './assets/bg-pattern-home-4-about-3.svg'
import icon_person from './assets/icon-person.svg'
import icon_cog from './assets/icon-cog.svg'
import icon_chart from './assets/icon-chart.svg'
import quotes from './assets/icon-quotes.svg'
import aiysha_avatar from './assets/avatar-aiysha.jpg'
import arthur_avatar from './assets/avatar-arthur.jpg'
import kady_avatar from './assets/avatar-kady.jpg'
import pattern5 from './assets/bg-pattern-home-5.svg'
import pattern6 from './assets/bg-pattern-home-6-about-5.svg'
import pattern7 from './assets/bg-pattern-home-1.svg'

const Home = () => {

    return (
        <section>
          <article className='lg:overflow-hidden'>
                <img src={pattern7} alt='pattern design' className='hidden lg:flex lg:relative lg:top-24 lg:right-28 '/>
                <div className='lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-1110 lg:mx-auto lg:-mt-32 lg:mb-36 '>
                    
                    <h1 className="text-white font-bold text-40 text-center leading-10 px-8 my-8 md:text-62 md:leading-56 md:px-48 lg:text-100 lg:leading-100 lg:w-635 lg:px-10 lg:text-left  "> Find the best <span className="text-custom_orange">talent</span> </h1>

                    <div className=' lg:w-445 lg:h-48 lg:pl-20'>

                        <div className=' hidden h-1 w-12 bg-ocean_blue  md:w-50'></div>

                        <p className="text-white text-15 text-center leading-7 px-6 mb-10 md:px-40 md:mb-28 lg:text-lg lg:pl-0 lg:pr-0 lg:text-left lg:translate-y-full lg:-mt-9" >Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>

                    </div>
                </div>
                <img src={pattern2} alt='pattern design' className='md:mx-auto lg:mr-0 lg:ml-auto lg:pr-40'/>
          </article>

          <article className='bg-space_green overflow-hidden px-6 md:px-24 '>

                <img src={pattern3} alt='pattern design' className='relative ml-auto left-32 md:left-52 lg:top-96.6'/>

                <div className='lg:flex lg:flex-row lg:justify-between  lg:w-1110 lg:mx-auto lg:-mt-16 '>

                    <div className='-mt-48 md:-mt-28 lg:w-445 lg:h-200 lg:-mt-6'>
                        <div className='h-1 w-12 bg-custom_orange mb-8 md:w-50'></div>
                        <h2 className='leading-8 text-white text-32 w-240 font-bold pr-4 md:w-445 lg:text-5xl lg:leading-48'>Build & manage distributed teams like no one else.</h2>
                    </div>

                    <div className='md:w-573 md:mb-32 '>
                        <div className='flex flex-col justify items-center mt-12 mb-8 md:flex-row '>
                            <img src={icon_person} alt='icon of a person' className='mb-4 '/>
                            <div className='md:translate-x-5'>
                                <h3 className='font-bold text-lg text-custom_orange mb-2 text-center md:text-left md:-translate-y-2 lg:text-lg'>Experienced Individuals</h3 > 
                                <p className='text-15 font-semibold text-center text-white md:text-left '>Our network is made up of highly experienced professionals who are passionate about what they do.</p> 
                            </div>
                        </div>

                        <div className='flex flex-col justify items-center my-8 md:flex-row'>
                            <img src={icon_cog} alt='icon of a cog' className='mb-4' />
                            <div className='md:translate-x-5'>
                                <h3 className='font-bold text-lg text-custom_orange mb-2 text-center md:text-left md:-translate-y-2 lg:text-lg'>Easy to Implement</h3> 
                                <p className='text-15 font-semibold text-center text-white md:text-left'>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify items-center my-8 md:flex-row'> 
                            <img src={icon_chart} alt='icon of a chart ' className='mb-4'/>
                            <div className='md:translate-x-5'>
                                <h3 className='font-bold text-lg text-custom_orange mb-2 text-center md:text-left md:-translate-y-2 lg:text-lg'>Enhanced Productivity</h3> 
                                <p className='text-15 font-semibold text-center text-white md:text-left'>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>

          </article>

          <article className='bg-lighter_green'>
                <img src={pattern4} alt='design pattern'/>

                <h2 className='text-32  leading-8 font-bold text-white my-8 px-8 text-center md:px-36 md:-mt-0.5 lg:leading-48 lg:text-5xl lg:px-52 lg:mt-8'>Delivering real results for top companies.Some of our <span className='text-ocean_blue'>success stories.</span></h2>

                <div className='lg:flex lg:flex-row lg:justify-around lg:items-center lg:w-1110 lg:mx-auto '>
                    <div className='flex flex-col justify-center items-center px-8 md:px-24 lg:px-0  lg:w-350 '>
                        <img src={quotes} alt='icon of quotes' className='-mb-4'/>

                        <p className='text-15 text-white font-semibold leading-6 text-center'>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p> 

                        <p className='text-lg text-ocean_blue font-bold leading-7 mt-4 '>Kady Baker</p> 
                    
                        <p className='text-13 text-white font-medium'>Product Manager at Bookmark</p>

                        <img src={kady_avatar} alt='avatar' className='w-16 h-16 rounded-full border-2 border-white mt-4 mb-10 lg:mb-0'/>
                    </div>

                    <div className='flex flex-col justify-center items-center px-8 md:px-24 lg:px-0 lg:w-350  '>
                        <img src={quotes} alt='icon of quotes' className='-mb-4'/>

                        <p className='text-15 text-white font-semibold leading-6 text-center'>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p> 

                        <p className='text-lg text-ocean_blue font-bold leading-7 mt-4 '>Aiysha Reese</p> 
                    
                        <p className='text-13 text-white font-medium'>Founder of Manage</p> 

                        <img src={aiysha_avatar} alt='avatar' className='w-16 h-16 rounded-full border-2 border-white mt-4 mb-10 lg:mb-0'/>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center px-8 md:px-24 lg:px-0 lg:w-350 '>
                        <img src={quotes} alt='icon of quotes' className='-mb-4'/>

                        <p className='text-15 text-white font-semibold leading-6 text-center'>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p> 
                    
                        <p className='text-lg text-ocean_blue font-bold leading-7 mt-4 '>Arthur Clarke</p> 
                    
                        <p className='text-13 text-white font-medium'>Co-founder of MyPhysio</p> 

                        <img src={arthur_avatar} alt='avatar' className='w-16 h-16 rounded-full border-2 border-white mt-4 mb-14 md:mb-0'/>
                    </div>


                </div>
                
              
                <img src={pattern5} alt='design pattern' className='ml-auto'/>


                
          </article>

          <article className='bg-custom_orange pt-16 md:h-200 md:overflow-hidden'>

            <div className='md:flex md:flex-row md:translate-y-3 md:translate-x-12 lg:translate-x-48'>
                <h2 className='text-32 font-bold leading-8 text-space_green text-center px-12 mb-8 lg:text-5xl lg:leading-48'>Ready to get started?</h2>

                <button className='block border-2 border-space_green font-bold w-153 h-12 rounded-3xl mx-auto -mb-10 text-space_green'>Contact Us</button>

            </div>
            

            <img src={pattern6} alt='design pattern' className='md:-translate-y-14 lg:-translate-y-20'/> 
          </article>
        </section>
    )

}

export default Home;