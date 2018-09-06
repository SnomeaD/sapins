'use strict';
import 'bootstrap';
// Importing style
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.less';

// Importing external lib
import $ from 'jquery';
import Vue from 'vue';

// App import
import app from './app.vue';

// Main app.
$(function () {
    return new Vue(app);
});
