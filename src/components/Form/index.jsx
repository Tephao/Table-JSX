import FormField from '../FormField';
import './index.css'
import {useState} from 'react';

function Form({add}){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');

    function adicionar(){
        add({
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        })
        setNome('')
        setSobrenome('')
        setIdade(0)
    }
return (
    <div className='containerForm'>
        <FormField label="Nome" change={setNome} value={nome}/>
        <FormField label="Sobrenome" change={setSobrenome} value={sobrenome}/>
        <FormField label="Idade" change={setIdade} type='number' value={idade}/>
        <button style={{
            backgroundColor: 'gray'
        }} onClick={adicionar}>
            ADICIONAR
        </button>
    </div>
)
}

export default Form;