export class Vehiculo {
    public fechaEntrada: Date;
    public tipo: string;

    constructor(tipo: string) {
        this.fechaEntrada = new Date();
        this.tipo = tipo;
    }
}