INSERT INTO Proprietario (CPF, CNH_Venc, CNH_Cat, Endereco, Estado, Cidade, Bairro, Telefone, Sexo, DataNasc, ID)
VALUES
    ('12345678901', '2023-01-01', 'A', 'Rua A, 123', 'SP', 'Sao Paulo', 'Centro', '111-222-3333', 'M', '1990-01-01', 1),
    ('98765432109', '2024-02-02', 'B', 'Rua B, 456', 'RJ', 'Rio de Janeiro', 'Copacabana', '444-555-6666', 'F', '1985-03-15', 2),
    ('55555555555', '2025-05-05', 'AB', 'Rua C, 789', 'MG', 'Belo Horizonte', 'Savassi', '777-888-9999', 'M', '1988-12-31', 3);


INSERT INTO Veiculo (Placa, Marca, Cor, Modelo, Categoria, AnoFab, FK_Proprietario_CPF)
VALUES
    ('ABC1234', 'Chevrolet', 'Azul', 'Cruze', 1, 2019, '12345678901'),
    ('XYZ5678', 'Toyota', 'Preto', 'Corolla', 2, 2020, '98765432109'),
    ('DEF9876', 'Ford', 'Branco', 'Fiesta', 1, 2018, '55555555555');


INSERT INTO Multa (CC, Data_Multa, FK_Veiculo_Placa, Valor, Pontos, Tipo)
VALUES
    (1, '2021-05-10', 'ABC1234', 150.00, 3, 'Estacionamento Irregular'),
    (2, '2022-03-20', 'XYZ5678', 200.00, 4, 'Velocidade Acima da Máxima Permitida'),
    (3, '2022-06-15', 'DEF9876', 120.00, 2, 'Avançar o Sinal Vermelho');

