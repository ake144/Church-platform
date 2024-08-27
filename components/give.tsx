import Image from 'next/image';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const Support = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1501588647130-2e99f4585623';

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={imageUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Give</h1>
        </div>
      </div>

      {/* Beliefs Content Section */}
      <div className="container mx-auto my-16 px-8 lg:px-16">
     
                <h2 className="text-3xl items-center justify-center flex font-semibold mb-6">Support Our Ministry</h2>
                  
                  <p className='my-5 text-xl  font-serif'>  
                  “But generous people plan to do what is generous, and they stand firm in their generosity.” -Isaiah 32:8
                  </p>

                  <p  className='my-5 text-xl  font-serif'>
                  Thank you for wanting to take a next step in generosity! We believe that tithing in an act of worship to God, who has provided us with everything that we have. When we tithe, we express gratitude and faith. We give because it furthers the Kingdom and furthers the mission of Northside, to love God, love others, and impact the World with Jesus.
                  </p>
                
    
                <p className='my-5 text-xl  font-serif'>
                  Your generous support helps us to continue spreading the gospel of Jesus Christ. We are grateful for your donations and prayers. Thank you for partnering with us in ministry!
                </p>
                <p className='my-5 text-xl  font-serif'>
                  If you would like to give, please click the button below.
                </p>

                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Give Now
                  </button>

                </div>
  </div>

                <div className='items-center justify-center bg-gray-300'>
                    
                    <h1 className='text-4xl flex justify-center my-12 '>
                        More Ways To Give
                    </h1>

                    <Accordion type="single" collapsible className="w-full flex justify-center items-center flex-col gap-5">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Give In Person</AccordionTrigger>
                        <AccordionContent>
                        You can give via cash or check at any of our in-person gatherings. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Give Online</AccordionTrigger>
                        <AccordionContent>
                              Click here to give online today. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Give with Other Way</AccordionTrigger>
                        <AccordionContent>
                        You can also give via other payment methods like binance, paypal, etc.
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                   
                    
                </div>
    </div>
  );
}

export default Support;
