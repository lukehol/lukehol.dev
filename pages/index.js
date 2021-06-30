import Head from 'next/head'
import Image from 'next/image'
import memoji from '../public/img/memoji.png'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<div className="flex flex-col items-center | min-w-screen min-h-screen | p-4">
				<div className="mt-12 md:mt-16 relative">
					<div className="w-24 h-24 md:w-28 md:h-28 bg-blue-500 rounded-full" />
					<div className="absolute top-1 right-1 w-24 h-24 md:w-28 md:h-28">
						<Image src={memoji} width={200} height={200} alt="Luke Hol memoji" />
					</div>
				</div>

				<div className="mt-8 md:mt-12 md:text-xl text-black dark:text-white font-medium">Hi, I'm Luke <div className="animate-wiggle inline-block">👋🏻</div></div>

				<div className="mt-6 md:mt-8 text-black dark:text-white font-bold text-2xl md:text-6xl leading-tight text-center max-w-6xl">
					Creating <span className="text-blue-500">enterprise-grade</span> web applications with the <span className="text-blue-500">newest</span> technologies
				</div>

				<div className="mt-12 md:mt-16 md:text-xl text-black dark:text-white text-center max-w-3xl">
					a developer from the Netherlands specialized in Typescript and .NET Software Engineering with a sharp eye on great user experiences, security and functional correctness
				</div>

				<div className="mt-2 md:mt-4 md:text-xl text-black dark:text-white text-center">
					Currently employed at <a className="hover:text-blue-500 transition ease-in-out duration-75" href="https://infosupport.com">Info Support</a> as IT Consultant Software Engineering
				</div>
			</div>
		</div>
  )
}