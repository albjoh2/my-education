import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">Hello world</p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        <span className="text-orange-600">My</span>
        Education
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        This is where you cosumize your education to achieve your goals. Tell us
        what you want to learn and we will help you get there.
      </p>

      <Link className={buttonVariants()} href="/dashboard" target="_blank">
        Lets go! <ArrowRight className="inline-block w-5 h-5 ml-1" />
      </Link>
    </MaxWidthWrapper>
  );
}
