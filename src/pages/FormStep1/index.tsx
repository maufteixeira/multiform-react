/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from 'react-router-dom';
import * as  C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, KeyboardEvent } from 'react';


export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2');
    } else {
      alert("Preencha o campo nome")
    }
    
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter') {
      handleNextStep();
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo:</p>

        <hr />

        <label>
          Seu nome completo
          <input 
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
            onKeyUp={handleKeyUp}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}