import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        100 DAYS CSS CHALLENGE
      </div>

      <div className="relative flex place-items-center font-mono text-sm  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="grid grid-cols-2 gap-x-24 gap-y-12">
          <Link href={"/01"}>01 Day: TEXT</Link>
          <Link href={"/02"}>02 Day: Animation Menu Button</Link>
          <Link href={"/03"}>03 Day: Animation LOGO</Link>
          <Link href={"/04"}>04 Day: Animation Bubbling</Link>
        </div>
      </div>
      <div></div>
    </main>
  );
}
