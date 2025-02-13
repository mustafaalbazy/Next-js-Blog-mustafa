import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 dark:text-stone-400 px-3 md:px-0">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div>
            <Link href="/">
              <a className="blog-title dark:text-stone-400 font-semibold text-3xl text-gray-900">
                <img
                  width="60"
                  src="https://albazy.com/wp-content/uploads/2022/01/mustafa_90_90.jpg"
                  className="profile-image"
                  alt="Mustafa Albazy"
                ></img>
                {AppConfig.title}
              </a>
            </Link>
          </div>
          <div className="text-xl blog-description dark:text-stone-500">
            {AppConfig.description}
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a>About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a href="https://albazy.com">My Arabic Site</a>
            </li>
            <li className="mr-6">
              <a href="https://twitter.com/mustafaalbazy">Twitter</a>
            </li>
            <li className="mr-6">
              <a href="https://www.instagram.com/mustafa.albazy/">Instagram</a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Go back{' '}
        <span role="img" aria-label="Love">
          ^
        </span>{' '}
        <a href="#">top of the page</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
