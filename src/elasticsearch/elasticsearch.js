import Appbase from 'appbase-js';

//TODO : COLOCAR INFORMACOES NOS .ENVS
const appbaseRef = new Appbase({
	url: "https://scalr.api.appbase.io",
	app: "evolumebr-prd",
	credentials: "HYmpa2P0V:239b7718-4872-48af-b63d-9fba2b64f864"
});


export {appbaseRef as default};