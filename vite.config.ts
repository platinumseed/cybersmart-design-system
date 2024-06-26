import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue({
		template: {
			compilerOptions: {
				// treat all tags with a dash as custom elements
				isCustomElement: (tag) => tag.includes('sl-')
			}
		}
	})],
	build: {
		cssCodeSplit: false, // Combine all CSS into one file
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/index.ts'),
			},
			output: {
				assetFileNames: 'styles/[name].[ext]', // Customize output path
			},
		},
	},
})
