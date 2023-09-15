import logo from './logo.png';
import './App.css';


import React,{useState} from 'react';

// import './_i18n/i18n.js';
import './_i18n/i18n';
// npm install react-native-web
import {View, Text,Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();
    const [currentLanguage,setLanguage] = useState('pt');
    const changeLanguage = value => {
        i18n
        .changeLanguage(value)
        .then(() => setLanguage(value))
        .catch(err => console.log(err));
    };


    return (
        <div className="App">

            <header className="App-header">
                <table></table>
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    <h3>Ricardo @ 2023</h3>
                    {/* Edit <code>src/App.js</code> and save to reload.  */}
                </p>

                {/* <Pressable
                    onPress={() => changeLanguage('pt')}
                    style={{
                        backgroundColor:
                        currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
                        padding: 1,
                    }}>
                    <Text>Selecione Português</Text>
                </Pressable> */}

                <Pressable
                    onPress={() => changeLanguage('pt')}
                    >

                    <Text style={{color: '#FFFFFF'}}>
                        Selecione Português
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => changeLanguage('en')}
                    >

                    <Text style={{color: '#FFFFFF'}}>
                        Select English
                    </Text>
                </Pressable>

                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/ricdefreitas/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <text style={{fontWeight: 'normal'}}>
                        {t('this is my')}{' LinkedIn'}
                    </text>
                </a>

                <a
                    className="App-link"
                    href="https://github.com/freric-51/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <text style={{fontWeight: 'regular', fontSize: 24, color: '#000080'}}> */}
                    <text style={{fontWeight: 'bold'}}>
                        {t('this is my')}{' GitHub'}
                    </text>
                </a>


            </header>

        </div>
    );
}

export default App;
