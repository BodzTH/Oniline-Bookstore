import Link from 'next/link';
import { cart } from "E:/Semester 5/vscode/web/project/Back-end/cart.js";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    function handleSearch() {
        const query = searchTerm.trim(); // Get the search term

        // Update the URL to the search page with the query parameter
        router.push(`/search?q=${query}`);
    }



    return (
        <>
            <button className='pr-1' onClick={() => { handleSearch() }}>
                <Link href={`/search?q=${searchTerm}`}>
                    <Image
                        src="/search.svg"
                        alt="Bookz"
                        width={23}
                        height={15}
                    />
                </Link>
            </button>
            <input
                className="searchbar text-center placeholder:text-border-color"
                placeholder={"Search"}
                onChange={(e) => {
                    setSearchTerm(e.target.value); // Update the search term state
                }}
                value={searchTerm}
            />

        </>
    );
}

export default Search;
