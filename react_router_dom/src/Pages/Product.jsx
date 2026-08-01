import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
    return (
        <div>
            <div className='flex gap-10'>
                <NavLink to='/product/mens'
                    className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-semibold" : "text-black"
                    }
                >
                    Mens Collection
                </NavLink>
                
                    <NavLink to='/product/kids'
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400 font-semibold" : "text-black"
                        }
                    >
                        kids collection  
                    </NavLink>
                </div>

                <Outlet />
            </div>
            )
}

            export default Product
