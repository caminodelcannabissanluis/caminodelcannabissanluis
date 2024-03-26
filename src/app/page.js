import Image from "next/image";
import BlogCard from "./BlogCard";

import Head from 'next/head';



export default function Home() {


  const posts = [1];


  
  return (

    <main class="flex bg-sky-300 bg-bubbles-violet-indigo min-h-screen flex-col items-center justify-between p-4">

      <Head>
        <title>El Camino del Cannabis en San Luis</title>
      </Head>



<BlogCard posts={posts} />



    </main>
  );
}





