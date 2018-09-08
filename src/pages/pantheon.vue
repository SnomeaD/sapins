<template>
    <div class="container">
        <div class="modal fade" id="zoom-screen" tabindex="-1" role="dialog" aria-labelledby="zoom-screen" aria-hidden="true" :class="zoomScreen ? 'show' : ''">
            <div class="modal-dialog screen-modal" role="document">
                <img data-dismiss="modal" class="modal-content screen-modal-content" :src="zoomScreen">
            </div>
        </div>
         <div id="title" class="container-fluid">
            <div class="text-center"><h1>Le Panthéon</h1></div>
        </div>
        <div id="content" class="container">
            <div v-for="raid in pantheon">
                <h1 class="text-center">{{ raid.name }}</h1>
                <div :id="raid.shortname" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <template v-for="(boss, index) in raid.bosses">
                            <li
                                :data-target="raidLink(raid.shortname)"
                                :data-slide-to="index"
                                :class="index===0?'active':''">
                            </li>
                            <li v-if='boss.screen2'
                                :data-target="raidLink(raid.shortname)"
                                :data-slide-to="index++">
                            </li>
                        </template>
                    </ol>
                    <div class="carousel-inner border border-dark">
                        <template v-for="(boss, index) in raid.bosses">
                            <div class="carousel-item" :class="index===0?'active':''">
                                <img class="d-block w-100" :src="imageLink(boss.screen)" :alt="boss.name">
                                <div class="carousel-caption d-none d-md-block" v-if="['hm','bf','hc'].includes(raid.shortname) || boss.screen === ''">
                                    <h5>{{ boss.name }}</h5>
                                    <p>{{ boss.date }}</p>
                                </div>
                                <div>
                                    <a class="carousel-control-center" role="button" data-toggle="modal" data-target="#zoom-screen" v-on:click="zoomScreen = imageLink(boss.screen)">
                                        <span class="sr-only">Zoom</span>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item" v-if="boss.screen2">
                                <img class="d-block w-100" :src="imageLink(boss.screen2)" :alt="boss.name">
                                <div class="carousel-caption d-none d-md-block" v-if="['hm','bf','hc'].includes(raid.shortname) || boss.screen === ''">
                                    <h5>{{ boss.name }}</h5>
                                    <p>{{ boss.date }}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                    <a class="carousel-control-prev" :href="raidLink(raid.shortname)" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" :href="raidLink(raid.shortname)" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br />
            </div>
        </div>
    </div>
</template>
<script>
import pantheon from '../data/pantheon.json';
export default {
    data () {
        return {
            pantheon,
            zoomScreen: null,
        };
    },
    methods: {
        imageLink (screen) {
            var images = require.context('../gallery/down/', false, /\.jp(e*)g$/);
            return screen ? images('./' + screen + ".jpg") : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22580%22%20height%3D%22326%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Crect%20fill%3D%22%23666666%22%20id%3D%22canvas_background%22%20height%3D%22402%22%20width%3D%22582%22%20y%3D%22-1%22%20x%3D%22-1%22%2F%3E%3Cg%20display%3D%22none%22%20overflow%3D%22visible%22%20y%3D%220%22%20x%3D%220%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20id%3D%22canvasGrid%22%3E%3Crect%20fill%3D%22url(%23gridpattern)%22%20stroke-width%3D%220%22%20y%3D%220%22%20x%3D%220%22%20height%3D%22100%25%22%20width%3D%22100%25%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3Cellipse%20ry%3D%2232%22%20rx%3D%2244.5%22%20id%3D%22svg_1%22%20cy%3D%22225.016663%22%20cx%3D%22443.5%22%20stroke-width%3D%221.5%22%20stroke%3D%22%23000%22%20fill%3D%22%23007f00%22%2F%3E%3Cline%20stroke-linecap%3D%22null%22%20stroke-linejoin%3D%22null%22%20id%3D%22svg_3%22%20y2%3D%22146.016663%22%20x2%3D%2298%22%20y1%3D%22217.016663%22%20x1%3D%22168%22%20fill-opacity%3D%22null%22%20stroke-opacity%3D%22null%22%20stroke-width%3D%2210%22%20stroke%3D%22%23000%22%20fill%3D%22none%22%2F%3E%3Cline%20stroke-linecap%3D%22null%22%20stroke-linejoin%3D%22null%22%20id%3D%22svg_5%22%20y2%3D%22218.016663%22%20x2%3D%2263%22%20y1%3D%22234.016663%22%20x1%3D%22164%22%20fill-opacity%3D%22null%22%20stroke-opacity%3D%22null%22%20stroke-width%3D%2210%22%20stroke%3D%22%23000%22%20fill%3D%22none%22%2F%3E%3Cellipse%20ry%3D%2233.5%22%20rx%3D%22134.5%22%20id%3D%22svg_6%22%20cy%3D%22225.516663%22%20cx%3D%22279.5%22%20stroke-width%3D%221.5%22%20stroke%3D%22%23000000%22%20fill%3D%22%23007f00%22%2F%3E%3Cellipse%20id%3D%22svg_7%22%20cy%3D%22139.016663%22%20cx%3D%22431%22%20fill-opacity%3D%22null%22%20stroke-opacity%3D%22null%22%20stroke-width%3D%221.5%22%20stroke%3D%22%23000%22%20fill%3D%22%23bf5f00%22%2F%3E%3Cline%20stroke-linecap%3D%22null%22%20stroke-linejoin%3D%22null%22%20id%3D%22svg_8%22%20y2%3D%22294.016663%22%20x2%3D%22446%22%20y1%3D%22235.016663%22%20x1%3D%22330%22%20fill-opacity%3D%22null%22%20stroke-opacity%3D%22null%22%20stroke-width%3D%2210%22%20stroke%3D%22%23000%22%20fill%3D%22none%22%2F%3E%3Cline%20stroke-linecap%3D%22null%22%20stroke-linejoin%3D%22null%22%20id%3D%22svg_11%22%20y2%3D%22240.349995%22%20x2%3D%22466.999995%22%20y1%3D%22225.016661%22%20x1%3D%22450.999995%22%20stroke-width%3D%225%22%20stroke%3D%22%23ff0000%22%20fill%3D%22none%22%2F%3E%3Cline%20stroke-linecap%3D%22null%22%20stroke-linejoin%3D%22null%22%20id%3D%22svg_12%22%20y2%3D%22222.016663%22%20x2%3D%22469%22%20y1%3D%22241.016663%22%20x1%3D%22450%22%20fill-opacity%3D%22null%22%20stroke-opacity%3D%22null%22%20stroke-width%3D%225%22%20stroke%3D%22%23ff0000%22%20fill%3D%22none%22%2F%3E%3Ctext%20xml%3Aspace%3D%22preserve%22%20text-anchor%3D%22start%22%20font-family%3D%22Helvetica%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20id%3D%22svg_13%22%20y%3D%22100.016663%22%20x%3D%22126%22%20stroke-width%3D%220%22%20stroke%3D%22%23bf5f00%22%20fill%3D%22%23000000%22%3EBoss%20mort!%3C%2Ftext%3E%3Ctext%20font-style%3D%22italic%22%20xml%3Aspace%3D%22preserve%22%20text-anchor%3D%22start%22%20font-family%3D%22Helvetica%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2212%22%20id%3D%22svg_14%22%20y%3D%22131.016663%22%20x%3D%22199%22%20stroke-width%3D%220%22%20stroke%3D%22%23bf5f00%22%20fill%3D%22%23000000%22%3Emais%20on%20a%20oubli%C3%A9%20le%20screen%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E";
        },
        raidLink (raid) {
            return '#' + raid;
        },
        zoom (raid) {
            return '#' + raid;
        },
    }
};
</script>
