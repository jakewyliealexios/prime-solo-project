import React, { Component } from 'react';

class StoryPageItem extends Component {


    // Displays details for a single project
    render() {

        let pageChoices = (this.props.choicesState).filter(function(item){
            console.log('item.choices_id, choice_text', item.choices_id, item.choice_text );
            console.log('item.choices_id', item.page_id === 1);
            
            return item.page_id === 1;  
        });

        console.log('pageChoices', pageChoices);
        
        return (
            <div>
                <div>
                    {/* <h3>{this.props.page.id}</h3> */}

                    {/* <h3>this.props.choicesState[0].choices_id and .choice_text</h3>
                    <pre>{JSON.stringify(this.props.choicesState[0].choices_id)}
                     - {JSON.stringify(this.props.choicesState[0].choice_text)}</pre> */}

                    {/* <h3>Story Page Choice Item B (choices_id- choice_text):</h3>
                    <pre>{JSON.stringify(this.props.choicesState[1].choices_id)}
                     - {JSON.stringify(this.props.choicesState[1].choice_text)}</pre> */}

                    <h3>Story Page Choice Item A B C:</h3>
                    {/* <pre>{JSON.stringify(pageChoices[0].choice_text)}</pre>
                    <pre>{JSON.stringify(pageChoices[1])}</pre>
                    <pre>{JSON.stringify(pageChoices[2])}</pre> */}
                    {pageChoices.map((page, i) => {
                        return (<pre>{JSON.stringify(page.choice_text)}</pre>);
                    })}

                </div>
            </div>
        );
    }
}

export default StoryPageItem;
