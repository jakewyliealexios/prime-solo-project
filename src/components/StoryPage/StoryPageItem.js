import React, { Component } from 'react';

class StoryPageItem extends Component {


    // Displays details for a single project
    render() {

        let choices = (this.props.choicesState).filter(function(item){
            console.log('item.choices_id, choice_text', item.choices_id, item.choice_text );
            console.log('item.choices_id', item.page_id === 1);
            
            return item.page_id === 1;  
        });

        console.log('choices', choices);
        
        return (
            <div>
                <div>
                    {/* <h3>{this.props.page.id}</h3> */}
                    <h3>Story Page Choice Item A (choices_id- choice_text):</h3>
                    <pre>{JSON.stringify(this.props.choicesState[0].choices_id)}
                     - {JSON.stringify(this.props.choicesState[0].choice_text)}</pre>
                    <h3>Story Page Choice Item A B C:</h3>
                    <pre>{JSON.stringify(choices[0])}</pre>
                    <pre>{JSON.stringify(choices[1])}</pre>
                    <pre>{JSON.stringify(choices[2])}</pre>

                </div>
            </div>
        );
    }
}

export default StoryPageItem;
