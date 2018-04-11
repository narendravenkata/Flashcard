import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addStack } from '../actions';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class StackForm extends Component {
    constructor() {
        super()
        this.state = ({
            title: '',
            cards: []
        })
    }

    addCard() {
        const { cards } = this.state;
        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({
            cards
        })
    }

    addStack() {
        this.props.addStack(this.state);
    }

    updateCardPart(e, index, part) {
        const { cards } = this.state;
        cards[index][part] = e.target.value;
        this.setState({ cards });

    }
    render() {
        // console.log("Stack Form")
        return (
            <div>
                <Link className='link-home' to='/'>
                    <h4>Home</h4></Link>
                <h4>
                    Create a New Stack
                </h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <ControlLabel>
                            Title:
                        </ControlLabel>
                        {' '}
                        <FormControl onChange={e => this.setState({ title: e.target.value })} />
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br />
                                    <FormGroup>
                                        <ControlLabel>Prompt:</ControlLabel>{' '}
                                        <FormControl
                                            onChange={e => this.updateCardPart(e, index, 'prompt')} />
                                        {' '}
                                        <ControlLabel>Answer:</ControlLabel>{' '}
                                        <FormControl onChange={e => this.updateCardPart(e, index, 'answer')} /></FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br />
                <Button onClick={() => this.addCard()}> Add Card</Button>
                {' '}

                <Button onClick={() => this.addStack()}>Save and Add Stack</Button>
            </div>
        )
    }
}




export default connect(null, { addStack })(StackForm);