import Image from "next/image";
import BlogCard from "./BlogCard";


1

export default function Home() {


  const posts = [1];


  
  return (
    <main class="flex bg-sky-600 min-h-screen flex-col items-center justify-between p-12">
<BlogCard posts={posts} />
    </main>
  );
}





