import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ClerkProvider } from "@clerk/nextjs"


type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
    return(
        <ClerkProvider>
            <div className="min-h-screen flex flex-col">
            <Navbar />
                <main className="flex-1 flex flex-col items-center justify-center">
                    {children}   
                </main>
                <Footer />
            </div>
        </ClerkProvider>
    )
}

export default RootLayout