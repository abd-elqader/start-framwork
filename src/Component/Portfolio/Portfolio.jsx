import src1 from "../../assets/image1.jpeg";
import src2 from "../../assets/image2.jpeg";
import src3 from "../../assets/image3.jpeg";
export default function Portfolio() {
    const alt1 = "image1";
    const alt2 = "image2";
    const alt3 = "image3";

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto">
            <div>
                <img className="h-auto w-full rounded-lg" src={src1} alt={alt1} />
            </div>
            <div>
                <img className="h-auto w-full rounded-lg" src={src2} alt={alt2} />
            </div>
            <div>
                <img className="h-auto w-full rounded-lg" src={src3} alt={alt3} />
            </div>
            <div>
                <img className="h-auto w-full rounded-lg" src={src1} alt={alt1} />
            </div>
            <div>
                <img className="h-auto w-full rounded-lg" src={src2} alt={alt2} />
            </div>
            <div>
                <img className="h-auto w-full rounded-lg" src={src3} alt={alt3} />
            </div>
        </div>
    )
}
