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
<a href="https://www.producthunt.com/posts/ai-dating-bio-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;dating&#0045;bio&#0045;generator" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392812&theme=light" alt="AI&#0032;Dating&#0032;Bio&#0032;Generator - Generate&#0032;your&#0032;dating&#0032;app&#0032;bio&#0032;in&#0032;seconds&#0032;using&#0032;AI | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</header>
  );
}
