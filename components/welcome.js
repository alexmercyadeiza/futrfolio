import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <button
        className={`${router.pathname === href
          ? ""
          : "btn-outline"
          } ${className} btn btn-sm font-mono text-xs`}
      >
        {children}
      </button>
    </Link>
  );
};

const WelcomeUser = () => {
  return (
    <div className="border w-full rounded-xl py-4 px-6 md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
      <div className="text-sm font-semibold">
        &#128075; Hello, <a href="" className="underline text-blue-700">create an account</a> to get started.
      </div>

      <div className="btn-group">
        <ActiveLink href="/" className="btn btn-sm md:font-mono font-sans text-xs">nfts</ActiveLink>
        <ActiveLink href="/crypto" className="btn btn-sm md:font-mono font-sans text-xs">crypto</ActiveLink>
        <ActiveLink href="/stocks" className="btn btn-sm md:font-mono font-sans text-xs">stocks</ActiveLink>
      </div>
    </div>
  );
};

export default WelcomeUser;
