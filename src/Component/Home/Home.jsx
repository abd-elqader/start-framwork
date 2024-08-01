import logo from '../../assets/student.jpg';
export default function Home() {
    return (
        <>
            <div className="w-full h-screen text-white text-center pt-16 flex flex-col items-center ">
                <img src={logo} alt="logo" className='w-[300px] h-[300px] rounded-full'/>    
                <h2 className='text-4xl py-8'>start Framework</h2>
                <hr className="border-t-4 w-[300px]  border-gray-300" />
                <p className='text-2xl py-6'>Graphic Artist - Web Designer - Illustrator</p>
            </div>        
        </>
    )
}
