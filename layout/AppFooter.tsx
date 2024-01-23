/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src="/images/Logo-utez.png" alt="Logo" height="50" className="mr-2" />
            X
            <span className="font-medium ml-2">CDS</span>
        </div>
    );
};

export default AppFooter;
