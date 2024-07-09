import Title from '../../shared/title';
import RecentbooksCard from './recentbooksCard';
import Link from 'next/link';

const url = process.env.NEXT_PUBLIC_API_URL + `/books?limit=8&sort=_id.desc`;
async function getData() {
    const res = await fetch(url)
    if (!res.ok) {
        toast.error('Failed to fetch data')
    }
    return res.json()
}
const Recentbooks = async ({ page = false }) => {
    const books = await getData();
    const allBooks = books.books;



    return (
        <section className='my-6'>
            {
                page == true ? <NavbarComponent /> : null
            }
            <Title name={"Recently added books"} />
            <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 mx-[50px] md:mx-[100px] justify-evenly items-center md:gap-6 my-3">
                {
                    allBooks.map((book) => {
                        return <RecentbooksCard key={book._id} book={book} />
                    })

                }
            </div>
            <div className={`text-center ${page == true ? "hidden" : "block"} py-5`}>
                <Link href='/recentbooks' className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-md p-3 rounded-xl">
                    All recent books
                </Link>
            </div>
        </section>
    );
};

export default Recentbooks;