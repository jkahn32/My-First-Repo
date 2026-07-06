import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./main.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

lightbox.init();
