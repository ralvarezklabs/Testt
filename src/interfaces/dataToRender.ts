export class DataToRender {
    auth_module: Record<any, string[]> = {};
    content_module: Record<any, string[]> = {};

    setAuth_module(key: string, arg: string[]) {
        this.auth_module[`${key}`] = arg;
    }

    setContent_module(key: string, arg: string[]) {
        this.content_module[`${key}`] = arg;
    }
}