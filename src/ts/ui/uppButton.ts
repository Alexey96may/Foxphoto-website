export class UppButton {
    button = document.getElementById("buttonUp");
    minHeight = 400;
    actualHeight = 0;
    waitFlag = true;

    constructor() {
        if (this.button === null) {
            throw new Error("Set #buttonUp element!");
        }

        this.setActualHeight();
        window.addEventListener("scroll", this.onScroll.bind(this));

        this.button.addEventListener("click", () => {
            window.scrollTo(0, 0);
        });
    }

    setActualHeight() {
        if (this.waitFlag) {
            this.waitFlag = false;

            setTimeout(() => {
                this.waitFlag = true;
            }, 200);

            this.actualHeight =
                "scrollY" in window
                    ? window.scrollY
                    : document.documentElement.scrollTop;
        }
    }

    onScroll() {
        this.setActualHeight();

        if (this.actualHeight > this.minHeight) {
            this.button?.classList.add("uppButton--visible");
        } else {
            this.button?.classList.remove("uppButton--visible");
        }
    }
}
