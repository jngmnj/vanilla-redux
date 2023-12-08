import { createStore, applyMiddleware } from "redux";



// DOM 선택
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 type
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = defference => ({ type: INCREASE, defference});
const decrease = () => ({ type: DECREASE });

// 초깃값
const initialState = {
    toggle: false, 
    counter: 0
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH: 
            return {
                ...state, 
                toggle: !state.toggle
            };
        case INCREASE: 
            return {
                ...state,
                counter: state.counter + action.defference
            };
        case DECREASE: 
            return {
                ...state,
                counter: state.counter - 1
            };
        default: 
            return state;
    }
}

// store 생성
const store = createStore(reducer);


// render
const render = () => {
    const state = store.getState();
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();

// subscribe
store.subscribe(render);

// action 발생(dispatch)
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}