import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar';
import { useDashboardContext } from '../Pages/DashboardLayout';
import Logo from './Logo';
import NavLinks from './NavLinks';

function BigSidebar() {
  const {showSidebar} = useDashboardContext();
  console.log(showSidebar);
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar