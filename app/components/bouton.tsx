import Link from "next/link";

type Props = {
    label: string,
    href: string,
    variante?: "plein" | "contour" 
}

export default function Bouton({label, href, variante = "plein"}: Props){

    const style = 
        variante === "plein"
            ? "bg-foreground text-background" //la variante plein
            : "border border-foreground text-foreground" //la variante contour

    return(
        <Link href={href} className={`rounded px-5 py-2 ${style}`}>
            {label}   
        </Link>
    )
}