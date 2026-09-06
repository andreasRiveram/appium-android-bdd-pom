import BasePage from './base.page.js';
import Constantes from '../const/constantes.js';


class PermisosPage extends BasePage {

    get allowButton() {
        return $(Constantes.idBotonAllow);
       // return $('id=com.android.permissioncontroller:id/permission_allow_button');
    }

    async isPopupVisible() {
        return await this.allowButton.isExisting();
    }

    async aceptarPermiso() {
        const popupVisible = await this.isPopupVisible();
        if (popupVisible) {
            await this.esperarYClic(Constantes.idBotonAllow);
        }
    }
}

export default new PermisosPage();