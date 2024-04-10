"use client"
import Image from "next/image";
import BlogCard from "./BlogCard";

import Head from 'next/head';



export default function Home() {


  const posts = [1];


  
  return (

    <main className="flex  pattern-isometric pattern-blue-100 pattern-bg-white 
    pattern-size-20 pattern-opacity-100 min-h-screen flex-col items-center justify-between p-4">

      <Head>
        <title>El Camino del Cannabis en San Luis</title>
      </Head>



<BlogCard posts={posts} />


<div className="sticky top-[100vh] bg-blue-500 mt-4">

<footer className="  w-full text-gray-700  body-font">

  <div className="flex justify-center ">
 

 

  <div className="text-slate-100 px-7 font-bold py-4">
  <div>
            <button onClick={() => window.alert('escribir email a : caminodelcannabissanluis@gmail.com')}>¿Querés agregar tu proyecto?   </button>
        </div>
    
  </div>

  </div>

  </footer >

</div>




    </main>
  );
}





