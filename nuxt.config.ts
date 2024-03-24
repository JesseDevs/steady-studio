// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	pages: true,

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Steady Web Agency',

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
						'Join Echo, a place where thoughts are not just spoken, but reverberate across the digital landscape. Whether you’re sharing a personal journey, discussing important issues, or simply expressing yourself, this is your platform to make your voice heard.',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Echo: Where Thoughts Resound',
				},
				{
					hid: 'og-image',
					property: 'og:image',
					content: '/images/thumbnail.png',
				},
				{
					name: 'keywords',
					content:
						'Nuxt.js, Vue.js, Porfolio, web development, Javascript, front-end',
				},
				{
					name: 'twitter:card',
					content: 'icon.jpg',
				},
				{
					hid: 'og-type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://echo-waves.vercel.app/`,
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
