import Link from 'next/link';
import NavLinks from './navlinks';
import React from 'react'

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-200 content-end">
      <div className="flex-1">
        <Link className="btn btn-ghost text-2xl" href="/">Overseas Study Centre</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar

// NEXT STEPS: Follow https://nextjs.org/learn/dashboard-app/getting-started for folder structures etc