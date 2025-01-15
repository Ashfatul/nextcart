const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">NextCart</a>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-4 align-items-center">
                        <form>
                            <input type="text" />
                            <button type="submit">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                        </form>
                        <a href="" className="wishlist">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        <a href="" className="cart">
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 23C9.55228 23 10 22.5523 10 22C10 21.4477 9.55228 21 9 21C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 23C23.5523 23 24 22.5523 24 22C24 21.4477 23.5523 21 23 21C22.4477 21 22 21.4477 22 22C22 22.5523 22.4477 23 23 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 1H5L8 18H24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 12.6667H23.59C23.7056 12.6667 23.8177 12.6267 23.9072 12.5535C23.9966 12.4802 24.0579 12.3782 24.0806 12.2648L25.8806 3.26479C25.8951 3.19222 25.8934 3.11733 25.8755 3.04552C25.8575 2.97371 25.8239 2.90678 25.7769 2.84956C25.73 2.79234 25.6709 2.74625 25.604 2.71462C25.5371 2.68299 25.464 2.66661 25.39 2.66666H6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header