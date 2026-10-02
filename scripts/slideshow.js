import { createApp, reactive, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { Renderer } from './renderer.js';

let app = createApp({
    setup() {
        return {
            view :reactive({
                id: 'view',
                width: 800,
                height: 600
            }),
            renderer: ref(null),
            slide_description: ref([
                "Bezier Curves",
                "Circles",
                "Convex Polygons",
                "Name"
            ]),
            slide_idx: ref(0),
            curve_sections: ref(36),
            show_points: ref(true)
        };
    },

    watch: {
        curve_sections(new_value, old_value) {
            this.renderer.setNumCurveSections(parseInt(new_value));
        },
        show_points(new_value, old_value) {
            this.renderer.showPoints(new_value);
        }
    },

    methods: {
        prevSlide() {
            if (this.slide_idx > 0) {
                this.slide_idx -= 1;
                this.renderer.drawSlide(this.slide_idx);
            }
        },
        
        nextSlide() {
            if (this.slide_idx < this.slide_description.length - 1) {
                this.slide_idx += 1;
                this.renderer.drawSlide(this.slide_idx);
            }
        }
    }
}).mount('#content');

app.renderer = new Renderer(app.view, app.curve_sections, app.show_points);
app.renderer.drawSlide(app.slide_idx);
