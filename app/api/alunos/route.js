import db from "../../db/database";
import { NextResponse } from "next/server";

export async function GET(){
    const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome');
    return NextResponse.json(alunos);
}

export async function POST(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO alunos (nome, idade, serie, ra) VALUES (?,?,?,?)`);
        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra
        );
        return NextResponse.json({
            mensagem: 'Aluno salvo com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao salvar aluno: ', error)
    }
}

export async function PUT(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`UPDATE alunos (nome, idade, serie, ra) VALUES (?,?,?,?)`);
        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra
        );
        return NextResponse.json({
            mensagem: 'Aluno editado com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao editar aluno: ', error)
    }
}

export async function DELETE(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM alunos (id_aluno) VALUES (?)`);
        sql.run(
            dados.id_aluno
        );
        return NextResponse.json({
            mensagem: 'Aluno excluído com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao excluir aluno: ', error)
    }
}