import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <Image
          className="m-0 rounded-xl"
          src="/images/not-found.jpeg"
          width={500}
          height={500}
          sizes="300px"
          alt="Page Not Found"
          priority={true}
          title="Page Not Found"
        />
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Return Home
        </Link>
      </div>
    </div>
  );
}
