import Image from "next/image";
import Menu from "./Menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </Link>
            <ToggleMenu />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu title="Home" active href="/" />
                <Menu title="Games" href="/games" />
                <Menu title="Rewards" href="/rewards" />
                <Menu title="Discover" href="/discover" />
                <Menu title="Global Rank" href="/global-rank" />
                <Auth isLogin />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
