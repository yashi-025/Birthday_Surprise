let slides = ["slide1", "slide2", "slide3"];
let currentSlide = 0;

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        document.getElementById(slides[currentSlide]).classList.remove("active");
        currentSlide++;
        document.getElementById(slides[currentSlide]).classList.add("active");
    }

    // Remove teddy after slide 3
    if (currentSlide === 3) {
        document.querySelector(".floating-teddy").style.display = "none";
    }
}

// Automatically transition to the next slide every 3 seconds
setTimeout(nextSlide, 3000);
setTimeout(nextSlide, 6000);

function chooseOption(isSpecial) {
    document.getElementById("slide3").classList.remove("active");
    if (isSpecial) {
        document.getElementById("specialSlide").classList.add("active");
    } else {
        let messages = [
            "Are you kidding, miss?????",
            "Or are you just being humble about how special you are?",
            "🤔",
            "Wait!! let me see....",
            "😮",
            "OMG!! You’re the one we’ve been looking for! 🔥"
        ];
        let msgIndex = 0;
        let funnyMsg = document.getElementById("funnyMsg");
        document.getElementById("funnyText").classList.add("active");

        function showNextMessage() {
            if (msgIndex < messages.length) {
                funnyMsg.innerHTML = messages[msgIndex];
                msgIndex++;
                setTimeout(showNextMessage, 1500);
            } else {
                document.getElementById("funnyText").classList.remove("active");
                document.getElementById("slide3").classList.add("active");
            }
        }
        showNextMessage();
    }
}

function startSurprise() {
    document.getElementById("specialSlide").classList.remove("active");
    document.getElementById("gifSection").classList.add("active");
    document.getElementById("bgMusic").play();

    // Show GIFs one by one with a delay
    setTimeout(() => {
        document.getElementById("gif1").style.display = "block";
        document.getElementById("gif1").scrollIntoView({ behavior: 'smooth' }); // Scroll to the first GIF
    }, 2000);
    setTimeout(() => {
        document.getElementById("gif2").style.display = "block";
        document.getElementById("gif2").scrollIntoView({ behavior: 'smooth' }); // Scroll to the second GIF
    }, 4000);
    setTimeout(() => {
        document.getElementById("gif3").style.display = "block";
        document.getElementById("gif3").scrollIntoView({ behavior: 'smooth' }); // Scroll to the third GIF
    }, 6000);
    setTimeout(() => {
        document.querySelector(".gift-box").style.display = "block";
        document.querySelector(".gift-box").scrollIntoView({ behavior: 'smooth' }); // Scroll to the gift box
    }, 8000);
}

function showLetter() {
    document.getElementById("letterSection").classList.remove("hidden");

    let letterText = `Hey Motu, Happy Birthday!! 🎉🥳

Thanks for being my coffee—fixing my mood no matter what. ☕
Thanks for being my AI tool hub, magically solving all my problems. ✨
Thanks for being my anti-anxiety pill, wiping away my worries… though, sometimes, you’re the cause of them too!😅
Thanks for being my music, calming my chaos. 🎶
Thanks for being the most patient listener to a chatterbox like me.
Thanks for being my umbrella, shielding me from mummy’s scolding—though let’s not forget how you sometimes put me in the line of fire! 😂
And oh, thanks for being my personal diary, guarding all my secrets… except when you purposely leak the biggest ones to mummy! 🤭
But despite all that, thanks for always being there—for me, for everything. ❤️

Once again, Happy B’day, Motu! 🎂🎁`;

    let textContainer = document.getElementById("letterText");
    textContainer.innerHTML = letterText.replace(/\n/g, "<br>");

    // Auto-resize text if too long
    let textParent = document.getElementById("letterTextContainer");
    while (textContainer.scrollHeight > textParent.clientHeight && parseFloat(window.getComputedStyle(textContainer).fontSize) > 12) {
        textContainer.style.fontSize = (parseFloat(window.getComputedStyle(textContainer).fontSize) - 1) + "px";
    }
}
