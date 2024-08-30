import AboutUs from "@/components/about";
import Image from "next/image";

const AboutPage= () => {
         // 
         const imageUrl = 'https://images.unsplash.com/photo-1653189290886-052fb96138a5';

    return (
      <div>
           
           <div className="relative h-[400px] w-full">
        <Image
            src={imageUrl}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
        </div>

   
        <div className="my-5 ">
        <AboutUs  />
        </div>

    </div>
    );
    }

export default AboutPage;