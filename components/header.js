class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <nav>
        <div class="nav-links" id="navLinks">
        <!--The X icon placed in the nav menu-->
        <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/alphabetindex/">INDEX</a></li>
                <li><a href="/blog/">BLOG</a></li>
                <li class="games_dd2"><button id="games_dd">GAMES ▼</button>
                    <div class="dropdown">
                        <a href="/games/word-scramble/">WORD SCRAMBLE</a>
                    </div>
                </li>
            </ul>
        </div>
        <i class="fa-solid fa-bars" onclick="showMenu()"></i>
    </nav>
        `
    }
}

customElements.define("nav-header", Header)