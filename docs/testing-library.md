A React Testing Library é uma biblioteca de testes do DOM, o que significa que, em vez de lidar com instâncias de componentes do React renderizados, ele lida com elementos do DOM e como eles se comportam na frente de usuários reais.

`it or test`: descreve o teste em si. Toma como parâmetros o nome do teste e uma função que mantém os testes.

`expect`: a condição que o teste precisa passar. Ele comparará o parâmetro recebido com um correspondente.

a `matcher`: uma função aplicada à condição esperada.

`render`: o método usado para renderizar um determinado componente.

yarn add webpack webpack-cli webpack-dev-server @babel/cli
@babel/core @babel/preset-env @babel/preset-react babel-jest
babel-loader jest html-webpack-plugin @testing-library/react @testing-library/jest-dom -D
