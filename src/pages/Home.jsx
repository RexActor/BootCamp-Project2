import React from 'react';

function Home() {
  return (
    <article id="home-content" className="bg-gray-100 flex flex-col gap-6 px-8 py-16 sm:px-6">   
        <section className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-16 lg:py-24">
            <h2 className="text-center text-3xl font-bold md:text-5xl">Backed up by real data</h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm sm:text-base md:mb-12 lg:mb-16">
                Our intuitive tools allow you to easily apply for jobs, track your applications, and manage your job
                search effortlessly.</p>
            <div className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm ">REGISTER</p>
                    <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">200+</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm ">SOURCE</p>
                    <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">Adzuna</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm ">CUSTOMERS</p>
                    <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">1500+</h4>
                </div>
            </div>
        </section>
    </article>
  );
}

export default Home;
