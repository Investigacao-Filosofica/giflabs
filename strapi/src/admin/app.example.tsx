// Este arquivo é um exemplo de como customizar o admin panel
// Renomeie para app.tsx para ativar

export default {
  config: {
    locales: ['pt-BR', 'en'],
    // Customize admin panel
    // translations: {
    //   en: {
    //     'app.components.LeftMenu.navbrand.title': 'GIFLABS Blog',
    //   },
    // },
  },
  bootstrap(app: any) {
    console.log(app);
  },
};
