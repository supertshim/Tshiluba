class Footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <footer class="footer">
        <table>
            <tr class="ft1">
                <th><a href="/about/" style="text-decoration: none;">ABOUT US</a><br><br><a href="/contact/" style="text-decoration: none;">CONTACT US</a><br><br><a href="/disclaimer/" style="text-decoration: none;">DISCLAIMER</a></th>
                <th><a href="/"><img src="/images/Tco_logo2.png"></a><br><br>TSHILUBA.co, LLC 2023<br>
                    </th>
                <th><a href="/privacy/" style="text-decoration: none;">Privacy, Terms, & Cookies</a></th>
            </tr>
            <th>
            </th>
               <th>
                    <a class="links" href="https://www.instagram.com/tshiluba.co/"><img class="social-media" src="/images/instagram.webp"></a>
                    <a class="links" href="https://www.threads.net/@tshiluba.co"><img class="social-media" src="/images/threads-app-icon.webp"></a>
                    <a class="links" href="https://www.facebook.com/profile.php?id=61554919941344&mibextid=ZbWKwL"><img class="social-media" src="/images/facebook-icon-1.svg"></a>
                    <a class="links" href="https://x.com/Tshilubaco?t=fTiZBeDJoFicRPfnjdl1Gg&s=09"><img class="social-media" src="/images/x-social-media-logo-icon.webp"></a>
               </th>
               <th>
            </th>
            </tr>
        </table>
    </footer>
        `
    }
}

customElements.define("tshilubaco-footer", Footer)