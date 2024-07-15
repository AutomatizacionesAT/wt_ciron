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
				title: 'Despacho de ticket',
				route: '/checklist/despachoTicket',
			},
			{
				title: 'Tipo de facturación',
				route: '/checklist/tipoFacturacion',
			},
		],
	},
	{
		title: 'Gestor de notas',
		route: '/gestorNotas',
		icon: 'note',
		dropDown: [
			{
				title: 'Apertura de tickets',
				route: '/gestorNotas/aperturaTickets',
			},
			{
				title: 'Escalamiento al CED',
				route: '/gestorNotas/escalamientoCED',
			},
		],
	},
	{
		title: 'Gestor de correos',
		route: '/gestorCorreos',
		icon: 'at',
	},
	{
		title: 'Glosario',
		route: '/glosario',
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
]

export default projectNavbar
