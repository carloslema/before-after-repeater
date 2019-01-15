import RollupPluginVue from 'rollup-plugin-vue'
import RollupPluginBabel from 'rollup-plugin-babel'

export default {
    input: 'src-js/index.js',
    output: {
        file: 'dist-js/index.js',
        format: 'cjs',
    },
    external: [
        'vue',
        'hammerjs',
        'collect.js',
    ],
    plugins: [
        RollupPluginVue(),
        RollupPluginBabel({
            exclude: 'node_modules/**',
        }),
    ],
}
