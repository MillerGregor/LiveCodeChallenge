import React from 'react';
import { Article } from './Article';
import { Placeholder } from '../messages';

export const Content = () => {
    return (
        <div className="Container-content">
            <Article />
            <Placeholder />
        </div>
    );
}