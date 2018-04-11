import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class StackList extends Component {
    render() {
        return (
            <div>
                {stacks.map(stack => {
                    return (
                        <Link
                            to='/stack'
                            key={stack.id}
                            onClick={() => this.props.setStack(stack)}>
                            <h4 >{stack.title}</h4>
                        </Link>
                    )
                })
                }
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack }, dispatch);

}

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(StackList);