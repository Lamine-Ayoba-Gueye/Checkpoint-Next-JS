import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import Image from "next/image"
import { cn } from "@/lib/utils"

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border border-accent rounded p-1 m-1", className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex col items-start" >
            <div className="flex-[2]">
                <h2 className="font-caption font-bold text-5xl">Lamine Ayoba Gueye</h2>
                <h3 className="text-3xl font-caption">Software Dev Web</h3>
                <p>
                    I Love coding in
                    <Code>Next-JS</Code>
                </p>
            </div>
            <div className="flex-1">
                <Image src="/dev.png" alt="Ayoba-picture" width={400} height={400} />
            </div>
        </Section>
    )
}