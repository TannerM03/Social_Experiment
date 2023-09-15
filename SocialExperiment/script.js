const settingsmenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");
const closeButtons = document.querySelectorAll(".conversations-close a");
const popupMenus = document.querySelectorAll(".conversations");
const openConversations = document.querySelectorAll(".online a");
const inputTextboxes = document.querySelectorAll(".conversations-input");
const userTextContainers = document.querySelectorAll(".text-bubble-user-container");
const conversationEnterButtons = document.querySelectorAll(".conversations-enter");

const remindersClose = document.querySelectorAll(".reminders a");
const reminders = document.querySelectorAll(".reminders");
const remindersOpen = document.querySelectorAll(".right-event a");

const commentButtons = document.querySelectorAll(".comment")
const unlikeds = document.querySelectorAll(".like1");
const likeds = document.querySelectorAll(".like2");
const likeCounters = document.querySelectorAll(".like-counter");
const commentCounters = document.querySelectorAll(".comment-counter");
const commentsCloses = document.querySelectorAll(".comment-container a");
const commentsContainers = document.querySelectorAll(".comment-container");
const commentsOpens = document.querySelectorAll(".comment");
const commentTextBoxes = document.querySelectorAll(".comments-input");
const commentEnterButtons = document.querySelectorAll(".comment-enter");
const commentContainers = document.querySelectorAll(".comment-container");


const postButton = document.querySelector(".post-image");
const newPost = document.querySelector(".new-post-container");
const postedImage = document.querySelector(".post-img-new");
const image_input = document.querySelector("#image_input");
var uploaded_image = "";
const user_caption = document.querySelector(".post-input-container textarea");
const postedCaption = document.querySelector(".post-text-new");
const postContainer = document.querySelector("#postContainer");
const deletePost = document.querySelector(".delete-post");

deletePost.addEventListener("click", function(event) {
    event.preventDefault();
    newPost.style.display = "none";
    uploaded_image = "";
    postedCaption.textContent = "";
})

function clearFileInput(){
    image_input.value = '';
}

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#image_input").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

postButton.addEventListener("click", function(event) {
    event.preventDefault();

    // const newPostContainer = document.querySelector(".new-post-container").cloneNode(true);
    // const uploadedImage = newPostContainer.querySelector(".post-img-new");
    // uploadedImage.src = "";
  
    // const postedCaption = newPostContainer.querySelector(".post-text-new");
    // postedCaption.textContent = "";
    // postContainer.appendChild(newPostContainer);

        
    newPost.style.display = "block";
    postedImage.src = uploaded_image;
    image_input.value = "";

    const userMessage = user_caption.value.trim();
        if (userMessage !== "") {
            postedCaption.textContent = userMessage;
            user_caption.value = "";
        }
})

function postComment(commentTextBoxes, commentContainer) {
    const userMessage = commentTextBoxes.value.trim();
    if (userMessage !== "") {
        const userComment = document.createElement("div");
        userComment.classList.add("user-comment");
        
        const userProfilePic = document.createElement("img");
        userProfilePic.src = "images/tannerProfile.jpg";
        userProfilePic.classList.add("comment-profile");

        const commentText = document.createElement("p");
        commentText.textContent = userMessage;

        userComment.appendChild(userProfilePic);
        userComment.appendChild(commentText);

        commentContainer.appendChild(userComment);
        userProfilePic.style.display = "block";

        commentTextBoxes.value = "";
    }
}

commentEnterButtons.forEach((button, index) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        postComment(commentTextBoxes[index], commentContainers[index]);
        increaseCommentCounter(index);
    });
});


commentsCloses.forEach((button, index) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        commentsContainers[index].style.display = "none";
    })
})

commentsOpens.forEach((button, index) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        commentsContainers[index].style.display = "flex";
    })
})

unlikeds.forEach((unliked, index) => {
    unliked.addEventListener("click", () => {
        increaseLikeCounter(index);
    })
})

likeds.forEach((liked, index) => {
    liked.addEventListener("click", () => {
        decreaseLikeCounter(index);
    })
})



function increaseCommentCounter(index) {
    let currentCount = parseInt(commentCounters[index].value);
    currentCount ++;
    commentCounters[index].value = currentCount;
}

function increaseLikeCounter(index) {
    let currentCount = parseInt(likeCounters[index].value);
    currentCount ++;
    likeCounters[index].value = currentCount;
    unlikeds[index].style.display = "none";
    likeds[index].style.display = "inline-block";
}

function decreaseLikeCounter(index) {
    let currentCount = parseInt(likeCounters[index].value);
    currentCount --;
    likeCounters[index].value = currentCount;
    unlikeds[index].style.display = "inline-block";
    likeds[index].style.display = "none";
}

remindersOpen.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        reminders[index].style.display = "block";
    });
});

remindersClose.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        reminders[index].style.display = "none";
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        popupMenus[index].style.display = "none";
    });
});

openConversations.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        popupMenus[index].style.display = "block";
    });
});

inputTextboxes.forEach((inputTextbox, index) => {
    inputTextbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage(inputTextbox, userTextContainers[index]);
        }
    });
});

conversationEnterButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        sendMessage(inputTextboxes[index], userTextContainers[index]);
    });
});

function postImage() {
    window.location.href = "post.html"; 
}


function sendMessage(inputTextbox, userTextContainers) {
    const userMessage = inputTextbox.value.trim();
    if (userMessage !== "") {
        const userTextBubble = document.createElement("div");
        userTextBubble.classList.add("text-bubble-user");
        userTextBubble.textContent = userMessage;
        userTextContainers.appendChild(userTextBubble);
        inputTextbox.value = "";
    }
}

function openYourStory() {
    window.location.href = "yourStory.html";
}

function openStory1() {
    window.location.href = "story1.html"; 
}
function openStory2() {
    window.location.href = "story2.html"; 
}
function openStory3() {
    window.location.href = "story3.html"; 
}
function openStory4() {
    window.location.href = "story4.html"; 
}
function closeStory() {
    window.location.href = "index.html"; 
}

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }

}

if(localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

localStorage.setItem("theme", "light");
localStorage.getItem("theme")