            
    // NavBar
    function hideIconBar() {
        var iconBar = document.getElementById("iconBar");
        var navigation = document.getElementById("navigation");
        iconBar.setAttribute("style", "display:none;");
        navigation.classList.remove("hide");
    }

    function showIconBar() {
        var iconBar = document.getElementById("iconBar");
        var navigation = document.getElementById("navigation");
        iconBar.setAttribute("style", "display:block;");
        navigation.classList.add("hide");
    }

    // Comment
    function showComment() {
        var commentArea = document.getElementById("comment-area");
        commentArea.classList.remove("hide");
    }

    // Reply
    function showReply() {
        var replyArea = document.getElementById("reply-area");
        replyArea.classList.remove("hide");
    }

    // Handle Comment Submission
    document.getElementById("comment-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting (we will handle it in JavaScript)
        var commentInput = document.getElementById("comment-input").value;
        // Process the commentInput and add it to the comments section as needed
        // You can use JavaScript to create new comment elements and append them to the comments section.
        // Example: Create a new comment element, set its content to commentInput, and append it to the comments section.
        var commentsContainer = document.querySelector(".comments-container");
        var newComment = document.createElement("div");
        newComment.className = "body";
        newComment.innerHTML = `
            <div class="authors">
                <div class="username"><a href="">Username</a></div>
                <div>Role</div>
                <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="">
                <div>Posts: <u>45</u></div>
                <div>Points: <u>4586</u></div>
            </div>
            <div class="content">${commentInput}</div>
        `;
        commentsContainer.appendChild(newComment);
        document.getElementById("comment-input").value = ""; // Clear the comment input field
    });

    // Handle Reply Submission
    document.getElementById("reply-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting (we will handle it in JavaScript)
        var replyInput = document.getElementById("reply-input").value;
        // Process the replyInput and add it to the comments section as needed
        // Similar to handling comments, create a new reply element, set its content to replyInput, and append it to the comments section.
        var commentsContainer = document.querySelector(".comments-container");
        var newReply = document.createElement("div");
        newReply.className = "body";
        newReply.innerHTML = `
            <div class="authors">
                <div class="username"><a href="">Username</a></div>
                <div>Role</div>
                <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="">
                <div>Posts: <u>455</u></div>
                <div>Points: <u>4586</u></div>
            </div>
            <div class="content">${replyInput}</div>
        `;
        commentsContainer.appendChild(newReply);
        document.getElementById("reply-input").value = ""; // Clear the reply input field
    });