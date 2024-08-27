import Footer from "@/components/footer";
import { NavBar } from "@/components/header/navbar";
import PrayerRequest from "@/components/prayer";
import ServiceTime from "@/components/service";
import Image from "next/image";

export default function Home() {
  const imageUrl = 'https://images.unsplash.com/photo-1507692049790-de58290a4334';

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="relative h-screen w-full">

     
      <Image
        src={imageUrl}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
      

        {/* Centered Text */}
        <div className="flex flex-grow justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Come Seek God Together at Apostolic Church
          </h1>
        </div>
       </div>
      </div>

      <div  className="relative h-screen w-full" >
          <ServiceTime  />
      </div>
      <div className="relative h-screen w-full items-center flex justify-center text-white flex-col bg-black">
               <p className="mt-12 font-bold">OUR MISSION</p>
          <h2 className="text-3xl  my-6">Pursue And Equip Families To Passionately Follow Christ.</h2>
           
           <p className="text-5xl my-12 ">Get Connected!</p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12   lg:grid-cols-3 mx-20 my-9 ">
           <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Ready to baptisim?</h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">

                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">come and serve with us!</h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">Ready to explore the Doctorine?</h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

           </div>
      </div>

      <div className="relative flex flex-col justify-center items-center bg-gray-600 h-screen w-full">
            <PrayerRequest />
        </div>

      <div className="relative w-full">
          <Footer />
      </div>
  </div>
  );
}
