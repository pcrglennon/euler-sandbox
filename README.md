euler-sandbox
=============

A Node/Express sandbox app for Project Euler solutions in Javascript.

###Usage

Add new solutions as JS files in the `public/javascripts/euler` directory.  The filename must start with the Project Euler ID (i.e. `01_multiples_of_3_and_5.js`). The solution file must contain both the code which returns the result, and a jQuery function which listens to a button contained within a problem's `div`, which has the id of the Project Euler ID.  The button, when clicked, should evaluate the relevant code and populate the problem's textarea with the result.  See `01_multiples_of_3_and_5.js` for an example.  jQuery, Underscore, Underscore.string can be used in each solution.

To run: `npm start` and point your browser to `localhost:3000`.

###Included JS Libraries
[jQuery](http://jquery.com/)
[Underscore](http://underscorejs.org/)
[Underscore.string](http://epeli.github.io/underscore.string/)
[Handlebars](http://handlebarsjs.com/)
