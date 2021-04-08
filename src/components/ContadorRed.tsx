import { useReducer } from "react";

const inicialState = {
    contador: 10,
}
type ActionType =
| { type: 'incrementar' }
| { type: 'decrementar' }
| { type: 'custom', payload: number  };


const contadorReducer = ( state: typeof inicialState, action: ActionType ) => {

    switch ( action.type ) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

            case 'decrementar':
                return {
                    ...state,
                    contador: state.contador - 1
                }

                case 'custom':
                    return {
                        ...state,
                        contador: action.payload
                    }
    

            default:
                return state;
    }

}

export const ContadorRed = () => {
    const [ contadorState, dispatch] = useReducer(contadorReducer, inicialState);

    return (
<>
<h2>Contador: { contadorState.contador }</h2>
<button className="btn btn-outline-primary"
onClick={ () => dispatch({ type: 'incrementar'}) }>
    +1
    </button>

    <button className="btn btn-outline-primary"
onClick={ () => dispatch({ type: 'decrementar'}) }>
    -1
    </button>

    <button className="btn btn-outline-danger"
onClick={ () => dispatch({ type: 'custom', payload: 100}) }>
    100
    </button>

</>
    )
}


