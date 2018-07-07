import Appbase from 'appbase-js';

//TODO : COLOCAR INFORMACOES NOS .ENVS
const appbaseRef = new Appbase({
	url: process.env.ELK_URL,
	app: process.env.ELK_APP,
	credentials: process.env.ELK_CREDENTIALS
});

export {appbaseRef as default};