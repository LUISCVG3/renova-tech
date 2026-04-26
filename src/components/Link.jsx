import { useRouter } from "../hooks/useRouter"

export function Link({ children, href, ...restOfProps }) {
    const { navigateTo } = useRouter()
    
    const hanldeClick = (event) => {
        event.preventDefault()
        
        navigateTo(href)
    }
    return (
        <a onClick={hanldeClick} href={href} {...restOfProps}>
            {children}
        </a>
    )
}