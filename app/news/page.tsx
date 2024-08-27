import Articles from "@/components/articles";

const NewsPage = () => {
    return (
            
        <div className=" flex flex-col h-screen items-center justify-center bg-gray-600 ">
        <h1 className="text-5xl font-serif text-white  my-8">News</h1>
        <Articles />
        </div>
    );
    }

export default NewsPage;
