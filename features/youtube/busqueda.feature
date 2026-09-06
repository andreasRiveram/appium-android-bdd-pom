Feature: Búsqueda de videos en YouTube

  @smoke @regression
  Scenario Outline: Buscar distintos términos "<termino_busqueda>" y validar resultados
    Given que la aplicación de YouTube está abierta
    When busco el término "<termino_busqueda>"
    Then debería ver una lista de resultados de búsqueda

    Examples:
      | termino_busqueda            |
      | fall out boy thnks fr th mmrs     |
      | my chemical romance helena      |
      | juanes la camisa negra   |
  

   @smoke @data-driven
  Scenario: Buscar múltiples términos desde archivo de datos
    Given que la aplicación de YouTube está abierta
    When busco todos los términos definidos en el archivo de datos
    Then todos deberían mostrar resultados de búsqueda