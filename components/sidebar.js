class Sidebar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <span>Word of the Day</span>
        <span><hr></span>
        <muakuwd-card class="MuakuWD"></muakuwd-card>
        <span><hr></span>
        <div class="pageLinks">
            <h1>Pages</h1>
            </div>
            <span><hr></span>
        <div class="pageLinks">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/blog/">BLOG</a></li>
                <li><a href="/alphabetindex/">INDEX</a></li>
                <li><a href="/games/word-scramble/">WORD SCRAMBLE</a></li>
                <li ><a href="/about/">ABOUT US</a></li>
                <li ><a href="/contact/">CONTACT US</a></li>
                <li ><a href="/privacy/">PRIVACY POLICY</a></li>
                <li ><a href="/disclaimer/">DISCLAIMER</a></li>
            </ul>
        </div>
        <span><hr></span>
        <div class="pageLinks">
            <h1>FOLLOW US</h1>
            </div>
            <div class="pageLinks">
                <div class="followUs">
                    <a class="links" href="https://www.instagram.com/tshiluba.co/"><img class="social-media" src="/images/instagram.webp"></a>
                    <a class="links" href="https://www.threads.net/@tshiluba.co"><img class="social-media" src="/images/threads-app-icon.webp"></a>
                    <a class="links" href="https://www.facebook.com/profile.php?id=61554919941344&mibextid=ZbWKwL"><img class="social-media" src="/images/facebook-icon-1.svg"></a>
                    <a class="links" href="https://x.com/Tshilubaco?t=fTiZBeDJoFicRPfnjdl1Gg&s=09"><img class="social-media" src="/images/x-social-media-logo-icon.webp"></a>
                </div>
            </div>
        <span><hr></span>
    
    
     <!--END OF SIDE BAR CODE-->
        `
    }
}

customElements.define("side-bar", Sidebar)