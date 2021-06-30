import Head from 'next/head'
import Image from 'next/image'
import memoji from '../public/img/memoji.png'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
			<Head>
				{/* Font */}
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

				{/* Meta */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Favicons */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1d74ff" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="msapplication-TileColor" content="#1d74ff" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#1D74FF" />
			</Head>
			<div className="flex flex-col items-center | min-w-screen min-h-screen | p-4">
				<div className="mt-12 md:mt-16 relative">
					<div className="w-24 h-24 md:w-28 md:h-28 bg-blue-500 rounded-full" />
					<div className="absolute top-1 right-1 w-24 h-24 md:w-28 md:h-28">
						<Image src={memoji} width={200} height={200} alt="Luke Hol memoji" />
					</div>
				</div>

				<div className="mt-8 md:mt-12 md:text-xl text-black dark:text-white font-medium">Hi, I&apos;m Luke <div className="animate-wiggle inline-block">👋🏻</div></div>

				<div className="mt-6 md:mt-8 text-black dark:text-white font-bold text-2xl md:text-6xl leading-tight text-center max-w-6xl">
					Creating <span className="text-blue-500">enterprise-grade</span> web applications with the <span className="text-blue-500">newest</span> technologies
				</div>

				<div className="mt-12 md:mt-16  text-black dark:text-white text-center max-w-2xl">
					a developer from the Netherlands specialized in Typescript and .NET Software Engineering with a sharp eye on great user experiences, security and functional correctness
				</div>

				<div className="mt-2 md:mt-3 text-black dark:text-white text-center">
					Currently employed at <a className="hover:text-blue-500 transition ease-in-out duration-75" href="https://infosupport.com">Info Support</a> as IT Consultant Software Engineering
				</div>
			</div>
		</div>
  )
}