export class Utils{

	private path: Array<string>;
	private urlCurrent: string;
	private channel: string;

	constructor()
	{
		this.getPath();
	}

	public getPath():string
    {
        this.path = window.location.pathname.split('/');
        this.channel = this.path[1].substr(0,3);
        this.urlCurrent = window.location.protocol + "//" + window.location.host + "/" + this.path[1] + "/" + "Configuration/ConfigurationService/";
        return this.urlCurrent;
    }

    public getChannel() : string {
    	return this.channel;
    }
}