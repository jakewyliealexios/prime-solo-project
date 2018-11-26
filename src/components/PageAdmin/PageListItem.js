import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageListItem extends Component {

    // Displays details for a single project
    render() {
        return (
            <div className="page_row">
                <div className="page_row_contents">
                    <h3>{this.props.page.id}</h3>
                    <h4>{this.props.page.page_text}</h4>
                    <Link className="nav-link" to="/choicecreate">
                        Add Choice
                    </Link>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>


                </div>
            </div>
        );
    }
}

export default PageListItem;
