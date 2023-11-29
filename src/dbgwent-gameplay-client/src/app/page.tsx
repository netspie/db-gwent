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

  async function savePost(data: FormData) {

    const title = data.get('title')
    const description = data.get('description')

    const response = await fetch('http://localhost:3000/api/games',
    {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      cache: 'no-cache'
    })

    if (response.ok) {
      const posts = await response.json()
      console.log(posts)
    }
  }

  return (
    <>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello Dope! {hello}</h1>
      <Link href="/info/87">Link</Link>
      <form action={savePost} className="grid">
        <input className="p-2 border" name="title" type="text" />
        <textarea className="p-2 border" name="description" />
        <button className="px-4 py-5 text-black bg-sky-500" type="submit">Submit</button>
      </form>
    </main>
    </>
  );
}
