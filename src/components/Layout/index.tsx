import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header'

interface PropsType {
  location: Window['location']
  title: string
  children: JSX.Element[]
}

const Layout = (props: PropsType) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="pb-10" data-is-root-path={isRootPath}>
      <Header title={title} />
      <main className=" max-w-prose m-auto px-7 py-10">
        {children}
        <footer className="mt-12 text-sm opacity-50">
          <Link to="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </Link>
          {` ${new Date().getFullYear()} © Ininit`}
        </footer>
      </main>
    </div>
  )
}

export default Layout
