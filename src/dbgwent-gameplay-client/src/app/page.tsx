import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const fetchDataFromApi = () => {
    await fetch("api/games/game-1", {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    })
  }

  return (
    <>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Dope!
      <Link href="/info/87">Link</Link>
    </main>
    </>
  );
}
