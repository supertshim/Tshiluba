class Darkmode extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <style>
        @media (prefers-color-scheme: dark) {
            :root{
                --primary-color:rgb(30, 29, 51);
                --primary-color-b: rgb(30, 29, 51);
                --secondary-color:white;
                --shadow-color: black;
                --primary-text-color: white;
                --mini-link-color: grey;
                }
        }
        </style>
        `
    }
}

customElements.define("dark-mode", Darkmode)