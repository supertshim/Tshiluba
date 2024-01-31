class shareBox extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <p><br>-share-</p>
        <a class="share-icon fbshare" href=" "><img src="/images/share-fb.png" alt=""></a>
        <a class="share-icon xshare" href=" "><img src="/images/share-x.png" alt=""></a>
        <a class="share-icon whatsappshare" href=" " data-action="share/whatsapp/share"><img src="/images/share-whatsapp.png" alt=""></a>
    
        <button type="submit" onclick="Copy();"><a class="share-icon copyshare" id="popup-link"><img src="/images/share-copy.png"></a><textarea style="opacity:0%; width: 1px; overflow:hidden;" id="urlCopy" rows="1" cols="30"></textarea></button>
        <div id="popup-window"> 
        <p>Link Copied</p>
        </div>
        <script src="share-box-script.js"></script>
        `
    }
}

customElements.define("share-box", shareBox)