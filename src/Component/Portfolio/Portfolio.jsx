import src1 from "../../assets/image1.jpeg";
import src2 from "../../assets/image2.jpeg";
import src3 from "../../assets/image3.jpeg";
export default function Portfolio() {
    const alt1 = "image1";
    const alt2 = "image2";
    const alt3 = "image3";

    return (
        <>
            <h2 className='text-4xl py-8 text-center'>Portfolio</h2>
            <hr className="border-t-4 w-[300px] mx-auto border-gray-300 py-2"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto">
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src1} alt={alt1} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src2} alt={alt2} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src3} alt={alt3} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src1} alt={alt1} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src2} alt={alt2} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img className="h-auto w-full rounded-lg" src={src3} alt={alt3} />
                    <div className="bg-red-900/75 flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 ">
                        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
