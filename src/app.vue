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

// List of vue addon that we use.
Vue.use(VueRouter);
// Route declaration
const routes = [
    { path: '/', name: 'home', component: home, props: false },
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
                {description: 'Le Recrutement', routeName: 'recrutement'}
            ]
        };
    }  
};
</script>
