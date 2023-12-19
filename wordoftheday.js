
//Java Script For Dictionary Search-->
//--Script for main page to get the searched input word-->
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

         // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
         }

        return array;
    }
    var getitem = window.location.search;
    var homeindexword = getitem.slice(7,getitem.length);
    
    var listy = document.querySelectorAll(".indexlist li");
    listsize = listy.length;
    const mwdarray = new Array(listsize);
    const mwdarrayx = mwdarray.fill().map((item, index) => index);
    shuffle(mwdarrayx);
    var xnum = [34, 6, 47, 25, 32, 2, 14, 4, 61, 44, 42, 38, 55, 22, 10, 27, 3, 53, 8, 13, 30, 67, 15, 50, 71, 66, 75, 46, 17, 45, 5, 60, 63, 72, 51, 69, 29, 9, 35, 26, 65, 52, 36, 7, 70, 24, 54, 56, 21, 43, 11, 49, 1, 31, 58, 33, 59, 73, 68, 20, 16, 19, 62, 39, 57, 28, 41, 18, 12, 74, 37, 64, 0, 40, 48, 23];
    var xnum2;

    function wordotd(){
        var xdate = new Date(),
        xmonth = xdate.getMonth(),
        xday = xdate.getDate(),
        xyear = xdate.getFullYear();
    var xmonths = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        xmonth = xmonths[xmonth];
        window.localStorage.setItem("xmonth", xmonth);
        window.localStorage.setItem("xday", xday);
        window.localStorage.setItem("xyear", xyear);
        var xnum2 = xnum[xday];
        window.localStorage.setItem("xnum2", xnum2);


        var newSection = document.createElement('div');
        var linebreak = document.createElement('br');
        newSection.innerHTML = window.localStorage.getItem("dailymuaku");
        document.getElementById("MWDsection").append(newSection);
        document.getElementById("MWDsection").append(linebreak);
    }

    var now = new Date();
    var til12am = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) - now;
    if (til12am < 0 ) {
        til12am += 86400000;// its after 12am, try 12am tomorrow!
    }
    setTimeout(wordotd(), til12am);
    if (xnum2 === undefined){
        let xdate = new Date();
        xmonth = xdate.getMonth(),
        xday = xdate.getDate(),
        xyear = xdate.getFullYear();
        xnum2 = xnum[xday];
    }
    
    console.log(til12am);