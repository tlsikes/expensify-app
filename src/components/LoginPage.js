import React from 'react';
import LoginButton from './LoginButton';

export default () => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify!</h1>
            <p>It's time to get your expenses under control.</p>
            <LoginButton />
        </div>
    </div>
);
