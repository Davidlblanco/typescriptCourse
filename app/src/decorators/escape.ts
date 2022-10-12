export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: Array<any>) {
        let retorno = metodoOriginal.apply(this, args)
        if (typeof retorno == 'string') {
            console.log(`@escape em execução na classe ${this.constructor.name} para o metodo ${propertyKey}`)
            retorno = retorno.replace(/<script>[s/S]*?<\/script > /g, '')
        }
        return retorno
    }
    return descriptor
}