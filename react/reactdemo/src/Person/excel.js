import React, { Component } from 'react';


const excel = {

    render() {

        return (
            <div>
                <p>asd</p>
                <div> {aaa}</div>
            </div>
        )
    }
}



function aaa() {
    console.log(this.props)
    React.DOM.table(null,
        React.DOM.thead(null,
            React.DOM.tr(null,
                headers.map(function (title, idx) {
                    return React.DOM.th(null, title);
                    // return React.DOM.th({key: idx}, title);
                })
            )
        )
    )
}

var headers = [
    "Book", "Author", "Language", "Published", "Sales"
];

var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
];
export default excel;