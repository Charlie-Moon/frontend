import React from "react"
import NextImage from "next/image"
import Link from "next/link"
import Container from "./container"

import Logo from "../public/images/dg-logo.png"

const Navbar = [
  {
    name: "ទំព័រដើម",
    url: "/",
  },
  {
    name: "អំពីយើង",
    url: "/about",
  },
  {
    name: "ព័ត៌មាន និងព្រឹត្តិការណ៍",
    url: "/news-events",
  },
  {
    name: "បណ្តុំឯកសារ",
    url: "/documents",
  },
]

const Nav = ({ categories }) => {
  return (
    <div className="bg-white py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-80 h-28 relative">
            <Link href="/">
              <a>
                <NextImage
                  // loader={loader}
                  layout="fill"
                  width={"100%"}
                  height={"100%"}
                  objectFit="contain"
                  src={Logo}
                  alt={""}
                  priority="false"
                  className="w-1/4 block"
                />
              </a>
            </Link>
          </div>
          <div className="navbar-right">
            <ul className="navbar-nav flex">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <a className="text-xl mr-14">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link href="#">
                  <a className="border-black border-r-2 pr-3">ខ្មែរ</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="pl-3">EN</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Nav
