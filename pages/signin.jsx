import React from 'react';
import Link from 'next/link';

const Signin = () => {
   return (
      <div>
         <form
            className="mx-auto my-4"
            style={{ maxWidth: '500px' }}
            // onSubmit={handleSubmit}
         >
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  // value={email}
                  // onChange={handleChangeInput}
               />
               <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
               </small>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1">Password</label>
               <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  // value={password}
                  // onChange={handleChangeInput}
               />
            </div>

            <button type="submit" className="btn btn-dark w-100">
               Login
            </button>

            <p className="my-2">
               You don't have an account?{' '}
               <Link href="/register">
                  <a style={{ color: 'crimson' }}>Register Now</a>
               </Link>
            </p>
         </form>
      </div>
   );
};

export default Signin;
