export default class BasePage {
    async esperarYClic(selector, timeout = 5000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    async esperarValorBusqueda(selector,selectorBusqueda, valor, timeout = 5000) {
        const lupaBusqueda = await $(selector);
        await lupaBusqueda.waitForDisplayed({ timeout });
        await lupaBusqueda.click();

        const searchInput = await $(selectorBusqueda);
        await searchInput.waitForDisplayed({ timeout });
        await searchInput.setValue(valor);
        await driver.pressKeyCode(66); // Presiona Enter para buscar
    }

    async scrollHastaEncontrar(selector, maxIntentos = 5) {
        let elemento = await $(selector);
        let intentos = 0;

        while (!(await elemento.isDisplayed().catch(() => false)) && intentos < maxIntentos) {
            await driver.execute('mobile: scrollGesture', {
                left: 100, top: 300, width: 800, height: 1200,
                direction: 'down',
                percent: 0.75
            });

            elemento = await $(selector);
            intentos++;
        }

        return elemento;
    }

    async swipeHorizontal(direccion = 'left') {
    const { width, height } = await driver.getWindowSize();

    const startX = direccion === 'left' ? width * 0.8 : width * 0.2;
    const endX = direccion === 'left' ? width * 0.2 : width * 0.8;
    const y = height * 0.5;

    await driver.execute('mobile: swipeGesture', {
        left: 0, top: y - 50, width: width, height: 100,
        direction: direccion,
        percent: 0.75
    });
}
async longPress(selector, duracionMs = 1500) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 5000 });

    await driver.execute('mobile: longClickGesture', {
        elementId: element.elementId,
        duration: duracionMs
    });
}
}