import Link from "next/link"
import { Section } from "./Section"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    ayoba.dev
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link href="/" >
                    <p className="text-lg font-semibold">Acceuil</p>
                    </Link>
                    <Link href="contact" >
                    <p className="text-lg font-semibold">Contact</p>
                    </Link>
                </ul>
            </Section>
        </header >
    )
}