export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("nav");
    #body = document.querySelector("body");
    #isMenuOpen = false;

    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.classesToggle();
            this.toggleMenu();
        });

        this.#body?.addEventListener("click", (event) => {
            event.stopPropagation();

            if (
                this.#isMenuOpen &&
                (event.target as HTMLElement).tagName?.toLowerCase() === "a"
            ) {
                console.log((event.target as HTMLElement).closest("header"));

                this.toggleMenu();
                this.classesToggle();
            }
        });
    }

    classesToggle(): void {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#headerNav?.classList.toggle("navigation--appear");
    }

    toggleMenu(): void {
        if (this.#isMenuOpen) {
            this.#isMenuOpen = false;
        } else {
            this.#isMenuOpen = true;
        }
    }
}
