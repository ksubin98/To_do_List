import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault(); // 브라우저 기본기능을 취소 
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };

    render() {
        console.log('habitAddForm')
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;