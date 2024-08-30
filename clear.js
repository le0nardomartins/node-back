// Endpoint para limpar todos os dados da tabela
app.delete('/limpar-dados', (req, res) => {
    // Query para deletar todos os dados da tabela
    const query = `DELETE FROM dados_sensores`;

    // Executando a query no banco de dados
    db.run(query, [], (err) => {
        if (err) {
            console.error('Erro ao limpar dados do banco de dados:', err.message);
            res.status(500).send('Erro ao limpar os dados.');
        } else {
            console.log('Dados da tabela limpos com sucesso.');
            res.send('Dados da tabela foram limpos com sucesso.');
        }
    });
});