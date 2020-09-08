import React from 'react';
import './header.scss';
import Logo from './Logo';

export default function Header() {
    return (
        <>
            <div className="header-wrap">
                <div className="header">
                    <div className="nav-left">
                        {/* logo */}
                        <Logo />
                    </div>

                    <div className="nav-right">
                        {/* search wrap */}
                        <div className="search-wrap">
                            <input type="search" name="search" id="search" placeholder="Search" className="search__bar" />
                        </div>
                        <ul>
                            <li>
                                <div className="btn-wrap">
                                    <span class="material-icons">
                                        favorite
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrap">
                                    <span class="material-icons">
                                        shopping_bag
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrap">
                                    <span class="material-icons">
                                        account_circle
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        </>
    );
}
