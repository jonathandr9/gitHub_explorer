import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () =>{

    return (
        <>
            <img src={logoImg} alt = "GitHub Explorer"/>
            <Title>Explore repositórios no Git Hub</Title>

            <Form >
                <input placeholder = "Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/27286681?s=460&u=38ad292ee57a401ec11033cb9529d43c706d4b32&v=4"
                        alt="Jonathan Rodrigues"
                    />

                    <div>
                        <strong>jonathandr9/AppWeather</strong>
                        <p>React Native application, for real-time climate research.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/27286681?s=460&u=38ad292ee57a401ec11033cb9529d43c706d4b32&v=4"
                        alt="Jonathan Rodrigues"
                    />

                    <div>
                        <strong>jonathandr9/AppWeather</strong>
                        <p>React Native application, for real-time climate research.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/27286681?s=460&u=38ad292ee57a401ec11033cb9529d43c706d4b32&v=4"
                        alt="Jonathan Rodrigues"
                    />

                    <div>
                        <strong>jonathandr9/AppWeather</strong>
                        <p>React Native application, for real-time climate research.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;
