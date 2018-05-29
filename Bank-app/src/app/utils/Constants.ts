export class Constants{

	//Channels
	public static APP_PERSONAL: string = "APP_PERSONAL";
	public static OLB_PERSONAL: string = "OLB_PERSONAL";

	//Complemento url del servicio
	public static NORMAL_CONFIGURATION: string = "getNormalConfiguration";
	public static CONTINGENCY_CONFIGURATION: string = "getContingencyChannel";
	public static CONTINGENCY_CLUSTER: string = "setClusterContingency";
	public static AUTHENTICATION: string = "authentication";
	public static LOGOUT: string = "logOut";

	//Mensajes Login
	public static SESSION_EXPIRED: string = " =( Ha caducado la sesión";
	public static INVALID_DATA: string = "En este momento no es posible ingresar";

	//Otros
	public static MSG_ERROR_LOADING_SERVICE: string = "¡Ha ocurrido un error inesperado! Por favor comuniquese con el administrador";
	public static MSG_EMPTY_CLUSTERS: string = "No hay clusters en el canal ";
	public static MSG_ERROR_CONTINGENCY: string = "Ha ocurrido un error en la contingencia";
}