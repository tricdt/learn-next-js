import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

const NavBar = () => {
   const { state, dispatch } = useContext(DataContext)

   const router = useRouter()
   const { auth, cart } = state

   const isActive = (r) => {
      if (r === router.pathname) {
         return ' active'
      } else {
         return ''
      }
   }

   const handleLogout = () => {
      Cookie.remove('refreshToken', { path: 'api/auth/accessToken' })
      localStorage.removeItem('firstLogin')
      dispatch({ type: 'AUTH', payload: {} })
      dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } })
      return router.push('/')
   }

   const adminRouter = () => {
      return (
         <>
            <Link href="/users">
               <a className="dropdown-item">Users</a>
            </Link>
            <Link href="/create">
               <a className="dropdown-item">Products</a>
            </Link>
            <Link href="/categories">
               <a className="dropdown-item">Categories</a>
            </Link>
         </>
      )
   }

   const loggedRouter = () => {
      return (
         <li className="nav-item dropdown">
            <a
               className="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
            >
               <img
                  src={auth.user.avatar}
                  alt={auth.user.avatar}
                  style={{
                     borderRadius: '50%',
                     width: '30px',
                     height: '30px',
                     transform: 'translateY(-3px)',
                     marginRight: '3px',
                  }}
               />{' '}
               {auth.user.name}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <Link href="/profile">
                  <a className="dropdown-item">Profile</a>
               </Link>
               {auth.user.role === 'admin' && adminRouter()}
               <div className="dropdown-divider"></div>
               <button className="dropdown-item" onClick={handleLogout}>
                  Logout
               </button>
            </div>
         </li>
      )
   }

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
                                 {cart.length}
                              </span>
                           </i>
                           Cart
                        </a>
                     </Link>
                  </li>
                  {Object.keys(auth).length === 0 ? (
                     <li className="nav-item">
                        <Link href="/signin">
                           <a className={'nav-link' + isActive('/signin')}>
                              <i className="fas fa-user" aria-hidden="true"></i>{' '}
                              Sign in
                           </a>
                        </Link>
                     </li>
                  ) : (
                     loggedRouter()
                  )}
                  {/* <li className="nav-item">
                     <a className="nav-link">Pricing</a>
                  </li> */}
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default NavBar
