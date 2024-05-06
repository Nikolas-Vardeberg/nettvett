import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight, Loader } from "lucide-react"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Navbar = async() => {

    return (
        <header className='border bottom-1'>
            <nav className='bg-white border-gray-200 px-4 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

                    <h2 className="font-bold text-2xl">Nett<span className="text-[#41FF01]">vett</span></h2>

                    <div className="space-x-4">
                        <Link href="/" className={buttonVariants({variant: "link"})}>
                            Hjem
                        </Link>
                        <Link href="/" className={buttonVariants({variant: "link"})}>
                            Hjem
                        </Link>
                        <Link href="/" className={buttonVariants({variant: "link"})}>
                            Hjem
                        </Link>
                        <Link href="/" className={buttonVariants({variant: "link"})}>
                            Hjem
                        </Link>
                    </div>

                    <div>
                    <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"></UserButton>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            afterSignInUrl="/"
                            afterSignUpUrl="/"
                        >
                            <Button variant="primary">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar