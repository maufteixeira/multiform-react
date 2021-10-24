/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory, Link } from 'react-router-dom';
import * as  C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, KeyboardEvent } from 'react';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter') {
      handleNextStep();
    }
  }

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
      console.log(state);
      history.push('/step4');
    } else {
      alert("Preenchas os campos");
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }
  
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }



  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo com seus contatos:</p>

        <hr />

        <label>
          Qual o seu e-mail?
          <input 
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual o seu GitHub?
          <input 
            type="url"
            value={state.github}
            onChange={handleGithubChange}
            onKeyUp={handleKeyUp}
          />
        </label>

        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );
}