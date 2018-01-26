Feature: DataTable

  Scenario: DataTable
    When datatable
      | foo | bar |
      | baz | qux |
    Then noop
