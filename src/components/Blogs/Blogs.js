import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div>
                <h4>Q1. What is Context API?</h4>
                <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h4>Q2. What is Semantic Tag?</h4>
                <p>Answer: Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as &lt;header&gt; , &lt;footer&gt; and &lt;article&gt; are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
            <div>
                <h4>Q3. Difference among Inline, Block, Inline Block elements?</h4>
                <p>Answer: <strong>Inline Elements</strong>- Inline elements display in a line. They do not force the text after them to a new line. An anchor (or link) is an example of an inline element. You can put several links in a row, and they will display in a line.
                    <br />  <br />
                    <strong>Block Elements</strong>- A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
                    <br />  <br />
                    <strong>Inline Block Elements</strong>- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not. Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.
                </p>
            </div>
        </div>
    );
};

export default Blogs;   