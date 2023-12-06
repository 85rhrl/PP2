# Rock, Paper, Scissors! - Testing
Tests were done on smartphones running Android and iOS, on a 15" screen laptop using Chrome, Firefox and Safari as well as on a 32" monitor.

The display of the different elements was checked on different devices and adjustments were carried out in HTML and CSS.
One example was the presentation of the 3 possible options (Rock, Paper and Scissors) on devices with a small screen such as the iPhone 5; the screen is not wide enough to properly present the 3 options on a single line. Flexbox was chosen as a possible solution and now the 3 options can be presented on different lines as seen on the following image:

![Choices on smaller screens](tests\images\testing-choices.png)

### Validator Testing

- __HTML__
    - The HTML code was tested using the W3C Markup Validator and no errors were found. One warning was found for an empty heading. This heading with id "result" is later filled with the JavaScript code.

        - Index

            ![index](tests\images\testing-html.png)

- __CSS__
    - The CSS code was tested using the CSS Validation Service and no errors were found.

        - Style
            ![style](tests\images\testing-css.png)