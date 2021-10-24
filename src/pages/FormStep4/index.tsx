/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory, Link } from 'react-router-dom';
import * as  C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';

type Props= {
  nivel: string;
}

export const FormStep4 = ({ nivel }: Props) => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Confirmação</p>
        <h1>Obrigado {state.name}, seu cadastro foi realizado com sucesso!</h1>
        <p>Aguarde e entraremos em contato.</p>

        <hr />

        <table>
          <tr>
            <td id="title">Nome:</td><td className="description"> {state.name}</td>
          </tr>
          <tr>
            <td id="title">Experiência:</td><td className="description"> {state.level === 0 ? nivel='Sou iniciante' : nivel='Sou programador'}</td>
          </tr>
          <tr>
            <td id="title">E-mail:</td><td className="description"> {state.email}</td>
          </tr>
          <tr>
            <td id="title">Seu GitHub:</td><td className="description"> {state.github}</td>
          </tr>
        </table>

        <Link to="/step3" className="backButton">Voltar</Link>
      </C.Container>
    </Theme>
  );
}