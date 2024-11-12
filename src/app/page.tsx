import Link from "next/link";

export default function Home(){
  return(
    <div className="p-6 bg-slate-400">
      <h1 className="text-4xl font-bold mb-6 text-stone-50 underline text-center">Countries Information By Name</h1>
      <ul className="text-4xl text-left"  >
      <li><Link href="/countries/pakistan" className="text-black hover:underline ">Pakistan</Link></li>
      <li><Link href="/countries/india" className="text-black hover:underline">India</Link></li>
      <li><Link href="/countries/bangladesh" className="text-black hover:underline">Bangladesh</Link></li>
      <li><Link href="/countries/srilanka" className="text-black hover:underline">Sri Lanka</Link></li>
      <li><Link href="/countries/japan"className="text-black hover:underline">Japan</Link></li>
      </ul>
    </div>
  );
}