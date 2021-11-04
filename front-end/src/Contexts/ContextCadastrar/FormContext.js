import { createContext, useContext, useReducer } from "react";

//Context:
const Context = createContext(undefined);

//Reducer:
const DadosIniciais = {
    step: 1,
    name: '',
    email: '',
    senha: '',
    admin: false,
    refresh: false,
    modal: false,
    modelON: false
};

export const Actions = {
    setStep: 'setStep',
    setName: 'setName',
    setEmail: 'setEmail',
    setSenha: 'setSenha',
    setAdmin: 'setAdmin',
    setRefresh: 'setRefresh',
    setModal: 'setModal',
    setModelON: 'setModelON'
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
        case Actions.setAdmin: 
            return {...state, admin: action.payload};
        case Actions.setRefresh: 
            return {...state, refresh: action.payload};
        case Actions.setModal: 
            return {...state, modal: action.payload};
        case Actions.setModelON: 
            return {...state, modelON: action.payload};
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