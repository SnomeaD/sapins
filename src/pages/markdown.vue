<template>
    <div class="container">
         <div id="title" class="container-fluid">
            <div class="text-center" v-html="compiledMarkdown.title"></div>
        </div>
        <div id="content" class="container">
            <div v-html="compiledMarkdown.content"></div>
        </div>
    </div>
</template>
<script>

var marked = require('marked');
export default {
    props: {
        filename: {
            type: String,
            default () { ""; },
            require: true
        }
    },
    computed: {
        compiledMarkdown: function () {
            const file = require(/* webpackMode: "eager" */ `../data/${this.filename}.md`);
            return {
                title: marked(file.slice(0,file.indexOf('\n')),{ sanitize: true }),
                content: marked(file.slice(file.indexOf('\n')),{ sanitize: true })
            };
                
        },
        title : function () {
            return this.filename;
        }
    }
};
</script>
