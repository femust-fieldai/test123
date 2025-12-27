import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center min-h-screen">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Ginger Welness <br/> Center</h1>
          <address>
            7250 Gateway Blvd W, <br/>
            Irvine, CA 92618
          </address>
          <p>
            Open Daily: 9:00am - 5:00pm
          </p>
          <Link href="tel:+19495550123" className="hover:underline">+1 (949) 555-0123</Link>
        </div>
      </main>
    </div>
  );
}
