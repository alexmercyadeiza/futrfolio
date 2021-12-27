import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <button
        className={`${router.pathname === href
          ? "bg-white text-black border-white"
          : "btn-outline border-white text-white"
          } ${className} btn btn-sm font-mono text-xs hover:bg-white hover:text-black  `}
      >
        {children}
      </button>
    </Link>
  );
};

const WelcomeUser = () => {
  return (
    <div className="bg-black text-white w-full rounded-xl py-4 px-6 md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
      <div className="text-sm font-semibold">
        &#128075; Hello, <a href="" className="underline">create an account</a> to get started.
      </div>

      <div className="btn-group">
        <ActiveLink href="/" className="btn md:font-mono font-sans text-xs">nfts</ActiveLink>
        <ActiveLink href="/crypto" className="btn md:font-mono font-sans text-xs">crypto</ActiveLink>
        <ActiveLink href="/stocks" className="btn md:font-mono font-sans text-xs">stocks</ActiveLink>
      </div>
    </div>
  );
};

export default WelcomeUser;
