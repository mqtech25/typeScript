export class APIModule {
    constructor(id, name, powerstate, biography, appearance, work, connection, image) {
        this.id = id;
        this.name = name;
        this.powerstats = powerstate;
        this.biography = biography;
        this.appearance = appearance;
        this.work = work;
        this.connections = connection;
        this.image = image;
    }
}
export const sendObjectToClass = (objArr) => {
    return objArr.map((item, index) => {
        return new APIModule(item.id, item.name, item.powerstate, item.biography, item.appearance, item.work, item.connection, item.image);
    });
};
