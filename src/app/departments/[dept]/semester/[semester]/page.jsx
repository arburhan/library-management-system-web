/* eslint-disable react-hooks/rules-of-hooks */
import RecentbooksCard from '@/components/home/recentbooks/recentbooksCard';

const page = async ({ params }) => {
    const { dept, semester } = params;
    const url = process.env.NEXT_PUBLIC_API_URL + `/books`
    let response = await fetch(url, {
        method: "GET"
    });

    let books = await response.json();
    const data = books.books;
    const filteredData = data.filter(book => book.deptName == dept && book.semester == semester);

    return (
        <div>
            Your are {dept} & {semester} semester
            < div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 mx-[50px] md:mx-[100px] justify-evenly items-center md:gap-6 my-3" >
                {
                    filteredData.map((book) => {
                        return <RecentbooksCard key={book._id} book={book} />
                    })
                }
            </div >
        </div >
    )
};

export default page;