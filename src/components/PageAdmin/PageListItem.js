import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class PageListItem extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_CHOICES'});
    }

    // Displays details for a single project
    render() {
        return (
            <div className="page_row">
                <div className="page_row_contents">
                    <h4>{this.props.page.page_text}</h4>
                    {this.props.choicesState.map((choice, i) => {
                        return (
                            <div>
                                <div>
                                    <h4>{choice.choice_text}</h4>
                                    <button
                                        class="editButton"
                                        value={choice.id}>
                                        EDIT
                                    </button>
                                    {/* <button 
                                        class="button" 
                                        name="next_page_id" 
                                        value={page.next_page_id} 
                                        onClick={this.makeChoice}>
                                    {page.choice_text}</button> */}
                                </div>                                
                            </div>);
                    })}

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

export default connect()(PageListItem);
