import axios from 'axios'
import fs from 'fs'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
        }
    },
    generate: {
        routes: async function()  {
            const response = await axios.get('http://jschof.com/wp-json/wp/v2/posts')
            const routes = response.data.map(post => {
                return {
                    route: '/post/' + post.id,
                    payload: post
                }
            });

            routes.push({
                route: '/post/',
                payload: response.data
            })

            fs.writeFileSync('dist/data.json', JSON.stringify(response.data))            

            return routes
        }          
    }
}






