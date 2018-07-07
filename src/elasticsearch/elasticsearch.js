import Appbase from 'appbase-js';

//TODO : COLOCAR INFORMACOES NOS .ENVS
const appbaseRef = new Appbase({
	url: "https://scalr.api.appbase.io",
	app: "evolumebr-prd",
	credentials: "xYM80w0w7:bb421d67-1ea4-43de-b213-91c81bc24514"
});

export {appbaseRef as default};