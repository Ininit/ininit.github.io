import * as React from 'react'
import { Link } from 'gatsby'

interface PropsType {
  title: string
}

const Header = (props: PropsType) => {
  return (
    <header className="h-16 flex items-center justify-between">
      <Link className="text-3xl ml-4 text-gray-800" to="/">
        {props.title}
      </Link>
    </header>
  )
}

export default Header
