import Image from "../Image/Image";
import src1 from "../../assets/image1.jpeg";
import src2 from "../../assets/image2.jpeg";
import src3 from "../../assets/image3.jpeg";
export default function Portfolio() {
    const alt1 = "image1";
    const alt2 = "image2";
    const alt3 = "image3";

    return (
        <div className="w-full  justify-center">
            <h2>Portfolio Component</h2>
            <div className="w-8/12">
                <Image src={src1} alt={alt1}/>  
            </div>
            <div className="w-8/12">
                <Image src={src2} alt={alt2}/>  
            </div>
            <div className="w-8/12">
                <Image src={src3} alt={alt3}/>  
            </div>
            
           
        </div>
    )
}
