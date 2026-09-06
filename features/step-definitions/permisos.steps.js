import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import permisosPage from '../../pages/permisos.page.js';

Given('que abro la aplicación de YouTube', async () => {
    // La app ya se abre automáticamente vía las capabilities del wdio.conf.js
});

When('doy clic en el botón {string}', async (permiso) => {
    if (permiso === 'allow') {
        await permisosPage.aceptarPermiso();
    }
});

Then('no debería ver el popup de permisos en pantalla', async () => {
    const sigueVisible = await permisosPage.isPopupVisible();
    await expect(sigueVisible).toBe(false);
});