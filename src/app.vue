<template>
    <div>
        <div id="header"></div>
        <div id="app">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <router-link class="navbar-brand" :to="{name:'home'}">Les Sapins de la Horde</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li
                            v-for="(page, index) in pages"
                            :key="index"
                            class="nav-item"
                        >
                            <router-link class="nav-link" :to="{name:page.routeName}">
                                <i
                                    tooltip-placement="bottom"
                                    :uib-tooltip="page.description"
                                />
                                {{ page.description }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li class="nav-item">
                        <a class="nav-link">
                            <a href='https://discord.gg/adEwXR5' target="_blank"><img src="./img/Discord-Logo-White.png" height="32px"></a>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="container content">
                <!-- Content -->
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
// Importing Vue and Vue library
import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
const home = () => import(/* webpackChunkName: "home" */'./pages/home.vue');
const markdown = () => import(/* webpackChunkName: "markdown" */'./pages/markdown.vue');
const pantheon = () => import(/* webpackChunkName: "pantheon" */'./pages/pantheon.vue');

// List of vue addon that we use.
Vue.use(VueRouter);
// Route declaration
const routes = [
    { path: '/', name: 'home', component: home, props: false },
    { path: '/pantheon', name: 'pantheon', component: pantheon, props: false },
    { 
        path: '/histoire',
        name: 'histoire',
        component: markdown,
        props: { filename: 'histoire' }
    },
    { 
        path: '/charte',
        name: 'charte',
        component: markdown,
        props: { filename: 'charte' }
    },
    { 
        path: '/recrutement',
        name: 'recrutement',
        component: markdown,
        props: { filename: 'recrutement' }
    },
];

const router = new VueRouter({
    routes: routes
});

export default {
    el: '#app',
    router: router,
    data () {
        return {
            pages: [
                {description: 'L\'Histoire', routeName: 'histoire'},
                {description: 'La Charte', routeName: 'charte'},
                {description: 'Le Recrutement', routeName: 'recrutement'},
                {description: 'Le Panthéon', routeName: 'pantheon'}
            ]
        };
    }  
};
</script>
