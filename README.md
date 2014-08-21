euler-sandbox
=============

A sandbox page for Project Euler solutions in Javascript.

##Note

As of now, this will only run on Mac.  The default `start` script requires Chrome as the default browser, but the script can be altered to run any browser.

###Usage

Add new solutions as JS files in the `scripts` directory.  The filename must start with the Project Euler ID (i.e. `01_multiples_of_3_and_5.js`). The solution file must contain both the code which returns the result, and a jQuery function which listens to a button contained within a problem's `div`, which has the id of the Project Euler ID.  The button, when clicked, should evaluate the relevant code and populate the problem's textarea with the result.  See `01_multiples_of_3_and_5.js` for an example.

To run on a Mac, `chmod u+x start` and run `./start`.  The script first opens Chrome with the option to allow `file://` searches, which is necessary to dynamically load scripts, and then the index page.

The next step is transitioning this to run on a (local) Node server.

###Included JS Libraries
[jQuery](http://jquery.com/)
[Underscore](http://underscorejs.org/)
[Underscore.string](http://epeli.github.io/underscore.string/)
[Handlebars](http://handlebarsjs.com/)
