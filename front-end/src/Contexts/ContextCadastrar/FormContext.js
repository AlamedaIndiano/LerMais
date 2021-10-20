import { createContext, useContext, useReducer } from "react";

//Context:
const Context = createContext(undefined);

//Reducer:
const DadosIniciais = {
    step: 1,
    name: '',
    email: '',
    senha: '',
};

export const Actions = {
    setStep: 'setStep',
    setName: 'setName',
    setEmail: 'setEmail',
    setSenha: 'setSenha',
};

const FormRedux = (state, action) => {
    switch(action.type){
        case Actions.setStep:
            return {...state, step: action.payload};
        case Actions.setName:
            return {...state, name: action.payload};
        case Actions.setEmail:
            return {...state, email: action.payload};
        case Actions.setSenha: 
            return {...state, senha: action.payload};
        default: 
            return state;
    };
};

//Provider
export const Provider = ({children}) => {

    //State = Os dados do Reducer e dispatch = Função para executar os dados
    const [state, dispatch] = useReducer(FormRedux, DadosIniciais);
    const value = {state, dispatch};

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

//Context Hook
export const useForm = () => {
    const context = useContext(Context);

    if(context === undefined) {
        throw new Error('useForm precisa ser utilizado dentro do Provider!!!');
    } return context;
};