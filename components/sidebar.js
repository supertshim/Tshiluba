class Sidebar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <span>Word of the Day</span>
        
        <muakuwd-card class="MuakuWD"></muakuwd-card>
        <div class="pageLinks">
        <h1>Latest Posts</h1>
        </div>
        <div class="latest">
        <a href="/articles/008-Luba-Grammar-Possessive-Pronouns-And-Adjectives/">
        <img class="post-icon" src="/articles/008-Luba-Grammar-Possessive-Pronouns-And-Adjectives/nzambi-wanyi.png"><br>
        <p>Luba Grammar: Possessive Pronouns and Adjectives</p>
        <a href="/articles/Greetings-And-Basic-Introductions-In-Tshiluba/">
        <img class="post-icon" src="/articles/Greetings-And-Basic-Introductions-In-Tshiluba/sign-moyo.png"><br>
        <p>Sangayi Wabo! Betuabu! Greetings and Basic Introductions in Tshiluba</p>
        <a href="/articles/The-National-Anthem-Of-DRC-Debout-Congolais-In-Tshiluba/">
        <img class="post-icon" src="/articles/The-National-Anthem-Of-DRC-Debout-Congolais-In-Tshiluba/jukayi.png"><br>
        <p>The National Anthem 'Debout Congolais' in Tshiluba</p>
        <a href="/articles/To-Be-Or-Not-To-Be/">
        <img class="post-icon" src="/articles/To-Be-Or-Not-To-Be/to-be.png"><br>
        <p>To Be or Not To Be: Conjugating 'To Be' in Tshiluba</p>
        <a href="/articles/How-To-Count-In-Tshiluba/">
        <img class="post-icon" src="/articles/How-To-Count-In-Tshiluba/count2.png"><br>
        <p>How to count in Tshiluba</p>
        </a><br>
        <a href="/articles/Exploring-The-Noun-Class-System-In-Tshiluba/">
        <img class="post-icon" src="/articles/Exploring-The-Noun-Class-System-In-Tshiluba/Luba-Grammaire.png"><br>
        <p>Exploring the Noun Class System in Tshiluba: A Detailed Examination</p>
        </a><br>

        <a href="/articles/The-Mu-Ba-Tshiluba-Noun-Class/">
        <img class="post-icon" src="/articles/The-Mu-Ba-Tshiluba-Noun-Class/Mu-ba.png"><br>
        <p>The Mu-Ba Tshiluba Noun Class</p>
        </a><br>

        <a href="/articles/The-ka-tu-tshiluba-noun-class/">
        <img class="post-icon" src="/articles/The-ka-tu-tshiluba-noun-class/katu.png"><br>
        <p>The Ka-Tu Tshiluba Noun Class</p>
        </a><br>
        </div>
        
        <div class="pageLinks">
            <h1>Pages</h1>
            </div>
            
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
        
    
    
     <!--END OF SIDE BAR CODE-->
        `
    }
}

customElements.define("side-bar", Sidebar)