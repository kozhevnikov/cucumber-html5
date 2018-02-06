Feature: Data Table

  Scenario: Data Table
    When noop args
      | foo | bar |
      | baz | qux |
    Then noop
