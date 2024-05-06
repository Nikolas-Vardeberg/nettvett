import Navbar from "@/components/Navbar"
import { ClerkProvider } from "@clerk/nextjs"


type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
    return(
        <ClerkProvider>
            <Navbar />
                <main>
                    {children}    
                </main>
        </ClerkProvider>
    )
}

export default RootLayout