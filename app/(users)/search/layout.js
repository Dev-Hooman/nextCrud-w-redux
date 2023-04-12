import Search from "./Search"


export default function RootLayout({ children }) {
    return (
        <main className="h-screen  bg-base-200">

            <div className=" flex flex-col justify-evenly items-center">
                <div className="flex  flex-col justify-center items-center text-center ">

                    <h1 className="text-4xl font-bold py-16">Search The Blog</h1>


                    <Search />
                </div>

                <div className="px-21">
                    {children}
                </div>

            </div>












        </main>
    )
}
