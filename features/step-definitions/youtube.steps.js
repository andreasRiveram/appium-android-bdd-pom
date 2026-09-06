import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import busquedaVideo from '../../pages/busqueda.page.js';
import terminoBusqueda from '../../data/terminoBusqueda.json' assert { type: 'json' };

Given('que la aplicación de YouTube está abierta', async () => {
    // La app ya se abre automáticamente vía las capabilities del wdio.conf.js
});

When('busco el término {string}', async (termino) => {
        await busquedaVideo.clicyBusquedaDeVideo(termino);
});

Then('debería ver una lista de resultados de búsqueda', async () => {
    // Lógica para buscar el término en YouTube
});

When('busco todos los términos definidos en el archivo de datos', async () => {
    for (const caso of terminoBusqueda) {
        console.log(`🔍 Ejecutando caso: ${caso.descripcionCaso}`);
        await busquedaVideo.clicyBusquedaDeVideo(caso.termino);

        const resultados = await busquedaVideo.resultsList;
        await expect(resultados).toBeDisplayed();

        // Cierre COMPLETO antes de la siguiente iteración
        await driver.terminateApp('com.google.android.youtube');
        await driver.pause(1000);

        await driver.execute('mobile: shell', {
            command: 'monkey',
            args: ['-p', 'com.google.android.youtube', '-c', 'android.intent.category.LAUNCHER', '1']
        });
        await driver.pause(2000);
    }
});

Then('todos deberían mostrar resultados de búsqueda', async () => {
    console.log('✅ Todos los términos fueron validados exitosamente.');
});