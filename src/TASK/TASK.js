export default class TASK {
    name; status; description; dateStart; dateFinish; dateSupposedFinish; tags;
    constructor(props) {
        const defaultValues = {
            name: null,
            description: null,
            status: null,
            dateStart: Date.now(),
            dateFinish: null,
            dateSupposedFinish: null,
            tags: []
        }
        for (const key of Object.keys(defaultValues)) {
            this[key] = (props && props[key]) || defaultValues[key];
        }
    }
    finish() {
        this.status = 'finished';
        this.dateFinish = Date.now();
    }
    delete() {
        this.status = 'deleted';
        this.dateFinish = Date.now();
    }
    // edit(props) {
    //     this = new TASK(props);
    // }
    addTag(tagName) {
        if (typeof (tagName) !== 'string') return
        if (this.tags.indexOf(tagName) > -1) return
        this.tags.push(tagName)
    }
    removeTag(tagName) {
        if (typeof (tagName) !== 'string') return
        const indexof = this.tags.indexOf(tagName);
        if (indexof > -1) this.tags.splice(indexof, 1);
    }
}