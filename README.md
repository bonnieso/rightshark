# rightshark

A lightweight email validator.

Email address name supports letters, numbers, periods, dashes, and underscores. Anything else is considered invalid.

## Installation

  `npm install rightshark`

## Usage

    var emailValidation = require('rightshark');

    var isValidEmail = emailValidation(hello@bonnieso.com);


  Output should be `true`.


## Tests

  `npm test`

## Contributing

Use eslint to check your code. Add unit tests for any new or changed functionality.
