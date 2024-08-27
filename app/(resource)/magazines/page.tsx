import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";



const Magazines = [
    {
        title: "The Bible",
        author: "God",
        description: "The Bible is the inspired word of God. It is the most important book in the world. It is the foundation of our faith and the guide for our lives.",
        cover: "https://images.unsplash.com/photo-1627818653012-054f17eb0648"
    },
    {
        title: "The Purpose Driven Life",
        author: "Rick Warren",
        description: "The Purpose Driven Life is a book that helps you discover your purpose in life. It is a guide to living a meaningful and fulfilling life.",
        cover: "https://images.unsplash.com/photo-1627818653012-054f17eb0648"
    },
    {
        title: "Mere Christianity",
        author: "C.S. Lewis",
        description: "Mere Christianity is a book that explains the basic beliefs of Christianity. It is a classic work that has helped many people understand the Christian faith.",
        cover: "https://images.unsplash.com/photo-1627818653012-054f17eb0648"
    }
]



const BooksPage = () => {
    return (
        
        <div className=" flex flex-col items-center justify-center bg-gray-600 ">
        <h2  className="text-5xl  mt-[120px] text-white">Magazines</h2>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-9 gap-9">
                   {Magazines.map((book, index) => (
                        <Card key={index} className="my-4">
                            <img src={book.cover  
                            } alt={book.title} className="h-50 w-full object-cover" />

                            <CardContent>
                                <h2 className="text-xl font-semibold">{book.title}</h2>
                                <p className="text-sm">{book.author}</p>
                                <p className="text-sm">{book.description}</p>
                            </CardContent>
                        </Card>


                    ))
                   }
                </div>
               
            </div>
         

    

    
    );
    }

    export default BooksPage;