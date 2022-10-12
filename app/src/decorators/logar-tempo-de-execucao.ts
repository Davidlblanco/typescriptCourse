export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value
        descriptor.value = function (...args: Array<any>) {
            let Divisor = 1
            let unidade = 'milisegundos'
            if (emSegundos) {
                Divisor = 1000
                unidade = 'segundos'
            }
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            console.log(`${propertyKey},tempo de execucao: ${(t2 - t1) / Divisor} ${unidade}`)
            retorno
        }
        return descriptor
    }
}