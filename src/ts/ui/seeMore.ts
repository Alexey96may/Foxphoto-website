export class SeeMore {
    seeMoreButton = document.querySelector("#seeMore") as HTMLElement;
    divToOpen = document.querySelector("#aboutInfo") as HTMLElement;
    minHeightElem = document.querySelector("#aboutArticleFirst") as HTMLElement;
    isOpen = false;

    minHeight = "auto";
    maxHeight = "auto";

    constructor() {
        if (this.seeMoreButton === null) {
            throw new Error("Set #seeMore element in the page!");
        } else {
            setTimeout(() => {
                this.minHeight = this.minHeightElem.offsetHeight + "px";
                this.maxHeight = this.divToOpen.offsetHeight + "px";

                if (this.seeMoreButton.offsetHeight) {
                    this.divToOpen.style.height = this.minHeight;
                } else {
                    this.divToOpen.style.height = "auto";
                }
            }, 100);

            window.addEventListener("resize", this.onResize.bind(this), true);

            this.seeMoreButton.addEventListener("click", () => {
                this.isOpen = this.isOpen ? false : true;
                this.divToOpen.style.height = this.isOpen
                    ? this.maxHeight
                    : this.minHeight;

                this.classesToggle();
            });
        }
    }

    classesToggle(): void {
        this.seeMoreButton?.classList.toggle("see-more--clicked");
    }

    onResize(): void {
        this.seeMoreButton.style.display = "none";
        this.divToOpen.style.height = "auto";
    }
}
