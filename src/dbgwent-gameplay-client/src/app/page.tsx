'use client'

import Header from "@/components/Header";
import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const  { hello } = useAppContext()
  const [loading, setLoading] = useState(false)

  const fetchDataFromApi = async () => {
    setLoading(true)
    try {
      const response = await fetch("api/games/game-1", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      })
  
      if (response) {
        const data = response.json()
        console.log(data)
      } 
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Dope! {hello}</h1>
      <Link href="/info/87">Link</Link>
    </main>
    </>
  );
}
