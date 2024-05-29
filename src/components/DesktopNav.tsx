"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { routes } from '../utils/routes'

const DesktopNav = () => {

  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <nav className="desktop-nav navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-nav justify-content-end flex-row gap-4">
          <Link className={`nav-link ${activeTab === routes.home ? 'active' : ''}`} href={routes.home}>Home</Link>
          <Link className={`nav-link ${activeTab === routes.liked ? 'active' : ''}`} href={routes.liked}>Liked</Link>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNav