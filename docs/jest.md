como o react-script utiliza o jest por debaixo dos panos e outros modulos adicionais, resolvi deixar a estrutura mais enxuta, começando pela nao-utilizacao do react-scripts e setando tudo manualmente, deu mais trabalho, mas consegui isolar comportamentos.

para o jest, criei um arquivo de configuracoes que por usa vez aponta para uma pasta que eu mesmo criei, nela eu tenho toda a configuracao e importacoes necessarias pra gente trabalhar com os testes com jest e testing-library.
