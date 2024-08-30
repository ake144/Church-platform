import ContactUs from "@/components/contact";
import Image from "next/image";



const ContactUsPage = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1478147427282-58a87a120781';

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
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        </div>
        </div>

        <div className="container mx-auto my-16 px-8 lg:px-16">
            
            <ContactUs />
        </div>

 
        </div>
    );
    }

export default ContactUsPage;