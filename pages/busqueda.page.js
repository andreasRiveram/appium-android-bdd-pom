import BasePage from './base.page.js';
import Constantes from '../const/constantes.js';


class BusquedaPage extends BasePage {


    

    async clicyBusquedaDeVideo(valor) {
      
            await this.esperarValorBusqueda(Constantes.idBotonLupa, Constantes.idBotonSearch, valor); // Aquí puedes pasar un valor vacío o un valor predeterminado
        
    }

    get resultsList() {
        return $(Constantes.idResultados);
    }

    async scrollHastaPrimerResultado() {
        return await this.scrollHastaEncontrar(Constantes.idPrimerResultado);
    }


}

export default new BusquedaPage();