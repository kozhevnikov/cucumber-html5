Feature: Doc String

  Scenario: Doc String
    When noop args
      """
      Lorem ipsum
      dolor sit amet
      """
    Then noop
