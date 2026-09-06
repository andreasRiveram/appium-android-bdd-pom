Feature: Manejo del popup de permisos

  @smoke
  Scenario Outline: Manejar el popup de permisos si aparece
    Given que abro la aplicación de YouTube
    When doy clic en el botón "<permiso>"
    Then no debería ver el popup de permisos en pantalla

    Examples:
      | permiso |
      | allow   |