import Image from 'next/image';

const WeBelieve = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1497621122273-f5cfb6065c56';

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
          <h1 className="text-white text-5xl font-bold">Our Beliefs</h1>
        </div>
      </div>

      {/* Beliefs Content Section */}
      <div className="container mx-auto my-16 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Belief 1 */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Salvation</h2>
            <p className="text-lg">
              Salvation is the act of saving the human soul from sin and its consequences. We believe that salvation comes through knowing and believing in the only God of salvation, repenting from all sins, being baptized in the name of the Lord Jesus Christ for the remission of sins, and receiving the gift of the Holy Ghost.
            </p>
          </div>

          {/* Belief 2 */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Believing in the Only God of Salvation</h2>
            <p className="text-lg">
              We believe that salvation requires faith in the one true God. By repenting from sin, being baptized in Jesus' name, and receiving the Holy Spirit, we are granted eternal life and a personal relationship with our Creator.
            </p>
          </div>

          {/* Add more beliefs as needed */}
          {/* Example Belief 3 */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Baptism</h2>
            <p className="text-lg">
              Baptism is a fundamental act of obedience and a public declaration of faith. We believe that through baptism in the name of Jesus Christ, we participate in His death, burial, and resurrection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeBelieve;
