import db from "../../db/database";
import { NextResponse } from "next/server";

export async function GET(){
    const notas = db.prepare(`SELECT alunos.nome, alunos.ra, notas.t1, notas.t2, notas.t3 
        FROM notas INNER JOIN alunos ON notas.aluno_id = alunos.id_aluno ORDER BY alunos.nome`);
    return NextResponse.json(notas);
}

export async function POST(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO notas (aluno_id, t1, t2, t3) VALUES (?,?,?,?)`);
        sql.run(
            dados.aluno_id,
            dados.t1,
            dados.t2,
            dados.t3
        );
        return NextResponse.json({
            mensagem: 'Notas lançadas com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao salvar notas: ', error)
    }
}

export async function PUT(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`UPDATE notas (t1, t2, t3) VALUES (?,?,?)`);
        sql.run(
            dados.t1,
            dados.t2,
            dados.t3
        );
        return NextResponse.json({
            mensagem: 'Nota editada com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao editar nota: ', error)
    }
}

export async function DELETE(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM notas (id_notas) VALUES (?)`);
        sql.run(
            dados.id_notas
        );
        return NextResponse.json({
            mensagem: 'Nota excluída com sucesso!'
        });
    } catch(error) {
        console.log('Erro ao excluir nota: ', error)
    }
}