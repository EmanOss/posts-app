"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { routes } from '../utils/routes';


const MobileNav = () => {

  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <nav className="mobile-nav navbar fixed-bottom bg-body-tertiary">
      <div className="container-fluid">
        <Link className="nav-link active col-6 d-flex justify-content-center" href={routes.home}>
          <i className={`bi ${activeTab === routes.home ? 'bi-house-fill' : 'bi-house'}`}></i>
        </Link>
        <Link className="nav-link col-6 d-flex justify-content-center" href={routes.liked}>
          <i className={`bi ${activeTab === routes.liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </Link>
      </div>
    </nav>
  )
}

export default MobileNav
