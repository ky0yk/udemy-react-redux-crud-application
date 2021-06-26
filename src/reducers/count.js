import { INCREMENT, DECREMENT } from '../actions'

const initialSate = { value: 0 }

export default (state = initialSate, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}