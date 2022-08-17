import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
   const router = useRouter();
   console.log('pathname ', router.pathname);
   const isActive = (r) => {
      if (r === router.pathname) {
         return ' active';
      } else {
         return '';
      }
   };
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <Link href="/">
               <a className="navbar-brand">DEVAT</a>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse justify-content-end"
               id="navbarNavDropdown"
            >
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link href="/cart">
                        <a className={'nav-link' + isActive('/cart')}>
                           <i
                              className="fas fa-shopping-cart position-relative"
                              aria-hidden="true"
                           >
                              <span
                                 className="position-absolute"
                                 style={{
                                    padding: '3px 6px',
                                    background: '#ed143dc2',
                                    borderRadius: '50%',
                                    top: '-10px',
                                    right: '-10px',
                                    color: 'white',
                                    fontSize: '14px',
                                 }}
                              >
                                 {/* {cart.length} */}
                              </span>
                           </i>
                           Cart
                        </a>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/signin">
                        <a className={'nav-link' + isActive('/signin')}>
                           <i className="fas fa-user" aria-hidden="true"></i>{' '}
                           Sign in
                        </a>
                     </Link>
                  </li>
                  {/* <li className="nav-item">
                     <a className="nav-link">Pricing</a>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        Dropdown link
                     </a>
                     <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item">Action</a>
                        </li>
                        <li>
                           <a className="dropdown-item">Another action</a>
                        </li>
                        <li>
                           <a className="dropdown-item">Something else here</a>
                        </li>
                     </ul>
                  </li> */}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
