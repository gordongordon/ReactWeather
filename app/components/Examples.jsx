var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few Examples location to try out;</p>
        <ol>
          <li>
            <Link to='/?location=Hong Kong'>Hong Kong</Link>
          </li>
          <li>
             <Link to='/?location=Rio'>
                 Rio
             </Link>
          </li>
        </ol>
    </div>
  );
};

module.exports = Examples;
