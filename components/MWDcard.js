class MuakuWD extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <div class="mwd" id="mwd">
            <a id="dailylink"; href="?inpt1="; style="text-decoration: none; color: black;">
                <h1 class="mwdate" id="mwdate"></h1>
                <h1 class="mwdtitle">MUAKU WA DITUKU</h1>
                <h1 class="mwdtitletx">MOT DU JOUR | WORD OF THE DAY</h1>
                <h1 class="mwdbigword" id="mwdinf1"></h1>
                <h1 class="mwdPhon" id="mwdPho"></h1>
                <h1 class="mwdefinition" id="mwdef"></h1></a>
            </div>
            
        `
    }
}

customElements.define("muakuwd-card", MuakuWD)