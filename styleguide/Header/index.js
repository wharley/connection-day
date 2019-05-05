import Link from 'next/link'

const Header = () => (
  <div>
    <nav>
      <Link prefetch href="/">
        <a>Home</a>
      </Link>

      <Link prefetch href="/about">
        <a>About</a>
      </Link>
    </nav>
    <style jsx>{`
      nav {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      a {
        margin-right: 1rem;
      }
    `}</style>
  </div>
)

export default Header