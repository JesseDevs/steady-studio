// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	pages: true,

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Steady Studio',

			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=1',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'Where creativity meets functionality. Crafting exceptional web experiences to elevate your brand.',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Steady Studio - Web Design',
				},
				{
					hid: 'og-image',
					property: 'og:image',
					content: '/image-2.jpg',
				},
				{
					name: 'keywords',
					content:
						'Nuxt.js, Vue.js, freelance, creative, web development, Javascript, front-end',
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: `https://steady-six.vercel.app/`,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'Steady Studio - Web Design',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content:
						'Where creativity meets functionality. Crafting exceptional web experiences to elevate your brand.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: '/image-2.jpg',
				},
				{
					hid: 'og-type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://steady-six.vercel.app/`,
				},
				{
					property: 'og:locale',
					content: 'en_US',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
		},
	},
	modules: [
		'nuxt-icon',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'@nuxt/image-edge',
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		preload: true,
		families: {
			Inter: '100..700',
			'Crimson Pro': {
				wght: '100..900',
				ital: '100..700',
			},
			'Noto Serif': {
				wght: '100..900',
				ital: '100..700',
			},
		},
		display: 'block',
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.includes('-'),
		},
	},
	css: ['~/assets/css/globals.css'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/css/styles.scss" as *;',
				},
			},
		},
	},
	components: true,
	imports: {
		dirs: ['./services'],
	},
	devtools: { enabled: false },
});
