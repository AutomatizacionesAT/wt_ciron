const projectNavbar = [
	{
		title: 'Inicio',
		route: '/',
		icon: 'home',
	},
	{
		title: 'CheckList',
		route: '/checklist',
		icon: 'checklist',
		dropDown: [
			{
				title: 'Ejemplo A',
				route: '/checklist/ejemploA',
			},
			{
				title: 'Ejemplo B',
				route: '/checklist/ejemploB',
			},
		],
	},
	{
		title: 'Gestor de notas',
		route: '/gestorNotas',
		icon: 'note',
	},
	{
		title: 'Gestor de correos',
		route: '/gestorCorreos',
		icon: 'at',
	},
	{
		title: 'Glosario',
		route: '/checklist',
		icon: 'book',
	},
	{
		title: 'Aplicativos web',
		route: '/aplicativosWeb',
		icon: 'web',
	},
	{
		title: 'Consulta de documentación',
		route: '/consultaDocumentacion',
		icon: 'library',
	},
	{
		title: 'Preguntas Frecuentes',
		route: '/preguntasFrecuentes',
		icon: 'question',
	},
]

export default projectNavbar
