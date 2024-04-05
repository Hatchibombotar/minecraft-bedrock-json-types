type Result<T> = [T, null] | [null, any]

export async function catchAsync<T>(promise: Promise<T>): Promise<Result<T>> {
    try {
        const result = await promise
        return [result, null]
    } catch (err: any) {
        return [null, err]
    }
}

export function catchSync<T>(func: () => T): Result<T> {
    try {
        const result = func()
        return [result, null]
    } catch (err: any) {
        return [null, err]
    }
}
