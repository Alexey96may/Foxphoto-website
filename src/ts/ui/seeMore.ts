export class SeeMore {
    seeMoreButton = document.querySelector("#seeMore");
    divToOpen = document.querySelector("#aboutInfo") as HTMLElement;
    minHeightElem = document.querySelector("#aboutArticleFirst") as HTMLElement;
    isOpen = false;

    minHeight: string;
    maxHeight: string;

    constructor() {
        if (this.seeMoreButton === null) {
            throw new Error("Set #seeMore element in the page!");
        } else {
            this.minHeight = this.minHeightElem.offsetHeight + "px";
            this.maxHeight = this.divToOpen.offsetHeight + "px";

            console.log(this.minHeight, this.maxHeight);

            this.divToOpen.style.height = this.minHeight;

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
}
