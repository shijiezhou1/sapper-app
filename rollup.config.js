import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
// path alias
import alias from '@rollup/plugin-alias';
import sveltePreprocess from 'svelte-preprocess';
// strip out
import strip from 'rollup-plugin-strip';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = ( warning, onwarn ) =>
	( warning.code === 'MISSING_EXPORT' && /'preload'/.test( warning.message ) ) ||
	( warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test( warning.message ) ) ||
	onwarn( warning );

const customResolver = resolve( {
	extensions: [ '.mjs', '.js', '.jsx', '.json', '.sass', '.scss' ]
} );
const projectRootDir = path.resolve( __dirname );
const entries = [ { find: '@', replacement: path.resolve( projectRootDir, 'src/' ) }, ];

const preprocess = sveltePreprocess( {
	scss: {
		includePaths: [ 'src' ],
	},
	postcss: {
		plugins: [ require( 'autoprefixer' ) ],
	},
} );


export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			alias( {
				entries,
				customResolver
			} ),
			replace( {
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify( mode )
			} ),
			svelte( {
				compilerOptions: {
					dev,
					hydratable: true,
				},
				preprocess
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			}),

			strip({
				// set this to `false` if you don't want to
				// remove debugger statements
				debugger: true,
		  
				// defaults to `[ 'console.*', 'assert.*' ]`
				functions: [ 'console.log', 'assert.*', 'debug', 'alert' ],
		  
				// remove one or more labeled blocks by name
				// defaults to `[]`
				labels: ['unittest'],
		  
				// set this to `false` if you're not using sourcemaps –
				// defaults to `true`
				sourceMap: true
			  }),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			alias( {
				entries,
				customResolver
			} ),
			replace( {
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify( mode )
			} ),
			svelte( {
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true,
				},
				preprocess,
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),

			strip({
				// set this to `false` if you don't want to
				// remove debugger statements
				debugger: true,
		  
				// defaults to `[ 'console.*', 'assert.*' ]`
				functions: [ 'console.log', 'assert.*', 'debug', 'alert' ],
		  
				// remove one or more labeled blocks by name
				// defaults to `[]`
				labels: ['unittest'],
		  
				// set this to `false` if you're not using sourcemaps –
				// defaults to `true`
				sourceMap: true
			  })
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
