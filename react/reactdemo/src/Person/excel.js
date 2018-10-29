import React from 'react';




class excel extends React.Component {


    _sort = (e) => {
        var column = e.target.cellIndex;
        var data = this.state.data.slice();
        var descending = this.state.sortby === column && !this.state.descending;
        data.sort = (a, b) => {
            return descending
                ? (a[column] < b[column] ? 1 : -1)
                : (a[column] > b[column] ? 1 : -1);
        };
        this.setState({
            data: data,
            sortby: column,
            descending: descending,
        });
    }
    _showEditor = (e) => {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex,
            }
        })
    }
    _save = (e) => {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.silce();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null,
            data: data,
        })
    }
    _toggleSearch = () => {
        if (this.state.search) {
            this.setState({
                data: this._preSearchData,
                search: false,
            });
            this._preSearchData = null;
        } else {
            this._preSearchData = this.state.data;
            this.setState({
                search: true,
            });
        }
    }

    _renderSearch = () => {
        if (!this.state.search) {
            return null;
        }
        return (
            <tr onChange={this._search}>
                {(this.headers || []).map((_ignore, idx) => {
                    return <td key={idx}><input type="text" data-idx={idx} /></td>;
                })}
            </tr>
        )
    }
    state = {
        sortby: null,
        descending: false,
        data: [
            ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
            ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
            ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
            ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
            ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million"],
            ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
            ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
        ],
        headers: ["Book", "Author", "Language", "Published", "Sales"],
        search: true,
    }

    _renderTable = () => {
        return (
            <table>
                <thead onClick={this._sort}>
                    <tr>{(this.state.headers || []).map((title, idx) => {
                        if (this.state.sortby === idx) {
                            title += this.state.descending ? '\u2191' : '\u2193';
                        }
                        return <th key={idx}>{title}</th>;
                    }, this)}
                    </tr></thead>
                <tbody onDoubleClick={this._showEditor}>
                    {this._renderSearch()}
                    {(this.state.data||[]).map((row, rowidx) => {
                        return (
                            <tr key={rowidx}>{
                                (row||[]).map((cell, idx) => {
                                    var content = cell;
                                    var edit = this.state.edit;
                                    if (edit && edit.row === rowidx && edit.cell === idx) {
                                        content = (
                                            <form onSubmit={this._save}>
                                                <input type="text" defaultValue={cell} />
                                            </form>
                                        );
                                    }
                                    return <td key={idx} data-row={rowidx}>{content}</td>;
                                }, this)}
                            </tr>
                        )
                    }, this)}
                    {/* {(this.state.data || []).map((row, idx) => {
                        return (
                            <tr key={idx}>{row.map((cell, idx) => {
                                return <td key={idx}>{cell}</td>;
                            })}</tr>
                        )
                    })} */}
                </tbody>
            </table>
        )
    }

    _renderToolbar = () => {
        return (
            <div className="toolbar">
                <button onClick={this._toggleSearch}>Search</button>
                <a onClick={this._download.bind(this, 'json')}
                    href="data.json">Export JSON</a>
                <a onClick={this._download.bind(this, 'csv')}
                    href="data.csv">Export CSV</a>
            </div>
        );
    }
    _preSearchData: null;

    _search = (e) => {
        var needle = e.target.value.toLowerCase();
        if (!needle) {
            this.state({ data: this._preSearchData });
            return
        }
        var idx = e.target.dataset.idx;
        var searchdata = this._preSearchData.filter((row) => {
            return row[idx].toString().toLowerCase().indexOf(needle) > -1;
        });
        this.setState({ data: searchdata });
    }

    _download = (format, ev) => {
        var contents = format === 'json'
            ? JSON.stringify(this.state.data)
            : this.state.data.reduce((result, row) => {
                return result
                    + row.reduce((rowresult, cell, idx) => {
                        return rowresult
                            + '"'
                            + cell.replace(/"/g, '""')
                            + '"'
                            + (idx < row.length - 1 ? ',' : '');
                    }, '')
                    + "\n";
            }, '');

        var URL = window.URL || window.webkitURL;
        var blob = new Blob([contents], { type: 'text/' + format });
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = 'data.' + format;
    }

    render() {

        return (
            <div>
                <div>hello</div> 

                {this._renderToolbar()}
                {this._renderTable()}
                <div>world</div>
            </div>
        );
    }

}

export default excel;
