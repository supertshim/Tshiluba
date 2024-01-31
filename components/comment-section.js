class Comments extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!--COMMENT AREA-->
        <!-- customize labels of htmlcommentbox.com -->
        <script>
            /* This code goes ABOVE the main HTML Comment Box code!
            replace the text in the single quotes below to customize labels.*/
            hcb_user = {
                /* L10N */
                comments_header : 'Comments <br> Commentaires <br> Tua Kuamba',
                name_label : 'Name. Nom. Dina.',
                content_label: 'Enter your comment here. 
Entrez votre commentaire ici.
Nubuelayi apa diandamuna webe.',
                submit : 'Comment',
                logout_link : '<img title="log out" src="https://www.htmlcommentbox.com/static/images/door_out.svg" alt="[logout]" class="hcb-icon hcb-door-out"/>',
                admin_link : '<img src="https://www.htmlcommentbox.com/static/images/door_in.svg" alt="[login]" class="hcb-icon hcb-door-in"/>',
                no_comments_msg: 'No one has commented yet. Be the first ! <br><br> Personne n'a encore commenté. Soyez le premier ! <br><br> Muntu nansha umwe mua kufila diandamuna to. Ikalayi wa kumpala !',
                add:'Add your comment',
                again: 'Post another comment',
                rss:'<img src="https://www.htmlcommentbox.com/static/images/feed.svg" class="hcb-icon" alt="rss"/> ',
                said:'said:',
                prev_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
                next_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
                showing:'Showing',
                to:'to',
                website_label:'website (optional)',
                email_label:'email',
                anonymous:'Anonymous',
                mod_label:'(mod)',
                subscribe:'Email Me Replies',
                add_image:'Add Image',
                are_you_sure:'Do you want to flag this comment as inappropriate?',
            
                reply:'Reply',
                flag:'Flag',
                like:'Like',
            
                /* dates */
                days_ago:'days ago',
                hours_ago:'hours ago',
                minutes_ago:'minutes ago',
                within_the_last_minute:'within the last minute',
            
                msg_thankyou:'Thank you for commenting!',
                msg_approval:'NOTE: This comment is not published until approved',
                msg_approval_required:'Thank you for commenting! Your comment will appear once approved by a moderator.',
            
                err_bad_html:'Your comment contained bad html.',
                err_bad_email:'Please enter a valid email address.',
                err_too_frequent:'You must wait a few seconds between posting comments.',
                err_comment_empty:'Your comment was not posted because it was empty!',
                err_denied:'Your comment was not accepted.',
                err_unknown:'Your comment was blocked for unknown reasons, please report this.',
                err_spam:'Your comment was detected as spam.',
                err_blocked:'Your comment was blocked by site policy.',
            
                /* SETTINGS */
                MAX_CHARS: 8192,
                PAGE:'', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
                ON_COMMENT: function(){}, /* Function to call after commenting. */
                RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
            };
            </script>
            <!-- done customizing labels of htmlcommentbox.com -->

        <!-- begin wwww.htmlcommentbox.com -->
        <div class="commentArea">
            <div id="HCB_comment_box">
            <a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
            <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
            <script type="text/javascript" id="hcb"> /*<!-*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24YkI2CHNezk32RtbUp6jyD."+"&opts=16798&num=10&ts=1705329902461");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*--*/ </script>
            </div>               


            <!-- end www.htmlcommentbox.com -->
        <!--END COMMENT AREA-->
        `
    }
}

customElements.define("comment-section", Comments)