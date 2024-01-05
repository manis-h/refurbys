"use client";
import React from "react";
import { ImLocation } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link href="/">
            <span class="navbar-brand">
              <img
                src="/logo/LOGO.jpg"
                alt="Logo"
                width={150}
                class=" rounded shadow-lg d-inline-block align-text-top"
              />
            </span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Sell Phone
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Sell Laptop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sell Tablet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Buy Phone
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Buy Laptop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Buy Tablet
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <li class="nav-item dropdown mx-4" style={{ listStyle: "none" }}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ImLocation /> <span>Delhi</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Delhi
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Lucknow
                    </a>
                  </li>
                </ul>
              </li>
              <Link href={"/signup"}>
                <button class="btn btn-outline-success" type="submit">
                  <FaUserCircle size={20} className="" />
                  &nbsp; Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
