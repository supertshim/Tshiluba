class GoogleAd extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3865469888003630"
     crossorigin="anonymous"></script>
<!-- Square SideBar Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3865469888003630"
     data-ad-slot="2206397567"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>    
        `
    }
}

customElements.define("google-sidebar-ad", GoogleAd)