import React from 'react';
import { Promenu } from './protfoliomenu';
import { Proabout } from './protfolioabout/protfolioabout';
import { Procerfi } from './protfoliocerfication/protfoliocerfi';
import { Profront } from './protfoliohome/protfoliofront';
import { Portedu } from './protfolioEducation/portfolioedu'
import { Porcentect } from './proconect/procontent';
import { Porwork } from './portfoliomywork/portfoliowork';
export function Overall(){


    return(
        <>
        <Promenu/>
        <Profront/>
        <Proabout/>
        <Procerfi/>
        <Portedu/>
        <Porwork/>
        <Porcentect/>
       
        </>
    );
}