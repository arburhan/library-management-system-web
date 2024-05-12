/* eslint-disable react-hooks/rules-of-hooks */
import RecentbooksCard from '@/components/home/recentbooks/recentbooksCard';


const page = async ({ params }) => {

    const { dept, semester } = params;
    const url = process.env.NEXT_PUBLIC_API_URL + `/books`;
    const res = await fetch(url);
    const datas = await res.json();
    const data = datas.books.filter(book => book.deptName == dept);

    return (
        <div>
            Your are {dept} & {semester} semester
            <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 mx-[50px] md:mx-[100px] justify-evenly items-center md:gap-6 my-3">
                {
                    data.map((book) => {
                        return <RecentbooksCard key={book._id} book={book} />
                    })

                }
            </div>
        </div>
    )
};

export default page;