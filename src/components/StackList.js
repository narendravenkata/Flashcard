import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class StackList extends Component {
    componentDidMount() {
        if(this.props.stacks.length==0)
        this.props.loadStacks(stacks);
    }
    render() {
        return (
            <div>
                {this.props.stacks.map(stack => {
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

function mapStateToProps(state) {
    return { stacks: state.stacks }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack, loadStacks }, dispatch);

}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(StackList);