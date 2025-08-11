function calcularMediasEscola() {
    const turmas = 5;
    let totalAlunosMedia7 = [];
    let somaMediasTurmas = 0;
    let totalAlunosEscola = 0;

    for (let t = 1; t <= turmas; t++) {
        let n = parseInt(prompt(`Quantos alunos na turma ${t}?`));
        if (isNaN(n) || n <= 0) {
            alert("Número de alunos inválido ou operação cancelada. Encerrando.");
            return;
        }
        let alunosMedia7 = 0;
        let somaMediasTurma = 0;

        for (let a = 1; a <= n; a++) {
            let mediaInput = prompt(`Média do aluno ${a} da turma ${t}: (Cancelar para interromper)`);
            if (mediaInput === null) {
                alert("Operação cancelada durante entrada das médias.");
                return;
            }
            let media = parseFloat(mediaInput);
            if (isNaN(media)) {
                alert("Valor inválido. Tente novamente.");
                a--; // repete o aluno atual
                continue;
            }
            somaMediasTurma += media;
            if (media >= 7) alunosMedia7++;
        }

        totalAlunosMedia7.push(alunosMedia7);
        somaMediasTurmas += somaMediasTurma;
        totalAlunosEscola += n;
        console.log(`Turma ${t}: ${alunosMedia7} alunos com média >= 7`);
    }

    let mediaGeral = somaMediasTurmas / totalAlunosEscola;
    console.log(`Média geral da escola: ${mediaGeral.toFixed(2)}`);
}
