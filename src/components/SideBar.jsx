import React from 'react';
import { MdHome, MdSettings, MdLogout}from 'react-icons/md';
import '../styles/sidebar.css'

const SideBar = () => {

  const items = [
    
      {
        title: "Home",
        url: "/dashboard",
        icon: MdHome,
      },
      {
        title: "Projects",
        url: "/projects",
        icon: MdHome,
      },
      {
        title: "To-Do"
        ,
        url: "/dashboard",
        icon: MdHome,
      },
      {
        title: "Members",
        url: "/members",
        icon: MdHome,
      },

      {
        title: "Settings",
        url: "/settings",
        icon: MdSettings
      }
  ]

  return (
    <aside>
      

            <div className='title_side'>
                <h1 className='sidebar-title'
                
                >DevSync </h1>
            </div>

            <div className='items'>
                {
                  items.map((item) => {
                    return (
                      <div className='item'>
                        <item.icon/>

                        <p className='item-name'>
                           {item.title}</p>
                    </div>
                    )})}

            </div>

            <div>
                <h4>Logout </h4>
            </div>


    </aside>
  );

};

export default SideBar;