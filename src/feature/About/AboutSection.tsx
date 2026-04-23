import AboutImage from '../../assets/images/about.jpg'

export default function AboutSection() {
    return <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-[1fr_600px] gap-x-6 ">
        <div className="bg-(--card-surface-color) rounded-[20px] p-10">
            {/* <p className='sil-regular text-[48px] mb-4'>About</p> */}
            <p className='noto-music-regular text-[16px] leading-7'>AHEB Coffee is a cozy café in Antipolo known for its unique take on coffee using Asin Tibuok, a traditional Filipino sea salt that enhances flavor and reduces bitterness. Alongside its signature drinks, the café serves pasta, sandwiches, and pastries in a relaxed and welcoming space—perfect for unwinding or catching up with friends.</p>
            <p className='noto-music-regular-medium mt-4 mb-2'>Operating Hours:</p>
            <p className='noto-music-regular mb-1'> Tue & Thur: 3:00 PM - 10:00 PM</p>
            <p className='noto-music-regular'>Fri - Sun: 06:00 AM - 10:00PM</p>
        </div>
        <div className="row-start-1 lg:col-start-2 w-full  lg:row-start-1 bg-(--card-surface-color) h-[400px] overflow-hidden rounded-[20px]">
            <img src={AboutImage} alt="About Image" className='h-full w-full object-cover object-[30%_50%] ' />
        </div>
    </div>
}