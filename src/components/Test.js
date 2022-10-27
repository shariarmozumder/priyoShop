import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <div className="container">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati similique ipsa sint perspiciatis aliquam, perferendis eum eius aperiam excepturi blanditiis consequuntur commodi nobis voluptatibus cumque officiis delectus! Voluptates recusandae magni consequatur expedita nihil voluptatum fuga inventore vero reprehenderit molestiae soluta quas error dolore vel mollitia laborum itaque, maxime ab numquam.</p>
                <button type="submit"></button>
                <h2>Todo</h2>
                <Link to="/term">Demo</Link>
            </div>
            
        </div>
    );
};

export default Test;