import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react"
import Link from "next/link"
import { GithubIcon } from "./icons/GithubIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { WhatsAppIcon } from "./icons/WhatsAppIcon copy"
import { LinkedInIcon } from "./icons/LinkedInIcon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground">
                        Side , fun project
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                            />
                        ))}
                    </div>
                </Card>
            </div>

            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">
                        Experience
                    </p>
                    <div className="flex flex-col gap-4">
                        {EXPERIENCE.map((experience, index) => (
                            <Experience
                                key={index}
                                image={experience.image}
                                title={experience.title}
                                profil={experience.profil}
                                date={experience.date}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                    <ContactCard />
                </Card>
            </div>
        </Section>
    )
}

const ContactCard=()=>{
    return (
        <Card className="p-3 bg-accent/10">
            <div className="relative">
            <ul className="flex items-center gap-2 w-full justify-between">
                    <Link href="https://github.com/Lamine-Ayoba-Gueye" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <TwitterIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <WhatsAppIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <LinkedInIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </div>
        </Card>
    )
}

const SIDE_PROJECTS:SideProjectProps[] = [
    {
        Logo: Code,
        title: "Code",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iure maxime sequi necessitatibus vel odit mollitia animi dolorum consequatur atque possimus at expedita itaque fuga, ipsum laboriosam libero odio quidem."
    },
    {
        Logo: StickyNote,
        title: "Framework",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iure maxime sequi necessitatibus vel odit mollitia animi dolorum consequatur atque possimus at expedita itaque fuga, ipsum laboriosam libero odio quidem."
    },
    {
        Logo: Rss,
        title: "Network",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iure maxime sequi necessitatibus vel odit mollitia animi dolorum consequatur atque possimus at expedita itaque fuga, ipsum laboriosam libero odio quidem."
    }
]
type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string
}
const SideProject = (props: SideProjectProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

const EXPERIENCE:ExperienceProps[]=[
    {
        image:"https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png",
        title: "Laravel",
        profil: "Dev FullStack",
        date: "2024",
    },
    {
        image:"https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png",
        title: "React",
        profil: "Dev FullStack",
        date: "2024",
    },
    {
        image:"https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg",
        title: "NextJS",
        profil: "Dev FullStack",
        date: "2024",
    }
]
type ExperienceProps = {
    image: string,
    title: string,
    profil: string,
    date: string,
}
const Experience = (props: ExperienceProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded">
                <img src={props.image} alt={props.title} className="w-4 h-4 object-contain" />
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">
                    {props.profil}
                </p>
            </div>
        </div>
    )
}