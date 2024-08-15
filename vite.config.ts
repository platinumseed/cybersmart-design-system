import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue({
		template: {
			compilerOptions: {
				// treat all tags with a dash as custom elements
				isCustomElement: (tag) => tag.includes('sl-') || tag == 'marquee',
			}
		}
	})],
	build: {
		cssCodeSplit: false, // Combine all CSS into one file
		outDir: 'dist',
		rollupOptions: {
			output: {
				assetFileNames: 'styles/[name].[ext]', // Customize output path
			},
		},
	},
})
