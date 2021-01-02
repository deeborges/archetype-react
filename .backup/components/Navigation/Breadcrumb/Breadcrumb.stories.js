import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
};

const items = [
  { to: '/fichadoproduto/dadosnutricionais', label: 'Dados Nutricionais' },
  { to: '/fichadoproduto/dadosderegistro', label: 'Dados de Registro' },
  { to: '/fichadoproduto/especificacoes', label: 'Especificações' },
  { to: '/fichadoproduto/midias', label: 'Mídias' }
];

export const usage = () => {
  const history = useHistory();

  return (
    <Breadcrumb>
      {items.map(({ to, label }) => (
        <Link key={to} to={to} onClick={() => history.goBack(to)}>
          {label}
        </Link>
      ))}
    </Breadcrumb>
  );
};
