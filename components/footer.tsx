import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdPayment } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Ready for Baptism?</h3>
          <p className="text-sm">We are here to help you take the next step in your faith journey.</p>
        </div>

        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Ready to join a small group?</h3>
          <p className="text-sm">We have a group that is perfect for you and your family.</p>
        </div>

        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Ready to serve?</h3>
          <p className="text-sm">We have many opportunities for you to get involved.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 mt-10">
        <div className="flex flex-col items-center">
          <MdEmail className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Email</h3>
          <p>Email: ace@gmail.com</p>
        </div>

        <div className="flex flex-col items-center">
          <FaPhone className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Call</h3>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="flex flex-col items-center">
          <CiLocationOn className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Location</h3>
          <p>1234 Main Street</p>
          <p>City, State 12345</p>
        </div>

        <div className="flex flex-col items-center">
          <MdPayment className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Giving</h3>
          <p>Give online</p>
        </div>
      </div>

      <p className="text-center mt-10">&copy; 2024 Apostolic Church. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
