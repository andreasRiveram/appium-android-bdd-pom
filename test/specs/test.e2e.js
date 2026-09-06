import { expect } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

describe('Mi primer test en Appium - YouTube', () => {

    it('1er caso prueba: debería manejar el popup de permisos si aparece', async () => {
        const allowButton = await $('id=com.android.permissioncontroller:id/permission_allow_button');
        const isPopupVisible = await allowButton.isExisting();

        if (isPopupVisible) {
            await allowButton.click();
            console.log('✅ Popup de permisos manejado.');
        } else {
            console.log('ℹ️ No apareció popup de permisos, continuamos.');
        }
    });

     
    it('2do caso prueba: debería abrir YouTube y validar que carga', async () => {
        const textSearch = await $('~Search');
        await textSearch.waitForDisplayed({ timeout: 5000 });
        await textSearch.click();

        const searchInput = await $('id=com.google.android.youtube:id/search_edit_text');
        await searchInput.waitForDisplayed({ timeout: 5000 });
        await searchInput.setValue('allison algo que decir');
        await driver.pressKeyCode(66); // Presiona Enter para buscar

         // 3. Validar que la lista de resultados cargó
    const resultsList = await $('id=com.google.android.youtube:id/results');
    await resultsList.waitForDisplayed({ timeout: 8000 });
    await expect(resultsList).toBeDisplayed();
    console.log('✅ Resultados de búsqueda cargados correctamente.');

      // 📸 Captura de evidencia: resultados de búsqueda
    await allureReporter.addAttachment(
        'Resultados de búsqueda',
        await browser.takeScreenshot(),
        'image/png'
    );

    // 4. Tocar el primer resultado (usamos XPath para tomar el primer hijo visible)
    const firstResult = await $('android=new UiSelector().descriptionContains("Go to channel")');
    await firstResult.waitForDisplayed({ timeout: 5000 });
    await firstResult.click();

    // 5. Validar que el video se está reproduciendo
    const timeBar = await $('id=com.google.android.youtube:id/watch_while_time_bar_view');
    await timeBar.waitForDisplayed({ timeout: 8000 });
    await expect(timeBar).toBeDisplayed();

      // 📸 Captura de evidencia: video reproduciéndose
    await allureReporter.addAttachment(
        'Video reproduciéndose',
        await browser.takeScreenshot(),
        'image/png'
    );

    console.log('✅ Búsqueda y reproducción validadas con evidencia.');
    });

});