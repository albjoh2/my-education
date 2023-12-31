import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Hello world</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-orange-600">My</span>
          Education
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          This is where you cosumize your education to achieve your goals. Tell
          us what you want to learn and we will help you get there.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Lets go! <ArrowRight className="inline-block w-5 h-5 ml-1" />
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:x-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    width={1364}
                    height={866}
                    alt="product preview"
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:x-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-grey-900 sm:text-5xl">
              Have a full fledged course taylor made for you in seconds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learning has never been this effective. We will help you create a
              course that is taylored to your needs and goals.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-8 px-6 lg:px-8 lg:grid-cols-2">
          <li className="flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <p className="text-sm font-medium text-orange-600">Step 1</p>
              <h3 className="text-xl font-bold text-gray-900">
                Get started by creating an account
              </h3>
              <p className="mt-2 text-gray-600">
                Choose a{" "}
                <Link
                  href="/pricing"
                  className="text-orange-700 underline underline-offset-2"
                >
                  plan
                </Link>
                .
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <p className="text-sm font-medium text-orange-600">Step 2</p>
              <h3 className="text-xl font-bold text-gray-900">
                Tell us what you want to learn
              </h3>
              <p className="mt-2 text-gray-600">
                We will ask you a few questions to understand your goals and
                needs.
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <p className="text-sm font-medium text-orange-600">Step 3</p>

              <h3 className="text-xl font-bold text-gray-900">
                Start learning and achieve your goals
              </h3>
              <p className="mt-2 text-gray-600">
                We will create a course that is taylored to your needs and
                goals.
              </p>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                width={1419}
                height={732}
                alt="product preview"
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
