/*global*/

"use strict";
var Project = {

    thumbnails: null,
    background: null,

    init: function() {
        console.log("hi");
        Project.renderDesktop();
        Project.renderWindow();
        Project.getImages();
        Project.changeImage();
    },

    RenderDesktop: function() {

        Project.background = document.body.style.backgroundImage = "url('pics/desktop.jpg')";

        var footer = document.getElementById("footer");
        var iconDiv = document.createElement("div");
        footer.appendChild("iconDiv");

        var iconImage = document.createElement("img");
        iconImage.setAttribute("src", "pics/icon.jpg");
        iconDiv.appendChild("iconImage");


        console.log("hi");
    },

    RenderWindow: function() {
        var containerDiv = document.getElementById("container");
        var windowDiv = document.createElement("div");
        containerDiv.appendChild("windowDiv");

        var windowHeader = document.createElement("div");
        windowDiv.appendChild("windowHeader");

        var headerText = document.createElement("p");
        windowHeader.appendChild("headerText");
        headerText.innerHTML = "Image Viewer";
        console.log("there");


    },

    getImages: function() {
        var thumbnailInfo;
        var xhr = new XMLHttpRequest();
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                thumbnailInfo = JSON.parse(xhr.responseText);
            }
        }
    },

    changeImage: function() {

    }

};
window.onload = Project.init;