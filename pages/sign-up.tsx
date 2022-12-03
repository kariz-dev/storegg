import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignUpForm from "../components/organisms/SignUpForm";

export default function SignUp() {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link className="navbar-brand" href="../index.html">
                <Image src="/icon/logo.svg" height={60} width={60} alt="logo" />
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}
