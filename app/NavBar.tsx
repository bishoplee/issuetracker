import Link from 'next/link'
// import { IconContext } from "react-icons"
import { HiBugAnt } from 'react-icons/hi2'

const NavBar = () => {
  const links =[
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/"}
  ]

  return (
    <nav className="flex space-x-12 px-5 h-16 items-center">
      <Link className="w-8 h-8 items-center justify-center flex" href="/">
        {/* <IconContext.Provider value={{ color: "green", className: "green"}}> */}
          {/* <> */}
            <HiBugAnt className="flex flex-1 w-full h-full" />
          {/* </> */}
        {/* </IconContext.Provider> */}
      </Link>
      <div className="flex space-x-8">
        {links.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors font-medium">{link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar