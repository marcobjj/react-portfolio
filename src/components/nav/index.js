import React, { useEffect } from 'react';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;


    useEffect(() => {
        document.title = (currentCategory);
    }, [currentCategory]);


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                
        </a>
            </h2>
            <nav>
                <ul className="flex-row">
                 
             
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory === category && `navActive`
                                }`}
                            key={category}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                               
                            }}
                            >
                          {category}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;