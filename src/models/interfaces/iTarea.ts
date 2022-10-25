export enum Nivel {
    "Informativa",
    "Urgente",
    "Bloqueante"

}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quien la usa
export interface iTarea {
    titulo: string,
    descripcion?: string,
    completado: boolean,
    urgencia?: Nivel,
    resumen: () => string
}