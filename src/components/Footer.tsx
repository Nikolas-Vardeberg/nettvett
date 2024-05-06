import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <MaxWidthWrapper className="mx-auto flex items-center justify-evenly h-full">
                <p className="text-md text-muted-foreground">
                    &copy; {new Date().getFullYear()} All rights reserved
                </p>

                <div className="flex items-center justify-center">
                    <div className="flex space-x-8">
                        <Link href="#" className="text-md text-muted-foreground hover:text-gray-600">
                            Terms
                        </Link>
                        <Link href="#" className="text-md text-muted-foreground hover:text-gray-600">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-md text-muted-foreground hover:text-gray-600">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer