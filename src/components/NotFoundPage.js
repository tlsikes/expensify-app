import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div>You are lost!</div>
        <div><Link to="/">Go home...</Link></div>
    </div>
)

export default NotFoundPage;