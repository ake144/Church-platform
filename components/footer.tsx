
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdPayment } from "react-icons/md";





const Footer = () => {
    return (
        <footer className="bg-black ">
            <div  className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center items-center bg-gray-900 text-white">
                <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg text-white">Ready to baptisim?</h3>
                    <p className="text-sm text-gray-300">We are here to help you take the next step in your faith journey.</p>
                </div>
            </div>

            <div className="flex justify-center items-center bg-gray-800 text-white">
                <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg text-white">Ready to join a small group?</h3>
                    <p className="text-sm text-gray-300">We have a group that is perfect for you and your family.</p>
                </div>

            </div>

                 
            <div className="flex justify-center items-center bg-gray-900 text-white">
                <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg text-white">Ready to serve?</h3>
                    <p className="text-sm text-gray-300">We have many opportunities for you to get involved.</p>
                </div>
            </div>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
         
         <div className="mx-20 mt-20 ">
                <MdEmail className="text-4xl my-5 text-white"/>
                <h3 className="text-2xl text-white">Email</h3>
                <p className="text-white my-4">Email: ace@gmail.com</p>
         </div>

         <div className="mx-20 mt-20 ">
                <FaPhone   className="text-4xl my-5 text-white" /> 
                <h3 className="text-2xl text-white">Call</h3>
                <p className="text-white my-4">Phone: 123-456-7890</p>
         </div>

            <div className="mx-20 mt-20 ">
                       <CiLocationOn className="text-4xl my-5 text-white"  />
                    <h3 className="text-2xl text-white">Location</h3>
                    <p className="text-white">1234 Main Street</p>
                    <p className="text-white my-4">City, State 12345</p>
            </div>

            
            <div className="mx-20 mt-20 ">
                      <MdPayment  className="text-4xl my-5 text-white" />
                    <h3 className="text-2xl text-white">Giving</h3>
                    <p className="text-white  my-4" >Give online</p>
            </div>
    </div>

         

         <p className="text-white  flex justify-center items-center mt-20 ">
                &copy; 2024 Apostolic Church. All rights reserved.

         </p>



        </footer>
    )
}

export default Footer;