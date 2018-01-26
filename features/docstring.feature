Feature: Docstring

  Scenario: Docstring
    When docstring
      """
      Lorem ipsum
      dolor sit amet
      """
    Then noop
