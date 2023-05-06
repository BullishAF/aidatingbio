import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
      
        <h1 className="sm:text-2xl text-xl text-pink-500 font-bold ml-2 tracking-tight">
       💞 AI Dating Bio
        </h1>
      </Link>
       <a
        href="https://www.producthunt.com/products/ai-dating-bio-generator"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Product Hunt"
          src="/follow.png"
          className="sm:w-60 sm:h-[40px] w-60 h-[40px]"
          width={200}
          height={54}
        />
      </a>   
</header>
  );
}
