import React from 'react'

const Featured = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-5xl">
                        New Collection
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Welcome to our latest collection! Experience comfort and luxury with cozy blankets, lavish bedsheets, and exquisite velvets. Each piece boasts superior quality and craftsmanship, adding warmth and a touch of luxury to your space. Elevate your home with our carefully curated selection for unparalleled comfort and style.
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Featured
