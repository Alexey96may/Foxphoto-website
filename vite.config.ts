import Inspect from "vite-plugin-inspect";
import PluginChecker from "vite-plugin-checker";
import handlebars from "vite-plugin-handlebars";
import { svgSpritemap } from "vite-plugin-svg-spritemap";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";
import { optimizeImages } from "./config/img/imageOptimizer";
import { fontPlugIn } from "./config/fonts/font-plugin";
import cp from "vite-plugin-cp";
import { wrapImgWithPicture } from "./config/img/wrapImgWithPicture";
import { DEFAULT_OPTIONS } from "./config/img/imageOptimizerConfig";
import path from "path";

export default {
    plugins: [
        fontPlugIn(
            path.resolve(__dirname, "src", "assets", "fonts"),
            path.resolve(
                __dirname,
                "src",
                "assets",
                "scss",
                "utils",
                "_fonts.scss"
            )
        ),

        cp({
            targets: [
                {
                    src: path.resolve(__dirname, "src/assets/img/**/*.jpg"),
                    dest: path.resolve(__dirname, "dist/assets/img"),
                },
                {
                    src: path.resolve(__dirname, "src/assets/img/**/*.jpeg"),
                    dest: path.resolve(__dirname, "dist/assets/img"),
                },
                {
                    src: path.resolve(__dirname, "src/assets/img/**/*.png"),
                    dest: path.resolve(__dirname, "dist/assets/img"),
                },
            ],
        }),

        svgSpritemap({
            pattern: "src/assets/sprites/*.svg",
        }),

        ViteImageOptimizer(DEFAULT_OPTIONS),

        viteCompression({
            algorithm: "brotliCompress",
        }),

        Inspect(),

        // PluginChecker({
        //     typescript: true,
        // }),

        handlebars({
            reloadOnPartialChange: true,
            partialDirectory: path.resolve(__dirname, "src/html/modules"),
        }),

        cssnano({
            preset: "default",
        }),

        {
            name: "optimize-images-and-wrap",
            closeBundle: async () => {
                await optimizeImages();
                await wrapImgWithPicture();
            },
        },
    ],

    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src", "assets"),
        },
    },

    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
        },
    },
};
