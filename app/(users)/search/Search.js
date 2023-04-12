'use client'
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSearch = async (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch("")
    }
    return (
        // <div className="flex justify-center items-center">
        <form className="flex flex-row justify-center gap-1 items-center " onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search the blog"
                className="input w-full max-w-xl"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className=" btn btn-primary">
                Search
            </button>
        </form>
        // </div>
    )
}
export default Search


