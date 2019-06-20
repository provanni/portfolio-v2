window.onload = function () {

    document.getElementById("learn-more").addEventListener("click", function () {
        open("about");
    });

    function closeAll(){
        document.getElementById("over-about").style.display = "none";
        document.getElementById("over-skills").style.display = "none";
        document.getElementById("over-resume").style.display = "none";
        document.getElementById("over-projects").style.display = "none";
    }

    function open(section){
        close();

        let placeholder = "over-" + section;

        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "none";
        document.getElementById("overlay").style.display = "block";
        document.getElementById(placeholder).style.display = "block";
        document.getElementById("about").style.display = "none";
    }

    function close(){
        document.getElementById("overlay").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.body.style.backgroundColor = "transparent";
        document.body.style.background = "url('./images/64521.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "bottom";
        document.body.style.backgroundSize = "cover";

        closeAll();
    }

    // closing the overlay info
    document.getElementById("close").addEventListener("click", function () {
        close();
    });

    //opening the about through the nav
    document.getElementById("nav-about").addEventListener("click", function () {
        open("about");
    });

    //opening the skills through the nav
    document.getElementById("nav-skills").addEventListener("click", function () {
        open("skills");
    });

    //opening the resume through the nav
    document.getElementById("nav-resume").addEventListener("click", function () {
        open("resume");
    });

    //opening the projects through the nav
    document.getElementById("nav-projects").addEventListener("click", function () {
        open("projects");
    });

   

}

