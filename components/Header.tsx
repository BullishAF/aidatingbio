import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
      
        <h1 className="sm:text-3xl text-2xl text-pink-500 font-bold ml-2 tracking-tight">
       💞 AI Dating Bio Generator
        </h1>
      </Link>
<a href="https://www.producthunt.com/posts/ai-dating-bio-generator" 
   target="_blank"
   rel="noreferrer"
   >
  <image 
    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392812&theme=light" 
    alt="AI Dating Bio Generator" 
    className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
    width={200}
    height={50}
    />         
         
 </a>
</header>
  );
}
