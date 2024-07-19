import { type InferGetServerSidePropsType, type GetServerSideProps } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import { type User } from "./api/user/[id]";



export const getServerSideProps = (async () => {

  const res = await fetch('http://localhost:3000/api/user/1')
  const user = await res.json() as User

  return { props: { user } }
}) satisfies GetServerSideProps<{ user: User }>

export default function Home({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>Devotion Frontend Take Home</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Devotion Frontend Take Home
          </h1>
          <Card user={user} />
        </div>
      </main>
    </>
  );
}
