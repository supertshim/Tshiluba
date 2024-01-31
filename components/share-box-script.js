
    
        /*the fb share link*/
        let fblink2 = document.querySelector('.fbshare');
        var getwindowlink = encodeURIComponent(document.location.href)
        fblink2.href = `https://www.facebook.com/share.php?u=${getwindowlink}`;
        fblink2.setAttribute("data-href", `https://www.facebook.com/share.php?u=${getwindowlink}`);
        fblink2.setAttribute("href", `https://www.facebook.com/share.php?u=${getwindowlink}`);
    
        /*the x share link*/
        let xlink = document.querySelector('.xshare');
        let xtitle = document.querySelector('.title-box').innerText;
        let xhandle = `${xtitle} -- ${getwindowlink} via @TshilubaCo`;
        xlink.setAttribute("href", `http://twitter.com/intent/tweet?text=${xhandle}`);
        
        /*The whatsapp share link*/
        let whatsapplink = document.querySelector('.whatsappshare');
        whatsapplink.setAttribute("href", `https://api.whatsapp.com/send?text=${getwindowlink}`);
    
        /*The Copy link button*/
        function Copy() {
        var urlCopy = document.getElementById("urlCopy");
        urlCopy.setAttribute("readonly",`readonly`);
        urlCopy.innerHTML = document.location.href;
        urlCopy.select();
        document.execCommand("copy");
        }
    
        // Get the elements by their ID
        var popupLink = document.getElementById("popup-link");
        var popupWindow = document.getElementById("popup-window");
        // Show the pop-up window when the link is clicked
        popupLink.addEventListener("click", function(event) {
          event.preventDefault();
          popupWindow.style.display = "block";
          popupLink.style.display = "block";
          setTimeout(() => {
            popupWindow.style.display = "none";
          }, 2000);
        });
