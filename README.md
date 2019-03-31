# str-tools

## empty

    const empty = '';

## parse

Safely, parse a target to a string.

`Null` `Undefined` `NaN` will be parsed to the `empty`.

## trim

    string.replace(/^\s+|\s+$/g, '')

