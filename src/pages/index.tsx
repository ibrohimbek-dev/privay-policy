import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function PrivacyPolicy() {
	return (
		<div
			className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
		>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1 className="text-2xl font-bold">Privacy Policy</h1>
				<div className="text-6xl">🔒</div> {/* Lock emoji as an icon */}
				<ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
					<li className="mb-2 tracking-[-.01em]">
						We value your privacy and are committed to protecting your personal
						information.
					</li>
					<li className="mb-2 tracking-[-.01em]">
						This policy outlines how we collect, use, and disclose your data.
					</li>
					<li className="tracking-[-.01em]">
						For any questions regarding your personal data, please contact us.
					</li>
				</ol>
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
						href="#contact" // Link to contact section
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="text-xl">✉️</span> {/* Envelope emoji */}
						Contact Us
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
						href="#updates" // Link to updates section
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="text-xl">🔄</span> {/* Refresh emoji */}
						Policy Updates
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="#terms" // Link to terms of service
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-xl">📄</span> {/* Document emoji */}
					Terms of Service
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="#faq" // Link to FAQ section
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-xl">❓</span> {/* Question mark emoji */}
					FAQ
				</a>
			</footer>
		</div>
	);
}
