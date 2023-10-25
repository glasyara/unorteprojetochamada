export type AlunoDTO = {
    ra: number
    nome: string
    idade: number
    semestre: number
    id_curso: number
}

export type CursoDTO = {
    id: number
    nome: string
}

export type RegistroDTO = {
    id_aluno: number
    data: Date
}

export type ChamadaDTO = {
    id: number
    data: Date
    registros: RegistroDTO[]
}