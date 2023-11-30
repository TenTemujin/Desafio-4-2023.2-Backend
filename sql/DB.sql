CREATE TABLE Proprietario (
    CPF VARCHAR(11) PRIMARY KEY,
    CNH_Venc DATE,
    CNH_Cat VARCHAR(3),
    Endereco VARCHAR(100),
    Estado VARCHAR(2),
    Cidade VARCHAR(30),
    Bairro VARCHAR(30),
    Telefone VARCHAR(20),
    Sexo VARCHAR(10),
    DataNasc DATE,
    ID INT
) ENGINE = InnoDB;

CREATE TABLE Veiculo (
    Placa VARCHAR(7) PRIMARY KEY,
    Marca VARCHAR(50),
    Cor VARCHAR(15),
    Modelo VARCHAR(50),
    Categoria INT,
    AnoFab INT,
    FK_Proprietario_CPF VARCHAR(11),
    FOREIGN KEY (FK_Proprietario_CPF) REFERENCES Proprietario(CPF)
) ENGINE = InnoDB;

CREATE TABLE Multa (
    CC INT PRIMARY KEY,
    Data_Multa DATE,
    FK_Veiculo_Placa VARCHAR(7),
    FOREIGN KEY (FK_Veiculo_Placa) REFERENCES Veiculo(Placa),
    Valor DECIMAL(32, 2),
    Pontos INT,
    Tipo VARCHAR(128)
) ENGINE = InnoDB;
